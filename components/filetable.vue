<template>
  <!-- Table to display the items -->
  <div class="overflow-x-auto">
    <table class="table table-zebra">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through each item and display its name and ID -->
        <tr v-for="(item, index) in items" :key="index">
          <th>{{ index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.$id }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="divider"></div>

  <!-- Section to get the URL of an image -->
  <h1 class="text-3xl font-bold text-center">Get Image URL</h1>

  <div class="center">
    <!-- Input for the user to enter the ID of the image they want the URL for -->
    <input
      type="text"
      id="id2"
      placeholder="id of wanted image URL"
      class="input input-bordered input-accent w-full max-w-xs m-12 rounded-3xl"
    />
  </div>
  <!-- Display the result (the URL) -->
  <div class="center">
    <p class="text-3xl font-medium text-center">{{ res }}</p>

    <!-- Button to trigger the getUrl method -->
    <button class="btn btn-primary justify-center rounded-full" @click="getUrl">
      Get URL
    </button>
  </div>
</template>

<script>
import { Account, Client, Storage, ID, Databases } from "appwrite";

export default {
  data() {
    return {
      items: [], // Array to hold the items
      res: "", // String to hold the result (the URL)
    };
  },
  methods: {
    getUrl() {
      // Create a new Appwrite client
      const client = new Client();
      client
        .setEndpoint("https://appwrite.nief.tech/v1") // Set the endpoint
        .setProject("65254ba2c6d13ae30a67"); // Set the project ID

      // Create a new Storage instance
      const storage = new Storage(client);

      // Get the view URL of the file with the given ID
      const result = storage.getFileView(
        "65402371e69a06bb7c03",
        document.getElementById("id2").value
      );
      // Set the result to the URL
      this.res = result.href;
      console.log(result);
    },
  },
  created() {
    // This code runs when the component is created
    // It gets the list of files and updates the items data property
    const client = new Client();
    client
      .setEndpoint("https://appwrite.nief.tech/v1")
      .setProject("65254ba2c6d13ae30a67");

    const storage = new Storage(client);

    const promise = storage.listFiles("65402371e69a06bb7c03");

    promise.then(
      (response) => {
        this.items = response.files; // Update the items data property with the files
      },
      function (error) {
        console.log(error); // Log any errors
      }
    );
  },
};
</script>
