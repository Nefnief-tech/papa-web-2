<template>
  <h1 class="text-center text-3xl font-black">Mitarbeiter</h1>
  <form>
    <!--start of edeting platform-->
    <div class="input">
      <input
        type="text"
        placeholder="Mitarbeiter Name"
        class="input input-bordered input-accent w-full max-w-xs m-12"
        v-model="name"
      />
      <input
        type="number"
        placeholder="Ordnungsnummer"
        class="input input-bordered input-accent w-full max-w-xs m-12"
        v-model="num"
      />

      <input
        type="text"
        placeholder="Bild URL"
        class="input input-bordered input-accent w-full max-w-xs m-12"
        v-model="image"
      />
      <!--options-->

      <select class="select select-accent w-full max-w-xs" v-model="region">
        <option disabled selected>Dark mode or light mode?</option>
        <option>Auto</option>
        <option>Dark mode</option>
        <option>Light mode</option>
      </select>
    </div>
    <!--last but not least bescgreibung-->
    <div class="card m-20">
      <textarea
        class="textarea textarea-bordered"
        placeholder="Mitarbeiter Beschreibung"
        v-model="desc"
      ></textarea>

      <button class="btn btn-primary mt-10" v-on:click="submit()">
        Create Card
      </button>
    </div>
  </form>
</template>
<script>
// randome number generator
import { Account, Client, Storage, ID, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://appwrite.nief.tech/v1")
  .setProject("65254ba2c6d13ae30a67");
const account = new Account(client);
const storage = new Storage(client);
const databases = new Databases(client);

//authentication

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

export default {
  setup() {
    const image = ref("");
    const name = ref("");
    const desc = ref("");
    const region = ref("");

    const submit = () => {
      let htmlCode = `
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src="${image.value}" alt="Shoes" class="rounded-xl h-28 w-28" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">${name.value}</h2>
            <p>${desc.value}</p>
            <div class="card-actions">
              <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">${region.value}</span>
            </div>
          </div>
        </div>
      `;

      const promise = databases.createDocument(
        "6525a3104c1b6602d0ef",
        "6525a31a6d23271d8dff",
        ID.unique(),
        { Card: htmlCode }
      );

      promise.then(
        function (response) {
          console.log(response); // Success
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    };

    return {
      image,
      name,
      desc,
      region,
      submit,
    };
  },
};
</script>
