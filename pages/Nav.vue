<template>
  <div class="navbar bg-base-200">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case lg:text-xl text-lg">
        <img
          width="45"
          height="45"
          src="/bosch-service.svg"
          class="fill-white rounded-none"
        />
      </a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>Mehr</summary>
            <ul class="p-2 bg-base-200">
              <li>
                <RouterLink to="/DL">Dienstleistungen</RouterLink>
              </li>
              <li><a>Stammkunden-Konzept</a></li>
              <li><a>Firmenkooperationen</a></li>
              <li><a>Kontakt</a></li>
              <li><a>Über uns</a></li>
              <li><a>Stellenangebot</a></li>
            </ul>
          </details>
        </li>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><a href="/tem">Team</a></li>
      </ul>
    </div>
  </div>
</template>
