<template>
  <nav class="navbar navbar-expand-lg p-0 bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="../../public/img/logo.png" class="logo" alt="logo"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="item in menu">
            <router-link :to="{ name: item.name }" class="nav-link text-white" active-class="active">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "AppHeader",
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
    height: 100px;
    width: 100%;
}
.active {
    color: chartreuse!important;
}
</style>
