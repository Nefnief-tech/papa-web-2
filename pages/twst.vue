<template>
  <h1 class="text-3xl font-bold text-center">Mitarbeiter</h1>

  <templatee />

  <div>
    <input
      type="text"
      placeholder="card structure from above"
      class="input input-bordered input-accent w-full max-w-xs m-12"
      id="input"
    />
    <input
      type="text"
      placeholder="name of employee"
      class="input input-bordered input-accent w-full max-w-xs m-12"
      id="name"
    />
    <input
      type="number"
      placeholder="order number"
      class="input input-bordered input-accent w-full max-w-xs m-12"
      id="num"
    />
    <button class="btn btn-primary" @click="createCard">Create Card</button>
  </div>

  <!--Divider-->

  <div class="divider m-12"></div>

  <!--list of employees-->
  <h1 class="text-3xl font-bold text-center">Mitarbeiter Liste:</h1>

  <!--beginn of list -->

  <div class="overflow-x-auto">
    <table class="table table-zebra" ref="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>ID</th>
          <th>Order</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <th>{{ index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.$id }}</td>
          <td>{{ item.num }}</td>
          s
        </tr>
      </tbody>
    </table>
  </div>
  <dangerzone />
  <div class="divider"></div>
  <imageupload />
  <div class="divider"></div>
  <filetable />

  <div class="toast" v-if="showToast">
    <div class="alert alert-info">
      <span>New message arrived.</span>
    </div>
  </div>
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

//create Card

export default {
  data() {
    return {
      // your data properties here
    };
  },
  methods: {
    createCard() {
      let card = document.getElementById("input").value;
      let name = document.getElementById("name").value;
      let num = document.getElementById("num").value;

      const promise = databases.createDocument(
        "6525a3104c1b6602d0ef", //database ID
        "6525a31a6d23271d8dff", //collection ID
        ID.unique(),
        { Card: card, name: name, num: num }
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
            "6525a3104c1b6602d0ef", //database ID
            "6525a31a6d23271d8dff", //collection ID
            ID.unique(),
            { employeeID: IC, card: response.card }
          );

          // continue your code here
        },
        function (error) {
          console.log(error);
        }
      );
    },
    // other methods here
  },
  // other Vue options here
};

//table init and visalisation of employees
</script>
