<template>
    <div class="container">
        <div class="row">
            <div v-for="character in characters" class="col-4">
                <AppCard :character="character" />
            </div>
        </div>
    </div>
       
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import AppCard from '../components/AppCard.vue';
    export default {
        name: 'AppCharacters',
        components: {
            AppCard
        },
        data() {
            return {
                store,
                characters: [],
            }
        },
        methods: {
            getAllCharacters(){
                axios.get(store.apiUrl + 'characters').then((res) => {
                    console.log(res.data);
                    this.characters = res.data;
                })
            }
        },
        mounted(){
            this.getAllCharacters();
        }
    }
</script>

<style lang="scss" scoped>

</style>