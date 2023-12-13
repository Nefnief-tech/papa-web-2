<template>
  <h1 class="text-3xl font-bold text-center">Mitarbeiter</h1>
  <div class="center">
    <div class="mockup-code mb-10 w-2/4 mt-10">
      <pre
        data-prefix="$"
      ><code>&lt;div class="card w-96 bg-base-100 shadow-xl"&gt;
       &lt;div class="card-body"&gt;
        &lt;h2 class="card-title"&gt;Card title!&lt;/h2&gt;
        &lt;p&gt;If a dog chews shoes whose shoes does he choose?&lt;/p&gt;
        &lt;div class="card-actions justify-end"&gt;
       &lt;button class="btn btn-primary"&gt;Buy Now&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>
    </div>
  </div>
  <div class="center">
    <div>
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-accent w-full max-w-xs"
        id="input"
      />
      <button class="btn btn-primary mt-5" @click="createCard">
        Create Card
      </button>
    </div>
  </div>
</template>

<script>
import { Account, Client, Storage, ID, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://appwrite.nief.tech/v1")
  .setProject("65254ba2c6d13ae30a67");
const account = new Account(client);
const storage = new Storage(client);
const databases = new Databases(client);

function checkSession() {
  const promise = account.getSession("current");

  promise.then(
    function (response) {
      console.log(response); // Success
    },
    function (error) {
      console.log(error); // Failure
      window.location.href = "/login";
    }
  );
}

function createCard() {
  let card = document.getElementById("input").value;

  const promise = databases.createDocument(
    "6525a3104c1b6602d0ef",
    "6525a31a6d23271d8dff",
    ID.unique(),
    { card: card }
  );

  promise.then(
    function (response) {
      console.log(response);

      let IC = response.$id;

      //create card

      let cardsHtml = "";
      if (response.documents) {
        response.documents.forEach((document) => {
          cardsHtml += document.card;
        });
      }

      const promise = databases.createDocument(
        "6525a3104c1b6602d0ef",
        "6525a31a6d23271d8dff",
        ID.unique(),
        { employeeID: IC, card: response.card }
      );

      promise.then(
        function (response) {
          console.log(response);
        },
        function (error) {
          console.log(error);
        }
      );
    },

    function (error) {
      console.log(error);
    }
  );
}

export default {
  mounted() {
    checkSession();

    const promise = databases.getDocument(
      "6525a3104c1b6602d0ef",
      "6525a31a6d23271d8dff",
      "6525b6390c27800f5b88"
    );

    let ct = document.getElementById("ct");

    promise.then(
      function (response) {
        console.log(response); // Success
        ct.innerText = response.card;
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  },
  methods: {
    createCard,
  },
};

//initialize and create ids for all employees to delte them later or change them
</script>
