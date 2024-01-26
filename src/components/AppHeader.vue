<template>
  <nav class="navbar navbar-expand-lg p-0 bg-dark">
    <div class="container-fluid px-0">
      <a class="navbar-brand ms-2" href="#"><img src="../../public/img/logo.png" class="logo" alt="logo"></a>
      <button
        class="me-2 navbar-toggler bg-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav bg-dark">
          <li class="nav-item" v-for="item in menu">
            <router-link :to="{ name: item.name }" class="nav-link text-white px-3">
              <FancyButton :text="item.label" />
            </router-link>
          </li>
        </ul>
        <div>
          <router-link :to="{ name: 'game' }" class="nav-link text-white px-3">
            <FancyButton :text="'play game'" />
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import FancyButton from '../components/FancyButton.vue';
    export default {
        name: "AppHeader",
        components: {
          FancyButton,
        },
        data() {
            return {
                menu: [
                    {
                        label: "Home",
                        name: "home",
                    },
                    {
                        label: "Characters",
                        name: "characters",
                    },
                    {
                        label: "Types",
                        name: "types",
                    },
                    {
                        label: "Items",
                        name: "items",
                    },
                ],
            }
        }
    };
</script>

<style lang="scss" scoped>

.logo {
  width: 60px;
}
nav {
    position: fixed;
    top: 0;
    height: 80px;
    width: 100%;
    z-index: 1000;
}
</style>
