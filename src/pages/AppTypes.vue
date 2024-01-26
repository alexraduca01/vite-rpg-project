<template>
    <div class="bgsmoke h-100 position-relative">
        <div class="container">
            <div class="paddingfix row">
                <div class="d-flex bgtry justify-content-between align-items-center" >
                    <div class="col-4">
                        <h6 class="text-white">Game classes</h6>
                        <div class="d-flex" v-for="type in types" :key="type.id">
                            <div class="d-flex flex-column">
                                <h4 class="text-uppercase namecolor fontparagraph" @click="counter = type.id - 1" :class="active(type.id - 1)">{{ type.name }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex">
                        <img class="h-100 " :src="store.imgBasePath + types[counter]?.image" alt="">  
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

.fontparagraph{
    font-size: 35px;
}

.hidescrollbar::-webkit-scrollbar {
  display: none;
}

.namecolor{
    color: #FBAC5C;
}

.paddingfix{
    padding-top: 80px;
}

.active{
    color: white;
    border-bottom: white 1px solid;
}

img{
    width: 35%;
    object-fit: contain;
    position: absolute;
    right: 10%;
    bottom: 0;
    top: 5%;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    filter: drop-shadow(10px 10px 10px rgb(0, 0, 0));
}

.bgtry{
    background-image: url('https://baldursgate3.game/heros/bg.png');
    background-repeat: no-repeat;
    background-size:contain;
    background-position: top;
    width: 100%;
}

.bgsmoke{
    background-attachment: fixed;
    background-size: cover;
    background-image: url('https://baldursgate3.game/masks/smoke.jpg');
}
</style>