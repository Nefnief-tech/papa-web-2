<!-- app.vue -->

<template>
  <div class="lockdown">
    <div class="center">
      <img
        width="525"
        height="418"
        src="/undraw_warning_re_eoyh.svg"
        class="center mt-20"
      />
    </div>
    <h1 class="text-center font-black text-8xl mt-20">Website on Lockdown</h1>
    <p class="text-center text-xl mt-10 text-error">
      We are sorry but right now our website is not available! <br />
      Please try again later!
    </p>
  </div>
  <!--begin normal page-->

  <div class="normal">
    <cookiebanner />
    <NuxtPage />
    <Usercounter />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import { Account, Client, Storage, ID, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://appwrite.nief.tech/v1")
  .setProject("65254ba2c6d13ae30a67");
const account = new Account(client);
const storage = new Storage(client);
const databases = new Databases(client);

const promise = databases.getDocument("111", "111", "111");

promise.then(
  function (response) {
    console.log(response); // Success
    if (response.lockdawn == "no") {
      console.log("true");
      document.querySelector(".lockdown").style.display = "none";
      document.querySelector(".normal").style.display = "block";
    } else {
      console.log("false");
      document.querySelector(".lockdown").style.display = "block";
      document.querySelector(".normal").style.display = "none";
    }
  },
  function (error) {
    console.log(error); // Failure
  }
);
</script>

<style></style>
