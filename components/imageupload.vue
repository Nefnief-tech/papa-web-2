<template>
  <h1 class="text-3xl font-bold text-center">Image upload</h1>
  <div>
    <input
      id="uploader"
      type="file"
      class="file-input file-input-bordered file-input-accent w-full max-w-xs"
    />
    <input
      id="id"
      type="text"
      placeholder="Document ID"
      class="input input-bordered input-accent w-full max-w-xs m-12"
      v-model="docid"
    />
    <button @click="upload">Upload</button>
  </div>
</template>

<script>
import { Account, Client, Storage, ID, Databases } from "appwrite";

export default {
  data() {
    return {
      docid: "",
    };
  },
  methods: {
    upload() {
      let id = this.docid;

      const client = new Client();
      client
        .setEndpoint("https://appwrite.nief.tech/v1")
        .setProject("65254ba2c6d13ae30a67");

      const storage = new Storage(client);

      const file = document.getElementById("uploader").files[0];

      const promise = storage.createFile("65402371e69a06bb7c03", id, file);

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
