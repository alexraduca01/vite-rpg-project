<template>
  <AppHeader />
  <main>
    <router-view :key="$route.path"></router-view>
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
  export default {
    name: 'App',
    components: {
      AppHeader,
      AppFooter,    
    },
  }
</script>

<style lang="scss" scoped>

main {
  margin-top: 100px;
}

</style>
