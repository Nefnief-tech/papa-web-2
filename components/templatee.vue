<template>
  <div class="text">
    <h2 class="text-xl font-bold mb-5 text-center mt-10">
      Card main structure:
    </h2>
    <p
      id="ct"
      class="mb-10 border-2 border-red-900 rounded-lg text-center"
      contenteditable="true"
    ></p>
  </div>
</template>
<script>
import { Account, Client, Storage, Databases } from "appwrite";

export default {
  data() {
    return {
      client: null,
      databases: null,
      ct: null,
    };
  },
  mounted() {
    this.client = new Client();
    this.client
      .setEndpoint("https://appwrite.nief.tech/v1")
      .setProject("65254ba2c6d13ae30a67");

    this.databases = new Databases(this.client); // Create an instance of Databases

    this.ct = this.$el.querySelector("#ct");

    this.getDocument();
  },
  methods: {
    getDocument() {
      const template = this.databases.getDocument(
        "6525a3104c1b6602d0ef", //Database ID
        "6525a31a6d23271d8dff", //Collection ID
        "653e9434c27921501737" //Document ID
      );

      template.then(
        (response) => {
          console.log(response); // Success
          this.ct.innerText = response.Card;
        },
        (error) => {
          console.log(error); // Failure
        }
      );
    },
  },
};
</script>
