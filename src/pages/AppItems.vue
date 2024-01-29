<template>
    <div class="container p-5 h-100">
            <div class="row">
                <div class="col-12 col-md-4 col-lg-4 p-4" v-for="item in store.items" :key="item.slug">
                      <div class="card-container">
                        <div class="card-background">
                            <div class="card-frame">
                                <div class="frame-header">
                                    <h1 class="name">{{ item.name }}</h1>
                                </div>
                                <img :src="store.imgBasePath + item.image" :alt="item.name" class="frame-art object-fit-cover">
                                <div class="frame-type-line">
                                    <h1 class="type">{{ item.category }}</h1>
                                    <!-- Here goes the set icon -->
                                </div>
                                <div class="frame-text-box">
                                    <h3><i class="fa-solid fa-coins p-1 "></i>: {{ item.cost}}</h3>
                                    <h3><i class="fa-solid fa-weight-hanging p-1 "></i>: {{ item.weight }}</h3>
                          </div>
                      </div>
                </div>
            </div>
          </div>
        </div>
     </div>
</template>




<script>

import { store } from "../store";
import axios from "axios";


export default {
    name: 'AppItems',
    data() {
        return {
            store,
        }
    },
    methods: {
       getAllItems() {
            axios.get(`${this.store.apiUrl}items`).then((res) => {
                this.store.items = res.data;
                console.log(this.store.items);
            }).catch((err) => {

            })

        }
    },
    mounted() {
        this.getAllItems();     
    }
}
</script>

<style lang="scss" scoped>

 .frame-header, .frame-type-line {
 border-bottom: 4px solid #a9a9a9;
 border-left: 2px solid #a9a9a9;
 border-top: 1px solid #fff;
 border-right: 1px solid #fff;
}
.frame-header, .frame-art, .frame-type-line {
 box-shadow: 
 0 0 0 2px #522214,
 0 0 0 5px #522214,
 -3px 3px 2px 5px #522214;
margin-bottom: 7px;
background: 
 linear-gradient( 0deg, rgba(82, 34, 20, .3), rgba(82, 34, 20, .3) ), 
 url(https://image.ibb.co/jKByZn/tile_bg_1.jpg);
}
.frame-text-box {
 box-shadow: 
 0 0 0 5px #522214,
 -3px 3px 2px 5px #522214;
 margin-top: 1px;
 background: 
 linear-gradient( 0deg, rgba(82, 34, 20, .3), rgba(82, 34, 20, .3) ), 
 url(https://image.ibb.co/jKByZn/tile_bg_1.jpg); 
 width: 330px;
 margin-left: 12px;
}
.frame-header, .frame-type-line, .frame-text-box {
 overflow: hidden;
}
.frame-header, .frame-type-line {
 background: 
 linear-gradient( 0deg, rgba(82, 34, 20, .3), rgba(82, 34, 20, .3) ), 
 url(https://image.ibb.co/jKByZn/tile_bg_1.jpg); 
 display: flex;
 margin-top: 10px;
 margin-left: 5px;
 margin-right: 5px;
 padding: 8px 0;
 display: flex;
 justify-content: space-between;
 border-radius: 18px/40px;
 margin-left: 12px;
}
.name, .type {
 font-size: 1.3em;
 margin-left: 10px;
 align-self: baseline;
 font-weight: 600;
}
.frame-art {
 height: 50%; 
 margin: 0 10px;
 object-position: 0px 0px;
 margin-left: 18px;
}
.card-background {
    background-color: #522214;
}
.card-container {
 border: 1px solid #171314;
 width: 400px;
 height: 590px;
 margin: 0 auto;
 margin-top: 100px;
 border-radius: 25px;
 box-sizing: border-box;
 box-shadow: -8px 9px 16px -3px black;
 background: #171314; 
}
.card-background {
 height: 550px;
 margin: 20px 20px 0 20px;
 border-top-left-radius: 6px;
 border-top-right-radius: 6px;
 border-bottom-left-radius: 8%;
 border-bottom-right-radius: 8%;
 z-index: 0;
}
.card-frame {
 z-index: 1;
 position: relative;
 height: 108%;
 max-width: 97%;
 left: 1%;
 top: 0.5%;
 left: 1.2%;
 display: flex;
 flex-direction: column;

 
}
</style>




