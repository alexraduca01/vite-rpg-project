<template>
  <AppHeader />
  <main>
    <AppHome />
  </main>
  <AppFooter />
</template>

<script>
import AppHome from './pages/AppHome.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
  export default {
    name: 'App',
    components: {
      AppHome,
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
