<template>
  <h1 class="text-center text-3xl font-black">Mitarbeiter</h1>

  <!--start of edeting platform-->
  <div class="center">
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

    <select class="select select-accent w-fullmax-w-s m-12" v-model="region">
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

  <!--image upload-->
  <div class="center">
    <input
      type="file"
      class="file-input file-input-bordered file-input-accent w-full max-w-xs"
      id="upload"
    />
    <button class="btn btn-primary ml-10" @click="upload">Upload Image</button>
  </div>

  <!--Divider-->
  <div class="divider m-12"></div>

  <!--list of images of employees-->
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
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
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
    const num = ref("1");
    const tableData = ref([]); // Define tableData to store the documents

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
        { Card: htmlCode, name: name.value, ID: ID.unique(), num: num.value }
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

    const upload = () => {
      const promise = storage.createFile(
        "65402371e69a06bb7c03",
        ID.unique(),
        document.getElementById("upload").files[0]
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
      upload,
      tableData, // Return tableData so it can be used in the template
    };
  },
};

//table

function getTableData() {
  const promise = databases.listDocuments(
    "6525a3104c1b6602d0ef",
    "6525a31a6d23271d8dff"
  );

  promise.then(
    function (response) {
      console.log(response); // Success
      tableData.value = response.documents; // Set tableData to the documents
    },
    function (error) {
      console.log(error); // Failure
    }
  );
}
</script>
