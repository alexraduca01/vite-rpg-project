<template>
    <div class="d-flex flex-column justify-content-center vh-100">
        <div class="container game-box transparent-bg text-white vh-80 p-0">
            <div class="d-flex justify-content-around position-relative h-70 align-items-center">
                <div class="user-card" :class="!charFlag ? 'my-card' : ''">
                    <div v-if="charFlag" class="h-100 rounded">
                        <img :src="store.imgBasePath + singleCharacter.image" class="img-fluid rounded-top" :alt="singleCharacter.name">
                        <div>
                            <h5 class="text-center m-0 py-2 text-white">{{ singleCharacter.name }}</h5>
                            <div class="container text-center">
                                <div class="row">
                                    <div class="col text-danger">Atk</div>
                                    <div class="col text-primary">Def</div>
                                    <div class="col text-warning">Spd</div>
                                    <div class="col text-success">HP</div>
                                </div>
                                <div class="row">
                                    <div class="col text-danger">{{ singleCharacter.attack }}</div>
                                    <div class="col text-primary">{{ singleCharacter.defence }}</div>
                                    <div class="col text-warning">{{ singleCharacter.speed }}</div>
                                    <div class="col text-success">{{ singleCharacter.life }}</div>
                                </div>
                            </div>
                            <div class="container mt-4">
                                <div class="row justify-content-around">
                                    <div class="item-box">
                                        <img :src="store.imgBasePath + singleCharacter.items[0].image" :alt="singleCharacter.items[0].name">
                                    </div>
                                    <div class="item-box">
                                        <img :src="store.imgBasePath + singleCharacter.items[1].image" :alt="singleCharacter.items[1].name">
                                    </div>
                                    <div class="item-box">
                                        <img :src="store.imgBasePath + singleCharacter.items[2].image" :alt="singleCharacter.items[2].name">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="play-buttons">
                    <button class="d-none">ciao</button><br>
                    <button class="mt-2 play rounded-pill text-uppercase">play</button>
                </div>
                <div class="my-card ia-card">
                    
                </div>
            </div>
            <div class="d-flex flex-wrap h-30 w-75 m-auto ">
                <swiper :slidesPerView="5" :spaceBetween="10" :freeMode="true" :modules="modules" class="mySwiper rounded">
                    <swiper-slide  class="char-box cursor-pointer" v-for="item in store.characters">
                        <img @click="changeCharacter(item.id)" :src="store.imgBasePath + item.image" class="img-fluid" :alt="item.name">
                        <div class="transparent-bg py-3 rounded-bottom-5">
                            <h6 class="text-center m-0 py-1 text-danger">{{ item.name }}</h6>
                            <h6 class="text-center m-0 text-warning">{{ item.type.name }}</h6>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../store";
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
    export default {
        name: 'AppGame',
        components: {
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                store,
                modules: [FreeMode, Pagination],
                activeIndex: 0,
                charFlag: false,
                singleCharacter: [],
            }
        },
        methods: {
            getAllCharacters(){
                axios.get(store.apiUrl + 'characters').then((res) => {
                    console.log(res.data);
                    store.characters = res.data;
                })
            },
            test(){
                console.log('test');
            },
            changeCharacter(id){
                for(let i = 0; i < store.characters.length; i++){
                    if(store.characters[i].id === id){
                        this.activeIndex = i;
                    }
                }
                this.charFlag = true;
                this.singleCharacter = this.activeCharacter(id);
                // console.log(this.singleCharacter);
            },
            activeCharacter(id) {
                if(store.characters[this.activeIndex].id === id){
                    return store.characters[this.activeIndex];
                }
            },
            chosenCharacter(){

            }
        },
        mounted(){
            this.getAllCharacters();
        }
    }
</script>

<style lang="scss" scoped>

.play {
    background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);
    padding: 10px 20px;
    border: 1px solid black;
    color: white;
}
.play-buttons {
    position: absolute;
    top: 65%;
}

.item-box {
    width: 50px;
    height: 50px;
    background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
    > img {
        width: 48px;
        height: 48px;
        background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
        transform: translate(-11px, 1px);
    }
}
.vh-80 {
    height: 80vh;
}

.h-70 {
    height: 70%;
}
.h-30 {
    height: 30%;
}

.my-card {
    border-radius: 25px;
    background-image: url('../../public/img/card-back.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.user-card {
    width: 250px;
    height: 450px;
    border-radius: 15px;
    > div {
        background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
        background-blend-mode: multiply;
    }
}

.ia-card {
    width: 250px;
    height: 450px;
}

.debug {
    border: 1px solid white;
}

.char-box {
    border-radius: 25px;
    overflow: hidden;
    user-select: none;
}

.game-box {
    border-radius: 50px;
}

.transparent-bg {
    background-color: rgba(0, 0, 0, 0.5);
}

.game-box {
    border-radius: 50px;
}

.transparent-bg {
    background-color: rgba(0, 0, 0, 0.5);
}

.cursor-pointer {
    cursor: pointer;
}
</style>