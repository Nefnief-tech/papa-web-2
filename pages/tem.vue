<template>
  <h1 class="text-center text-3xl font-bold">Utt-team</h1>
  <div class="center mt-12">
    <div id="cards" class="xl lg:grid lg:grid-cols-3 lg:gap-20">
      <div
        v-for="document in documents"
        v-if="!isLoading"
        v-html="document.Card"
      ></div>

      <div
        class="flex justify-center items-center h-screen center"
        v-if="isLoading"
      >
        <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    </div>
  </div>
  <Usercounter />
</template>

<script>
import { Account, Client, Storage, ID, Databases } from "appwrite";

export default {
  data() {
    return {
      documents: [],
      isLoading: true,
    };
  },
  mounted() {
    const client = new Client();

    client
      .setEndpoint("https://appwrite.nief.tech/v1")
      .setProject("65254ba2c6d13ae30a67");
    const account = new Account(client);
    const storage = new Storage(client);
    const databases = new Databases(client);

    //kick if not logged in:
    const promise2 = account.getSession("current");

    promise2.then(
      function (response) {
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
        window.location.href = "/";
      }
    );

    const promise = databases.listDocuments(
      "6525a3104c1b6602d0ef",
      "6525a31a6d23271d8dff"
    );

    promise.then(
      (response) => {
        console.log(response); // Success
        response.documents.sort((a, b) => {
          if (a.num === null) return 1;
          if (b.num === null) return -1;
          return a.num - b.num;
        });
        this.documents = response.documents;
        this.isLoading = false;
      },
      function (error) {
        console.log(error); // Failure
        this.isLoading = false;
      }.bind(this)
    );
  },
};
</script>

<style>
.center {
  display: flex;
  justify-content: center;
}
</style>
