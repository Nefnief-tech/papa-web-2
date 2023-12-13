<template>
  <h1 class="text-3xl font-black text-center m-10">Admin Login</h1>

  <div>
    <div class="card w-96 bg-base-100 shadow-xl pcenter">
      <div class="bg-red rounded-lg">
        <p id="error" class="p-10"></p>
      </div>
      <div class="card-body">
        <form>
          <input
            type="email"
            placeholder="Email"
            v-model="email"
            class="input input-bordered input-success w-full max-w-xs m-5 snap-center"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            class="input input-bordered input-success w-full max-w-xs m-5 snap-center"
          />
          <button
            type="button"
            @click="login(email, password)"
            class="btn btn-success m-5 mb-5 btn-wide"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Account, Client, Storage, ID, Databases } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://appwrite.nief.tech/v1")
  .setProject("65254ba2c6d13ae30a67");
const account = new Account(client);

const router = useRouter();
const loggedInUser = ref(null);
const email = ref("");
const password = ref("");
const name = ref("");

const login = async (email, password) => {
  try {
    await account.createEmailSession(email, password);
    loggedInUser.value = await account.get();
    router.push("/admin"); // Navigate to the /admin route
  } catch (error) {
    console.error(error); // Log the error
  }
};

const logout = async () => {
  await account.deleteSession("current");
  loggedInUser.value = null;
  router.push("/"); // Navigate to the home page after logout
};

if (!loggedInUser.value) {
  router.push({
    name: "login",
    query: { source_path: "/admin" },
  });
}
</script>

<script>
export default {
  setup() {
    return {
      loggedInUser,
      email,
      password,
      name,
      login,
      register,
      logout,
    };
  },
};
</script>
<style>
.pcenter {
  margin: auto;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
