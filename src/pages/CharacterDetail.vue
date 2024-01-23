<template>
    <div class="container">
        <h1>{{ character.name }}</h1>
        <div>
            <img :src="store.imgBasePath + character.image" :alt="character.name">
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
</template>

<script>
import { store } from '../store'
import axios from 'axios';
export default {
    name: 'CharacterDetail',
    data() {
        return {
            store,
            character: [],
        }
    },
    methods: {
        getCharacterData() {
            console.log(this.$route);
            axios.get(`${this.store.apiUrl}characters/${this.$route.params.id}`).then((res) => {
                console.log(res.data);
                if (res.data) {
                    this.character = res.data
                }
            })
        }
    },
    mounted() {
        this.getCharacterData();
    }
}
</script>

<style lang="scss" scoped></style>