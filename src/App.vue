<template>
  <AppHeader />
  <main class="h-100">
    <router-view :key="$route.path"></router-view>
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppCard from './components/AppCard.vue';
import { store } from './store';
import axios from 'axios';
  export default {
    name: 'App',
    components: {
      AppHeader,
      AppFooter,
      AppCard,
    },
    data(){
      return {
        store,
      }
    },
    // methods:{
    //   getCharacters(){
    //     axios.get(store.secondApiUrl + 'characters').then((res) => {
    //       store.characters = res.data
    //     })
    //   }
    // },
    // mounted(){
    //   this.getCharacters();
    // }
  }
</script>

<style lang="scss" scoped>

main {
  background-image: url('../../public/img/game-bg.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}

</style>
