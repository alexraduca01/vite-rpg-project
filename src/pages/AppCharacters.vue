<template>
    <div class="characters-bg">
        <div class="container h-100 pb-5">
            <div class="row">
                <div v-for="character in characters" class="col-4">
                    <AppCard :character="character" />
                </div>
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
        getAllCharacters() {
            axios.get(store.apiUrl + 'characters').then((res) => {
                console.log(res.data);
                this.characters = res.data;
            })
        }
    },
    mounted() {
        this.getAllCharacters();
    }
}
</script>

<style lang="scss" scoped>
.characters-bg {
    background-image: url('/public/img/wallpapersden.com_fantasy-castle-hd-digital-drawing_2000x1250.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

}
</style>