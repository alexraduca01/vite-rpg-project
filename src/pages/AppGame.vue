<template>
    <div v-if="!endGame" class="d-flex flex-column justify-content-center vh-100">
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
                <div class="life d-flex">
                    <div class="bar-container user-char">
                        <div class="bar" ref="bar" :class="fightFlag ? 'opacity-100' : 'opacity-0'" :style="{width: (this.singleCharacter.life / 100) * 100 + '%'}">

                        </div>
                    </div>
                    <div class="bar-container ia-char" >
                        <div class="bar" ref="iaBar" :class="fightFlag ? 'opacity-100' : 'opacity-0'" :style="{width: (this.iaCharacter.life / 100) * 100 + '%'}">

                        </div>
                    </div>
                </div>
                <div class="logs d-flex justify-content-around" :class="dmgFlag ? 'opacity-100' : 'opacity-0'">
                    <div>
                        <span class="text-success fs-3 fantasy-btn-xl" v-if="iaDamage == 0">MISS !!</span>
                        <span class="text-danger fs-3 fantasy-btn-xl" v-else-if="iaDamage > 0">Subito: {{ iaDamage }} </span>
                    </div>
                    <div>
                        <span class="text-danger fs-3 fantasy-btn-xl" v-if="userDamage == 0">MISS !!</span>
                        <span class="text-danger fs-3 fantasy-btn-xl" v-else-if="userDamage > 0">Inflitto: {{ userDamage }}</span>
                    </div>
                </div>
                <div class="play-buttons">
                    <FancyButton v-if="fightFlag" :text="'fight'" @click="fightTimeout()"/>
                    <FancyButton v-if="playFlag" :text="'play'" @click="getIaCharacter()"/>
                    <!-- <button v-if="fightFlag" @click="fightTimeout()" class="play rounded-pill text-uppercase">fight</button><br>
                    <button v-if="playFlag" @click="getIaCharacter()" class="play rounded-pill text-uppercase">play</button> -->
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
                        <div class="transparent-bg py-3 rounded-bottom-5" style="height: 100px;">
                            <h6 class="text-center m-0 py-1 text-danger">{{ item.name }}</h6>
                            <h6 class="text-center m-0 text-warning">{{ item.type.name }}</h6>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
    <div v-else class="vh-100 w-100 end-game pt-80 d-flex flex-column justify-content-center align-items-center">
        <div>
            <h1 class="text-uppercase text-warning big-font" v-if="this.iaCharacter.life <= 0 && this.singleCharacter.life <= 0"> TIE </h1>
            <h1 class="text-danger text-uppercase big-font" v-else-if="this.singleCharacter.life <= 0" > you lost </h1>
            <h1 class="text-uppercase text-success big-font" v-else-if="this.iaCharacter.life <= 0"> YOU WIN </h1>
        </div>
        <div class="d-flex">
            <FancyButton :text="'play again'" @click="reload()"/>
            <router-link :to="{ name: 'home' }" class="nav-link text-white px-3"><FancyButton :text="'home'"/></router-link>
        </div>
    </div>
</template>

