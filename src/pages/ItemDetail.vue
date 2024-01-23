<template>
    <section class="container">
        <div v-if="item">
            <div class="card" style="width: 21rem;">
                <img :src="`${store.imgBasePath}${item.image}`" class="card-img-top" alt="...">  
            <div class="card-body">
                <h5 class="card-title ">Name</h5>
            </div>
            <ul class="list-group list-group-light list-group-small">
                <li class="list-group-item px-4">type</li>
                <li class="list-group-item px-4">weight</li>
                <li class="list-group-item px-4">cost</li>
            </ul>
        </div>
        </div>

    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';  


    export default {
        name: 'ItemDetail',

        data() {
        return {
            store,
           
        }
    },
        methods: {

        }
    }



</script>

<style lang="scss" scoped>
img{
    width: 100%;
    aspect-ratio: 1.5;
}
</style>