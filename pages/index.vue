<template>
  <div class="hero mb-20 mt-20">
    <h1 class="text-center text-5xl font-black">
      Willkommen bei Markus Hirsch e.K.
    </h1>
  </div>

  <div class="grid-parent mt-50">
    <div class="grid lg:grid-cols-2 gap-20">
      <div class="card w-96 bg-base-200 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="./Betrieb_Uttenreuth.jpg" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Betrieb Uttenreuth</h2>
          <p>
            91080 Uttenreuth <br />
            Erlanger Str.33 <br />
            Tel.: 09131-57088 <br />
            uttenreuth@hirsch-boschservice.de
          </p>
          <div class="card-actions">
            <button class="btn btn-success mt-5">
              <RouterLink to="Utt-start">mehr erfahren</RouterLink>
            </button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-200 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src="./Betrieb_Höchstadt.jpg"
            alt="Shoes"
            class="rounded-xl"
            format="webp"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Betrieb Höchstadt</h2>
          <p>
            91315 Höchstadt/Aisch <br />
            Schwarzenbacher Ring 4 <br />
            Tel.: 09193-7700 <br />
            hoechstadt@hirsch-boschservice.de
          </p>
          <div class="card-actions">
            <button class="btn btn-success mt-5">
              <RouterLink to="Hös-start">mehr erfahren</RouterLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="center">
    <div class="card bg-base-200 shadow-xl w-fit m-10 mt-20">
      <div class="card-body">
        <h1
          class="text-center lg:text-5xl lg:font-black pb-20 text-lg font-bold"
        >
          Wir begrüßen Sie auf der Internetseite der Firma Markus Hirsch e.K. -
          Ihre Kfz-Werkstatt.
        </h1>
        <p>
          Mit unseren beiden Bosch Car Service sind wir Ihr kompetenter
          Ansprechpartner f&uuml;r alle Arbeiten rund um's Fahrzeug im
          Gro&szlig;raum Erlangen - in Uttenreuth &amp; H&ouml;chstadt.<br />
          Wir sind Ihre Werkstatt f&uuml;r alle Automarken mit der Kompetenz
          eines Spezialisten.<br />
          Ob Mechanik (Auspuff, Bremse, Fahrwerk,...), Kundendienst,
          Klimaanlagen/Standheizungen, Diesel-/Benzin-Einspritzung,
          Unfallinstandsetzung oder professionelle Diagnose und
          Fehlerbeseitigung um nur einige Punkte zu nennen.<br />
          Mit unserem Betrieb in Uttenreuth befinden wir uns direkt im Osten von
          Erlangen mit unserer Aral Tankstelle - mit unserem Betrieb in
          H&ouml;chstadt sind wir westlich von Erlangen zu finden.
        </p>
        <div class="card-actions justify-end"></div>
      </div>
    </div>
  </div>

  <footer class="footer p-10 bg-neutral text-neutral-content mt-20">
    <div>
      <span class="footer-title">Nützliche Links</span>
      <a class="link link-hover">Impressum</a>
      <a class="link link-hover">Datenschutz</a>
    </div>
    <div>
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </div>
    <div>
      <span class="footer-title">Legal</span>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </div>
  </footer>
  <Usercounter />
</template>
<script>
import { Client, Account } from "appwrite";

const client = new Client();

const account = new Account(client);

client
  .setEndpoint("https://appwrite.nief.tech/v1") // Your API Endpoint
  .setProject("65254ba2c6d13ae30a67"); // Your project ID

const promise = account.createAnonymousSession();

promise.then(
  function (response) {
    console.log(response); // Success
  },
  function (error) {
    console.log(error); // Failure
  }
);
</script>
<style>
.card-body {
  display: flex;
  justify-content: center;
}
.center {
  text-align: center;
}
.grid-parent {
  display: flex;
  justify-content: center;
}
</style>