<script>
import { store } from "../store";
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Pagination } from 'swiper/modules';
import FancyButton from '../components/FancyButton.vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
    export default {
        name: 'AppGame',
        components: {
            FancyButton,
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
                dmgFlag: false,
                dice: 0,
                endGame: false,
            }
        },
        methods: {
            reload(){
                location.reload();
            },
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
                    store.charHealth = this.singleCharacter.life;
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
                    this.dice = userDice;
                    let userDmg = parseInt(this.singleCharacter.attack + userDice - ((this.iaCharacter.defence / 2) + (this.iaCharacter.speed / 2) ));
                    
                    if(userDmg < 0){
                        userDmg = 0;
                    }

                    this.iaCharacter.life = this.iaCharacter.life - userDmg;

                    let iaDmg = this.iaFight();
                    
                    this.singleCharacter.life = this.singleCharacter.life - iaDmg;
                    // console.log(this.singleCharacter.life);
                    // console.log(this.iaCharacter.life);
                    // console.log(userDmg, iaDmg);
                    this.userDamage = userDmg;
                    this.iaDamage = iaDmg;
                    this.updateHealthBar();
                    this.updateIaBar();
                }
                this.dmgFlag = true;
                if (this.iaCharacter.life <= 0 && this.singleCharacter.life <= 0){
                    this.iaCharacter.life = 0;
                    this.singleCharacter.life = 0;
                    setTimeout(() => this.endGame = true, 1500);
                    // this.endGame = true;
                    // console.log('pareggio');
                } else if (this.singleCharacter.life <= 0){ 
                    this.singleCharacter.life = 0;
                    setTimeout(() => this.endGame = true, 1500);
                    // this.endGame = true;
                    // console.log('hai perso');
                } else if (this.iaCharacter.life <= 0){
                    this.iaCharacter.life = 0;
                    setTimeout(() => this.endGame = true, 1500);
                    // this.endGame = true;
                    // console.log('hai vinto');
                }
                
            },
            fightTimeout(){
                this.dmgFlag = false;
                setTimeout(() => this.fight(), 1500);
            },
            iaFight(){
                let iaDice = this.getRndInteger(1, 20);
                let iaDmg = parseInt(this.iaCharacter.attack + iaDice - ((this.singleCharacter.defence / 2) + (this.singleCharacter.speed / 2) ));
                if(iaDmg < 0){
                    iaDmg = 0;
                }
                return iaDmg;
            },
            updateHealthBar(){
                let healthPerc = (this.singleCharacter.life / 100) * 100;
                this.$refs.bar.style.width = `${healthPerc}%`;
                this.$refs.bar.style.transition = 'width 1s linear';
            },
            updateIaBar(){
                let healthPerc = (this.iaCharacter.life / 100) * 100;
                this.$refs.iaBar.style.width = `${healthPerc}%`;
                this.$refs.iaBar.style.transition = 'width 1s linear';
            }
        },
        mounted(){
            this.getAllCharacters();
        }
    }
</script>

<style lang="scss" scoped>

.life {
    gap: 410px;
}

.bar-container {
    width: 250px;
    height: 18px;
    border-radius: 15px;
    text-align: center;
}
.user-char {
    position: absolute;
    bottom: 22%;
    left: 10.5%;
    transition: width 1s linear;
}
.ia-char {
    position: absolute;
    bottom: 22%;
    right: 10.3%;
    transition: width 1s linear;
}
.bar {
    height: 100%;
    border-radius: 15px;
    background-color: green;
}

.big-font {
    font-size: 120px;
    letter-spacing: 10px;
}

.end-game{
    position: relative;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 50000;
}

.pt-80 {
    padding-top: 80px;
}
.logs {
    position: absolute;
    top: 18%;
    width: 100%;
    gap: 270px;
    transition: opacity 0.5s ease-out;
}
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

.cursor-pointer {
    cursor: pointer;
}

