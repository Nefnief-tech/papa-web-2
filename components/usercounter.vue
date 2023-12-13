<template>
  <p></p>
</template>

<script setup>
import { Client, Databases } from "appwrite";
import { onMounted } from "vue";

const client = new Client();
const databases = new Databases(client);

client
  .setEndpoint("https://appwrite.nief.tech/v1") // Your API Endpoint
  .setProject("65254ba2c6d13ae30a67"); // Your project ID

const createDatabaseEntry = async () => {
  try {
    const response = await databases.createDocument(
      "6542bd031f97fb623cb2", //DB ID
      "6542bd0ecc5cb5f54935", //COLLECTION ID
      ID.unique(),
      {
        users: "halihalo",
      }
    );
    console.log(response); // Success
  } catch (error) {
    console.log(error); // Failure
  }
};

onMounted(() => {
  createDatabaseEntry();
});
</script>
