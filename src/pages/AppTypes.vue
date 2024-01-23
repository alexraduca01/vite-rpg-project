<template>
   <div class="card" style="width: 18rem;" v-for="type in types" :key="type.id">
        <div class="card-body">
            <h5 class="card-title">{{ type.name }}</h5>
            <p class="card-text">{{ type.description }}</p>
            <p class="card-text my-4 fs-2">
                // <router-link :to="{ name: 'TypesDetail', params: { id: type.id }}" class="btn btn-primary fs-3 mb-3" >
                //     {{ type.name }}
                // </router-link>
            </p>
        </div>
    </div>
</template>

<script>
import {store} from '../store';
import axios from 'axios';
    export default {
        name: 'AppTypes',
        data(){
            return {
                store,
                types: [],
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>