<template>
    <div class="container">
        <div class="row m-1 justify-content-center">
            <div class="card my-3 mx-3 cardheight col-3 rounded-0 bg-dark text-white text-center" v-for="type in types" :key="type.id">
                <div class="card-body hidescrollbar overflow-scroll">
                    <h2 class="text-info card-title">{{ type.name }}</h2>
                    <p class="fontparagraph">{{ type.description }}</p>
                    <p class="card-text">
                        <router-link :to="{ name: 'type-detail', params: { id: type.id }}" class="btn btn-primary fs-5 mb-3">
                            Details
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

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
            }
        },
        methods: {
            getAllTypes(){
                axios.get(store.apiUrl + 'types').then((res) => {
                    console.log(res.data);
                    this.types = res.data;
                })
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
    font-size: 13px;
}

.hidescrollbar::-webkit-scrollbar {
  display: none;
}

</style>