<template>
    <section class="container d-flex justify-content-center  p-5">
        <div v-if="item">
            <div class="card card-bg p-5 mt-5" style="width: 23rem;">
                <img :src="`${store.imgBasePath}${item.image}`" class="card-img-top  " alt="{{ item.name }}">  
            <div class="card-body">
                <h4 class="card-title text-center">{{item.name}}</h4>
            </div>
            <ul class="list-group list-group-light list-group-small">
                        <li class="list-group-item px-4 li-bg">Type: {{ item.type }}</li>
                        <li class="list-group-item px-4 li-bg">Weight: {{ item.weight }}</li>
                        <li class="list-group-item px-4 li-bg">Cost: {{ item.cost }}</li>
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
            item: {}
           
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

.card-bg{
    background-color:rgba($color: #FEC795, $alpha: 0.8);
    border: 3px solid white;
}
.li-bg{
    background-color: rgba($color: #4D6067, $alpha: 0.6);
    border: 1px solid white;
}
</style>