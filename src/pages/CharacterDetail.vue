<template>
    <div class="container pt-80 text-white">
        <h1 class="text-center">{{ character.name }}</h1>
        <div class="row">
            <div class="d-flex">
                <div class="col-4">
                    <div>
                        <h3>Information</h3>
                        <p>{{ character.description }}</p>
                    </div>


                    <div>
                        <h3>Class</h3>
                        <h6>{{ character.type?.name }}</h6>
                    </div>

                    <div>
                        <h3>Available Weapons</h3>
                        <ul>
                            <li v-for="weapon in character.items">{{ weapon.name }}</li>
                        </ul>
                    </div>
                </div>

                <div class="col-5">
                    <img :src="store.imgBasePath + character.image" :alt="character.name">
                </div>

                <div class="col-3">
                    <div class="card widget-card border-light shadow-sm card-bg">
                        <div class="card-body p-4">
                            <div>
                                <div class="col-6">
                                    <h3 class="card-title widget-card-title text-white mb-1"><i class="fa-brands fa-d-and-d"></i> Stats</h3>
                                </div>
                            </div>
                            <div class="card mt-5 border-0 bg-dark bg-gradient bg-opacity-50">
                                <div class="card-body">
                                    <div class="row gy-4">
                                        <div class="col-12">
                                            <div class="card bg-danger-subtle text-danger border-0">
                                                <div class="card-body">
                                                    <div class="row align-items-center">
                                                        <div class="col-8">
                                                            <div class="d-flex align-items-center">
                                                                <div>
                                                                    <h6 class="m-0 fs-3"><i class="fa-solid fa-hand-fist"></i></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <h6 class="h3 text-end m-0">{{ character.attack }}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="card bg-primary-subtle text-primary border-0">
                                                <div class="card-body">
                                                    <div class="row align-items-center">
                                                        <div class="col-8">
                                                            <div class="d-flex align-items-center">
                                                                <div>
                                                                    <h6 class="m-0 fs-3"><i class="fa-solid fa-shield"></i></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <h6 class="h3 text-end m-0">{{ character.defence }}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="card bg-success-subtle text-success border-0">
                                                <div class="card-body">
                                                    <div class="row align-items-center">
                                                        <div class="col-8">
                                                            <div class="d-flex align-items-center">
                                                                <div>
                                                                    <h6 class="m-0 fs-3"><i class="fa-solid fa-heart"></i></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <h6 class="h3 text-end m-0">{{ character.life }}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="card bg-warning-subtle text-warning border-0">
                                                <div class="card-body">
                                                    <div class="row align-items-center">
                                                        <div class="col-8">
                                                            <div class="d-flex align-items-center">
                                                                <div>
                                                                    <h6 class="m-0 fs-3"><i class="fa-solid fa-shoe-prints"></i></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <h6 class="h3 text-end m-0">{{ character.speed }}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            axios.get(`${this.store.apiUrl}characters/${this.$route.params.slug}`).then((res) => {
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

<style lang="scss" scoped>
.pt-80 {
    padding-top: 80px;
}

.card-bg {
    background-image: url('https://c4.wallpaperflare.com/wallpaper/80/949/81/world-of-warcraft-dragon-wallpaper-preview.jpg');
    background-size: contain;
    
}
</style>