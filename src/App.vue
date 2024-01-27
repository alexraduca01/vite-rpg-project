<template>
  <AppHeader />
  <main class="h-100 bgsmoke">
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

.bgsmoke{
    background-attachment: fixed;
    background-size: cover;
    background-image: url('https://baldursgate3.game/masks/smoke.jpg');
}

</style>
