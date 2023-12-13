<template>
  <div class="alert alert-error mt-24">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span>DANGEZONE!!!!!</span>
  </div>
  <!--dangerzone start-->

  <div class="center">
    <h1 class="text-center text-5xl font-black mt-20">Gefahrenzone:</h1>
  </div>
  <input
    type="text"
    placeholder="Document ID"
    class="input input-bordered input-accent w-full max-w-xs m-12"
    v-model="docid"
  />
  <button class="btn btn-error" @click="deleteDocument">Delete</button>
</template>
<script>
import { Client, Databases } from "appwrite";

export default {
  data() {
    return {
      docid: "",
    };
  },
  methods: {
    deleteDocument() {
      const client = new Client();
      const databases = new Databases(client);

      client
        .setEndpoint("https://appwrite.nief.tech/v1") // Your API Endpoint
        .setProject("65254ba2c6d13ae30a67"); // Your project ID

      const promise = databases.deleteDocument(
        "6525a3104c1b6602d0ef", //database ID
        "6525a31a6d23271d8dff", //Collection ID
        this.docid //Document ID
      );

      promise.then(
        function (response) {
          console.log(response); // Success
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    },
  },
};
</script>
