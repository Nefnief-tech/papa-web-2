<script setup>
import { onMounted } from "vue";

let save = () => {
  document.cookie = "cookies=true; path=/";
  document.getElementById("my_modal_1").close();
};

function checkCookie(name) {
  let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
  else return null;
}

onMounted(() => {
  if (checkCookie("cookies")) {
    document.getElementById("my_modal_1").close();
  } else {
    document.getElementById("my_modal_1").showModal();
  }
});
</script>

<template>
  <dialog ref="dialog" id="my_modal_1" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Wir benutzen Cookies!</h3>
      <div class="py-4">
        <p>
          Durch die Nutzung unserer Website stimmen Sie der Verwendung von
          Cookies zu, um Ihr Erlebnis zu verbessern und unsere Seite besser zu
          verstehen.
        </p>
      </div>
    </div>
    <div>
      <div class="modal-action">
        <form method="dialog">
          <div class="center">
            <button class="btn btn-error mr-14">Cookies Ablehnen</button>
            <button class="btn btn-success" @click="save">
              Cookies Akzeptieren
            </button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>
<style>
.center {
  justify-content: center;
  display: flex;
}
</style>