@layer fantasy-btn {
  [class*="fantasy-btn"] {
    isolation: isolate;
    position: relative;
    box-sizing: border-box;
    background: transparent;
    outline: none;
    border: none;
    --s: (var(--scale) / 4.5);
    font-size: calc(60px * var(--s));
    font-family: serif;
    min-width: calc(280px * var(--s));
    min-height: calc(200px * var(--s));
    padding-inline: calc(95px * var(--s));
    padding-block: calc(51px * var(--s));
  }
  .fantasy-btn-xl { --scale: 1.5; }
  
  

  [class*="fantasy-btn"]::after {
    --_border-base-opacity: var(--border-opacity, 1);
    --_border-hover-opacity: var(--border-hover-opacity,
      var(--_border-base-opacity)
    );
    --_border-focus-opacity: var(--border-focus-opacity,
      var(--_border-hover-opacity)
    );
    --_border-active-opacity: var(--border-active-opacity,
      var(--_border-focus-opacity)
    );
    --_border-state-opacity: var(--_border-base-opacity);

    --_border-base-bg: var(--border-bg, currentColor);
    --_border-hover-bg: var(--border-hover-bg, var(--_border-base-bg));
    --_border-focus-bg: var(--border-focus-bg, var(--_border-hover-bg));
    --_border-active-bg: var(--border-active-bg, var(--_border-focus-bg));

    --_border-state-bg: var(--_border-base-bg);
  }

  [class*="fantasy-btn"]::before,
  [class*="fantasy-btn"]::after {
    content: "";
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    pointer-events: none;
    z-index: -1;
  }

  [class*="fantasy-btn"]::after {
    background: var(--_border-state-bg);
    opacity: var(--_border-state-opacity);
    clip-path: polygon(
      /* home */
      calc(37px * var(--s)) calc(44px * var(--s)),
      /* jump union point */
      calc(52px * var(--s)) calc(29px * var(--s)),
      calc(61px * var(--s)) calc(18px * var(--s)),
      calc(82.5px * var(--s)) calc(39.5px * var(--s)),
      calc(61px * var(--s)) calc(61px * var(--s)),
      0px 0px,
      calc(77px * var(--s)) 0px,
      calc(90px * var(--s)) calc(13px * var(--s)),
      calc(103px * var(--s)) 0px,

      calc(100% - 103px * var(--s)) 0px,
      calc(100% - 90px * var(--s)) calc(13px * var(--s)),
      calc(100% - 77px * var(--s)) 0px,
      100% 0px,
      calc(100% - 61px * var(--s)) calc(61px * var(--s)),
      calc(100% - 82.5px * var(--s)) calc(39.5px * var(--s)),
      calc(100% - 61px * var(--s)) calc(18px * var(--s)),

      /*... -x union point, jump ...*/
      calc(100% - 52px * var(--s)) calc(29px * var(--s)),
      calc(100% - 37px * var(--s)) calc(44px * var(--s)),

      calc(100% - 24.5px * var(--s)) calc(56.5px * var(--s)),
      calc(100% - 32.5px * var(--s)) calc(64.5px * var(--s)),

      calc(100% - 32.5px * var(--s)) calc(100% - 64.5px * var(--s)),
      calc(100% - 24.5px * var(--s)) calc(100% - 56.5px * var(--s)),

      calc(100% - 37px * var(--s)) calc(100% - 44px * var(--s)),
      calc(100% - 52px * var(--s)) calc(100% - 29px * var(--s)),

      calc(100% - 61px * var(--s)) calc(100% - 18px * var(--s)),
      calc(100% - 82.5px * var(--s)) calc(100% - 39.5px * var(--s)),
      calc(100% - 61px * var(--s)) calc(100% - 61px * var(--s)),
      100% 100%,

      calc(100% - 77px * var(--s)) 100%,
      calc(100% - 90px * var(--s)) calc(100% - 13px * var(--s)),
      calc(100% - 103px * var(--s)) 100%,

      calc(103px * var(--s)) 100%,
      calc(90px * var(--s)) calc(100% - 13px * var(--s)),
      calc(77px * var(--s)) 100%,

      0px 100%,
      calc(61px * var(--s)) calc(100% - 61px * var(--s)),
      calc(82.5px * var(--s)) calc(100% - 39.5px * var(--s)),
      calc(61px * var(--s)) calc(100% - 18px * var(--s)),

      calc(52px * var(--s)) calc(100% - 29px * var(--s)),
      calc(37px * var(--s)) calc(100% - 44px * var(--s)),

      calc(24.5px * var(--s)) calc(100% - 56.5px * var(--s)),
      calc(32.5px * var(--s)) calc(100% - 64.5px * var(--s)),

      calc(32.5px * var(--s)) calc(64.5px * var(--s)),
      calc(24.5px * var(--s)) calc(56.5px * var(--s)),

      /* first point in the path, time to CCW inner path */
      calc(37px * var(--s)) calc(44px * var(--s)),
      /* w = ~8 */
      calc(45px * var(--s)) calc(52px * var(--s)),
      calc(41px * var(--s)) calc(56px * var(--s)),
      calc(50px * var(--s)) calc(66px * var(--s)),
      calc(40.5px * var(--s)) calc(75.5px * var(--s)),

      calc(40.5px * var(--s)) calc(100% - 75.5px * var(--s)),
      calc(50px * var(--s)) calc(100% - 66px * var(--s)),
      calc(41px * var(--s)) calc(100% - 56px * var(--s)),
      calc(45px * var(--s)) calc(100% - 52px * var(--s)),

      calc(37px * var(--s)) calc(100% - 44px * var(--s)),

      calc(52px * var(--s)) calc(100% - 29px * var(--s)),
      calc(59.5px * var(--s)) calc(100% - 36.5px * var(--s)),
      calc(61px * var(--s)) calc(100% - 35px * var(--s)),
      calc(65.5px * var(--s)) calc(100% - 39.5px * var(--s)),
      calc(61px * var(--s)) calc(100% - 44px * var(--s)),
      calc(25px * var(--s)) calc(100% - 8px * var(--s)),
      calc(72.5px * var(--s)) calc(100% - 8px * var(--s)),
      calc(90px * var(--s)) calc(100% - 25.5px * var(--s)),
      calc(107.5px * var(--s)) calc(100% - 8px * var(--s)),

      calc(100% - 107.5px * var(--s)) calc(100% - 8px * var(--s)),
      calc(100% - 90px * var(--s)) calc(100% - 25.5px * var(--s)),
      calc(100% - 72.5px * var(--s)) calc(100% - 8px * var(--s)),
      calc(100% - 25px * var(--s)) calc(100% - 8px * var(--s)),
      calc(100% - 61px * var(--s)) calc(100% - 44px * var(--s)),
      calc(100% - 65.5px * var(--s)) calc(100% - 39.5px * var(--s)),
      calc(100% - 61px * var(--s)) calc(100% - 35px * var(--s)),
      calc(100% - 59.5px * var(--s)) calc(100% - 36.5px * var(--s)),
      calc(100% - 52px * var(--s)) calc(100% - 29px * var(--s)),

      calc(100% - 37px * var(--s)) calc(100% - 44px * var(--s)),

      calc(100% - 45px * var(--s)) calc(100% - 52px * var(--s)),
      calc(100% - 41px * var(--s)) calc(100% - 56px * var(--s)),
      calc(100% - 50px * var(--s)) calc(100% - 66px * var(--s)),
      calc(100% - 40.5px * var(--s)) calc(100% - 75.5px * var(--s)),

      calc(100% - 40.5px * var(--s)) calc(75.5px * var(--s)),
      calc(100% - 50px * var(--s)) calc(66px * var(--s)),
      calc(100% - 41px * var(--s)) calc(56px * var(--s)),
      calc(100% - 45px * var(--s)) calc(52px * var(--s)),

      calc(100% - 37px * var(--s)) calc(44px * var(--s)),

      calc(100% - 52px * var(--s)) calc(29px * var(--s)),
      calc(100% - 59.5px * var(--s)) calc(36.5px * var(--s)),
      calc(100% - 61px * var(--s)) calc(35px * var(--s)),
      calc(100% - 65.5px * var(--s)) calc(39.5px * var(--s)),
      calc(100% - 61px * var(--s)) calc(44px * var(--s)),
      calc(100% - 25px * var(--s)) calc(8px * var(--s)),
      calc(100% - 72.5px * var(--s)) calc(8px * var(--s)),
      calc(100% - 90px * var(--s)) calc(25.5px * var(--s)),
      calc(100% - 107.5px * var(--s)) calc(8px * var(--s)),

      calc(107.5px * var(--s)) calc(8px * var(--s)),
      calc(90px * var(--s)) calc(25.5px * var(--s)),
      calc(72.5px * var(--s)) calc(8px * var(--s)),
      calc(25px * var(--s)) calc(8px * var(--s)),
      calc(61px * var(--s)) calc(44px * var(--s)),
      calc(65.5px * var(--s)) calc(39.5px * var(--s)),
      calc(61px * var(--s)) calc(35px * var(--s)),
      calc(59.5px * var(--s)) calc(36.5px * var(--s)),
      /* union point */
      calc(52px * var(--s)) calc(29px * var(--s)),
      /* jump home */
      calc(37px * var(--s)) calc(44px * var(--s))
    );
  }
}

</style>