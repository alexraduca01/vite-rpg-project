<template>
    <div class="d-flex flex-column justify-content-center vh-100">
        <div class="container transparent-bg text-white vh-100 p-0">
            <div class="d-flex justify-content-around position-relative h-70 align-items-center">
                <div class="user-card" :class="!charFlag ? 'my-card' : ''">
                    <div v-if="charFlag" class="h-100 rounded">
                        <img :src="store.imgBasePath + singleCharacter.image" class="img-fluid rounded-top" :alt="singleCharacter.name">
                        <div>
                            <h5 class="text-center m-0 py-2 text-white">{{ singleCharacter.name }}</h5>
                            <div class="container text-center" v-if="fightFlag">
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
                                    <div class="item-box" v-for="item in singleCharacter.items">
                                        <img :src="store.imgBasePath + item.image" :alt="item.name">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="play-buttons">
                    <button v-if="fightFlag" @click="fight()" class="play rounded-pill text-uppercase">fight</button><br>
                    <button v-if="playFlag" @click="getIaCharacter()" class="play rounded-pill text-uppercase">play</button>
                </div>
                <div class="my-card ia-card">
                    <div v-if="iaFlag" class="h-100 rounded">
                        <img :src="store.imgBasePath + iaCharacter.image" class="img-fluid rounded-top" :alt="iaCharacter.name">
                        <div>
                            <h5 class="text-center m-0 py-2 text-white">{{ iaCharacter.name }}</h5>
                            <div class="container text-center">
                                <div class="row">
                                    <div class="col text-danger">Atk</div>
                                    <div class="col text-primary">Def</div>
                                    <div class="col text-warning">Spd</div>
                                    <div class="col text-success">HP</div>
                                </div>
                                <div class="row">
                                    <div class="col text-danger">{{ iaCharacter.attack }}</div>
                                    <div class="col text-primary">{{ iaCharacter.defence }}</div>
                                    <div class="col text-warning">{{ iaCharacter.speed }}</div>
                                    <div class="col text-success">{{ iaCharacter.life }}</div>
                                </div>
                            </div>
                            <div class="container mt-4">
                                <div class="row justify-content-around">
                                    <div class="item-box" v-for="item in iaCharacter.items">
                                        <img :src="store.imgBasePath + item.image" :alt="item.name">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                playFlag: false,
                iaFlag: false,
                chooseChar: true,
                fightFlag: false,
                singleCharacter: [],
                iaCharacter: [],
                iaDamage: 0,
                userDamage: 0,
            }
        },
        methods: {
            getAllCharacters(){
                axios.get(store.apiUrl + 'characters').then((res) => {
                    console.log(res.data);
                    store.characters = res.data;
                });
                axios.get(store.apiUrl + 'characters').then((res) => {
                    console.log(res.data);
                    store.iaCharacters = res.data;
                });
            },
            test(){
                console.log('test');
            },
            changeCharacter(id){
                if(this.chooseChar){
                    for(let i = 0; i < store.characters.length; i++){
                    if(store.characters[i].id === id){
                        this.activeIndex = i;
                    }
                }
                    this.charFlag = true;
                    this.singleCharacter = this.activeCharacter(id);
                    this.playFlag = true;
                }
            },
            activeCharacter(id) {
                if(store.characters[this.activeIndex].id === id){
                    return store.characters[this.activeIndex];
                }
            },
            getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            },
            getIaCharacter(){
                let index = this.getRndInteger(0, store.iaCharacters.length - 1);
                this.iaCharacter = store.iaCharacters[index];
                // console.log(this.iaCharacter);
                this.iaFlag = true;    
                this.playFlag = false;
                this.chooseChar = false;
                this.fightFlag = true;
            },
            fight(){
                if(this.iaCharacter.life > 0 && this.singleCharacter.life > 0){
                    let userDice = this.getRndInteger(1, 20);
                    let userDmg = parseInt(this.singleCharacter.attack + userDice - ((this.iaCharacter.defence / 2) + (this.iaCharacter.speed) ));
                    
                    if(userDmg < 0){
                        userDmg = 0;
                    }

                    this.iaCharacter.life = this.iaCharacter.life - userDmg;

                    let iaDmg = this.iaFight();
                    
                    this.singleCharacter.life = this.singleCharacter.life - iaDmg;
                    // console.log(this.singleCharacter.life);
                    // console.log(this.iaCharacter.life);
                    console.log(userDmg, iaDmg);
                    this.userDamage = userDmg;
                    this.iaDamage = iaDmg;
                } 
                if (this.iaCharacter.life <= 0 && this.singleCharacter.life <= 0){
                    this.iaCharacter.life = 0;
                    this.singleCharacter.life = 0;
                    console.log('pareggio');
                } else if (this.singleCharacter.life <= 0){ 
                    this.singleCharacter.life = 0;
                    console.log('hai perso');
                } else if (this.iaCharacter.life <= 0){
                    this.iaCharacter.life = 0;
                    console.log('hai vinto');
                }
            },
            iaFight(){
                let iaDice = this.getRndInteger(1, 20);
                let iaDmg = parseInt(this.iaCharacter.attack + iaDice - ((this.singleCharacter.defence / 2) + (this.singleCharacter.speed) ));
                if(iaDmg < 0){
                    iaDmg = 0;
                }
                return iaDmg;
            },
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
    border-radius: 15px;
    > div {
        background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
        background-blend-mode: multiply;
    }
}

.debug {
    border: 1px solid white;
}

.char-box {
    border-radius: 25px;
    overflow: hidden;
    user-select: none;
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