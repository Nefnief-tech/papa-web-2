<script setup>
import Nav from "./Nav.vue";
</script>

<template>
  <Nav />

  <div class="center">
    <h1 class="text-center text-5xl font-black">Betrieb Uttenreuth</h1>
  </div>
  <div class="img">
    <img src="./Betrieb_Uttenreuth.jpg" class="w-2/3 shadow-2xl mt-20" />
  </div>

  <!-- Start of Text -->
  <div class="center">
    <p class="m-10 lg:font-bold lg:text-2xl text-lg">
      Wir, die Firma Hirsch - Bosch Car Service, bieten Ihnen Service rund um
      Ihr Fahrzeug - mit Ersatzteilen in Erstausrüsterqualität und Markenölen
      angefangen von Kundendienstarbeiten, Auspuff, Bremse, Fahrwerk, über
      Unfallinstandsetzung, Reifenservice und Diagnose in der elektrischen
      Anlage sowie Einspritzsystemen. Wir sind Ihre Kfz-Werkstatt im Landkreis
      Erlangen-Höchstadt.
    </p>
  </div>
  <div class="center">
    <h1 class="text-center text-5xl font-black mt-20">Galerie:</h1>
  </div>

  <!-- Start of Slider -->
  <div class="carousel w-auto slider mt-20">
    <div id="slide1" class="carousel-item justify-center relative w-full">
      <img src="./tanke-resize.jpg" class="w-auto" />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a href="#slide4" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" class="carousel-item justify-center relative w-full">
      <img src="./Laden4.jpg" class="w-auto" />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" class="carousel-item justify-center relative w-full">
      <img src="./Annahme2.png" class="w-auto h-auto" />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>
<style>
img {
  border-radius: 2rem;
}
.center {
  text-align: center;
  display: flex;
  justify-content: center;
}
.img {
  display: flex;
  justify-content: center;
}
.grid {
  display: flex;
  justify-content: center;
}
</style>
