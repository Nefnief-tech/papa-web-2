<template>
  <h1 class="font-black text-3xl text-center mb-7">Status:</h1>
  <div>
    <h3 class="font-medium text-xl text-left">Datenbank:</h3>
    <span v-if="isOnline" class="badge badge-success badge-md">Online</span>
    <span v-else class="badge badge-error badge-md">Offline</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOnline: navigator.onLine,
    };
  },
  created() {
    window.addEventListener("online", this.updateOnlineStatus);
    window.addEventListener("offline", this.updateOnlineStatus);
  },
  beforeDestroy() {
    window.removeEventListener("online", this.updateOnlineStatus);
    window.removeEventListener("offline", this.updateOnlineStatus);
  },
  methods: {
    updateOnlineStatus() {
      this.isOnline = navigator.onLine;
    },
  },
};
</script>
