<script setup>
import Nav from "./Nav.vue";
</script>

<template>
  <Nav />
  <usercounter />

  <div class="center">
    <h1 class="text-center lg:text-5xl lg:font-black text-xl font-bold mt-10">
      Dienstleistungen
    </h1>
  </div>

  <!--start of carrousell-->
  <div class="center mt-20">
    <div
      class="carousel carousel-center max-w-max p-4 space-x-4 bg-neutral rounded-box m-5"
    >
      <div class="carousel-item">
        <!-- cards -->
        <div class="card w-96 bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Inspektion/Service</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card w-96 bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Unfallinstandsetzung</h2>
            <p>
              Die Reparatur eines beschädigten Fahrzeugs ist ein komplexer
              Prozess, der von vielen Faktoren abhängt, wie z. B. der Schwere
              des Schadens, dem Alter des Fahrzeugs und den verfügbaren
              Ersatzteilen. Es ist wichtig, einen qualifizierten Mechaniker zu
              beauftragen, die Reparatur durchzuführen, um sicherzustellen, dass
              das Fahrzeug sicher und effizient ist.
            </p>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card w-96 bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Reifen-service</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card w-96 bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Mechanik</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card w-96 bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Klime-service</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card w-96 bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Autoglas-Service</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card w-96 bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-center">Standheizung</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
