<template>
    <section class="container">
        <div v-if="item">
            <div class="card" style="width: 21rem;">
                <img :src="`${store.imgBasePath}${item.image}`" class="card-img-top" alt="...">  
            <div class="card-body">
                <h5 class="card-title ">Name</h5>
            </div>
            <ul class="list-group list-group-light list-group-small">
                        <li class="list-group-item px-4">Type: {{ item.type }}</li>
                        <li class="list-group-item px-4">Weight: {{ item.weight }}</li>
                        <li class="list-group-item px-4">Cost: {{ item.cost }}</li>
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
            item: null
           
        }
    },
        methods: {
        getItemDetail() {
            console.log(this.$route);
            axios.get(`${this.store.apiUrl}items/${this.$route.params.slug}`).then((res) => {
                if (res.data) {
                    this.item = res.data
                    console.log(this.item);
                } else {
                    this.$router.push({ name: 'not-found' })
                }
            })
        }
    },
    mounted() {
        this.getItemDetail()
    }

        }



</script>

<style lang="scss" scoped>
img{
    width: 100%;
    aspect-ratio: 1.5;
}
</style>