<template>
  <div class="stats shadow">
    <div class="stat">
      <div class="stat-title">Total Page Views</div>
      <div class="stat-value" id="stats">{{ stats }}</div>
      <div class="stat-desc">{{ stats }} more then ever :)</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Client, Databases } from "appwrite";

const client = new Client();
const databases = new Databases(client);

client
  .setEndpoint("https://appwrite.nief.tech/v1") // Your API Endpoint
  .setProject("65254ba2c6d13ae30a67"); // Your project ID

let stats = ref(0);

onMounted(async () => {
  try {
    const response = await databases.listDocuments(
      "6542bd031f97fb623cb2", //DB ID
      "6542bd0ecc5cb5f54935" //COLLECTION ID
    );
    stats.value = response.total;
  } catch (error) {
    console.log(error); // Failure
  }
});
</script>
