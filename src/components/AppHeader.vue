<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid box-shadow">
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
        <ul class="navbar-nav">
          <li class="nav-item" v-for="item in menu">
            <router-link :to="{ name: item.name }" class="nav-link text-white px-3 scale-button">
              <FancyButton :text="item.label" />
            </router-link>
          </li>
        </ul>
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
                        label: "Classes",
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

.box-shadow {
  box-shadow: inset 0px 0px 35px black;
}

.logo {
  width: 125px;
  position: fixed;
  top: 80px;
  right: 40px;
}
nav {
  position: fixed;
  top: -5px;
  height: 80px;
  width: 100%;
  z-index: 1000;
  box-shadow: inset  0px 0px 100px rgba(0, 0, 0, 0.511);
}
.scale-button {
  scale: 0.85;
}
</style>
