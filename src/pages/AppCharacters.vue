<template>
    <div class="container">
        <div class="row">
            <div v-for="character in characters" class="col-4">
                <img :src="store.imgBasePath + character.image" :alt="character.name">
                <div>
                    <h3>{{ character.name }}</h3>
                    <p>{{ character.description }}</p>

                    <h4>Stats</h4>
                    <ul class="list-unstyled">
                        <li>Attack: {{ character.attack }}</li>
                        <li>Defense: {{ character.defence }}</li>
                        <li>Health: {{ character.life }}</li>
                        <li>Speed: {{ character.speed }}</li>
                        <li>Sex: {{ character.sex }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
    export default {
        name: 'AppCharacters',
        data() {
            return {
                store,
                characters: [],
            }
        },
        methods: {
            getAllCharacters(){
                axios.get(store.apiUrl + '/characters').then((res) => {
                    console.log(res.data);
                    this.characters = res.data.results;
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