<template>
    <div class="bgsmoke vh-100 d-flex flex-column justify-content-center">
        <div class="container">
            <div class="paddingfix ">
                <div class="bgtry">
                    <div class="d-flex justify-content-around align-items-center row">
                        <div class="col-2">
                            <h6 class="text-white things">Game classes</h6>
                            <div class="cursor-pointer" v-for="type in types" :key="type.id">
                                <h4 class="namecolor pointer fontparagraph" @click="counter = type.id - 1" :class="active(type.id - 1)">{{ type.name }}</h4>
                            </div>
                        </div>
                        <div class="col-7 d-flex justify-content-center align-items-center text-center">
                            <img class="" :src="store.imgBasePath + types[counter]?.image" alt="">  
                        </div>
                        <div class="col-3 d-flex flex-column justify-content-center">
                            <h2 class="text-white">{{ types[counter]?.name }}</h2>
                            <p class="card-text text-white">{{ types[counter]?.description.substr(0, bodyMaxLen) + '...' }}</p>
                        </div>
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
                bodyMaxLen: 200,
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
        },
        computed: {
            truncateBody(description){
                if(description.length > this.bodyMaxLen){
                    return description.substr(0,this.bodyMaxLen) + '...';
                }
                return description;            
            }
        }
    }
</script>

<style lang="scss" scoped>
.cardheight{
    height: 440px;
}

.rightabso{
    right: 1%;
    top: 30%;
    width: 450px;
    font-size: 18px;
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