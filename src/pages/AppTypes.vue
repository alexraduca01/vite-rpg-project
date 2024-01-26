<template>
    <div class="bgsmoke vh-100 position-relative d-flex align-items-center">
        <div class="container ">
            <div class="paddingfix row">
                <div class="d-flex bgtry justify-content-between align-items-center align-content-center" >
                    <div class="col-4 justify-content-center ">
                        <h6 class="text-white things">Game classes</h6>
                        <div class="d-flex align-items-center align-content-center" v-for="type in types" :key="type.id">
                            <div class="d-flex cursor-pointer flex-column">
                                <h4 class="namecolor pointer fontparagraph" @click="counter = type.id - 1" :class="active(type.id - 1)">{{ type.name }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex try test">
                        <img class="" :src="store.imgBasePath + types[counter]?.image" alt="">  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

// <!-- <div class="card my-3 mx-3 cardheight col-3 rounded-0 bg-dark text-white text-center" v-for="type in types" :key="type.id">
//                 <div class="card-body hidescrollbar overflow-scroll">
//                     <h2 class="text-info card-title">{{ type.name }}</h2>
//                     <p class="fontparagraph">{{ type.description }}</p>
//                     <p class="card-text">
//                         <router-link :to="{ name: 'type-detail', params: { slug: type.slug }}" class="btn btn-primary fs-5 mb-3">
//                             Details
//                         </router-link>
//                     </p>
//                 </div>
//             </div> -->

<script>
import {store} from '../store';
import axios from 'axios';
import TypeDetail from './TypeDetail.vue';
    export default {
        name: 'AppTypes',
        components: {
            TypeDetail
        },
        data(){
            return {
                store,
                types: [],
                counter: 0
            }
        },
        methods: {
            getAllTypes(){
                axios.get(store.apiUrl + 'types').then((res) => {
                    console.log(res.data);
                    this.types = res.data;
                })
            },
            active(index){
                if (this.counter === index) {
                    return 'active'
                }
            },
            bonus(index){
                return this.counter = index
            }
            },
        mounted(){
            this.getAllTypes();
        }
    }
</script>

<style lang="scss" scoped>
.cardheight{
    height: 440px;
}

img:hover {
    cursor: pointer;
    width: 720px;
    height: 720px;
    transition: 0.4s;
}

.test{
    position: absolute;
    bottom: 15%;
    left: 55%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.fontparagraph{
    font-size: 35px;
}

.hidescrollbar::-webkit-scrollbar {
  display: none;
}

.namecolor{
    color: #fbac5c;
}

.paddingfix{
    padding-top: 100px;
}

.active{
    color: rgb(253, 255, 253);
    border-bottom: white 1px solid;
    text-transform: uppercase;
    font-size: 50px;
}

img{
    width: 690px;
    object-fit: contain;
    height: 690px;
    border-radius: 0% 0% 35% 35%;
}

.bgtry{
    background-image: url('https://baldursgate3.game/heros/bg.png');
    background-repeat: no-repeat;
    background-size:contain;
    background-position: top;
    width: 100%;
    opacity: 0.9;
}

.bgsmoke{
    background-attachment: fixed;
    background-size: cover;
    background-image: url('https://baldursgate3.game/masks/smoke.jpg');
}
</style>