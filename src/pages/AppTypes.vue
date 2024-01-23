<template>
   <div class="card" v-for="type in types" :key="type.id">
        <div class="card-body">
            <h3 class="card-title">{{ type.name }}</h3>
            <p class="card-text">{{ type.description }}</p>
            <p class="card-text my-4 fs-2">
                <router-link :to="{ name: 'TypeDetail', params: { slug: type.slug }}" class="btn btn-primary fs-3 mb-3">
                     {{ type.name }}
                </router-link>
            </p>
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

</style>