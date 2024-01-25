<template>
    <div class="d-flex flex-column justify-content-center vh-100">
        <div class="container game-box transparent-bg text-white vh-80 p-0">
            <div class="d-flex justify-content-around h-70 align-items-center">
                <div class="my-card">
                    
                </div>
                <div class="my-card">
                    
                </div>
            </div>
            <div class="d-flex flex-wrap h-30 w-75 m-auto ">
                <swiper :slidesPerView="5" :spaceBetween="10" :freeMode="true" :modules="modules" class="mySwiper rounded">
                    <swiper-slide class="char-box" v-for="item in store.characters">
                        <img :src="store.imgBasePath + item.image" class="img-fluid" :alt="item.name">
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
            }
        },
        mounted(){
            this.getAllCharacters();
        }
    }
</script>

<style lang="scss" scoped>

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
    width: 250px;
    height: 400px;
    border-radius: 25px;
    background-image: url('../../public/img/card-back.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.debug {
    border: 1px solid white;
}

.char-box {
    border-radius: 25px;
    overflow: hidden;
}

.game-box {
    border-radius: 50px;
}

.transparent-bg {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>