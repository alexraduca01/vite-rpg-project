<template>
    <div class="bg-success d-flex flex-column justify-content-center vh-100">
        <div class="container bg-black text-white vh-80 p-0">
            <div class="d-flex justify-content-around h-70 align-items-center">
                <div class="my-card bg-danger">
                    
                </div>
                <div class="my-card bg-danger">
                    
                </div>
            </div>
            <div class="d-flex flex-wrap h-30 w-75 m-auto ">
                <swiper :slidesPerView="5" :spaceBetween="10" :freeMode="true" :modules="modules" class="mySwiper">
                    <swiper-slide class="char-box" v-for="item in store.characters">
                        <img :src="store.imgBasePath + item.image" class="img-fluid" :alt="item.name">
                        <h6 class="text-center m-0 py-3">{{ item.name }}</h6>
                        <h6 class="text-center m-0">{{ item.type.name }}</h6>
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
                console.log('suca');
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
    border-radius: 10px;
}

.debug {
    border: 1px solid white;
}

.char-box {
    border-radius: 25px;
    overflow: hidden;
}
</style>