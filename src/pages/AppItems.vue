<template>
            <h1>Items List</h1>
            <div class="row">
                <div class="col-12 col-md-4 col-lg-4 p-2 " v-for="item in store.items" :key="item.slug">
                 <div class="card" style="width: 21rem;">
                    <img :src="`${store.imgBasePath}${item.image}`" class="card-img-top" alt="...">  
                <div class="card-body">
                    <h5 class="card-title ">Name: {{ item.name}}</h5>
                </div>
                <ul class="list-group list-group-light list-group-small">
<!--                    <li>            
                       <router-link :to="{ name: 'item-detail', params: { slug: item.slug } }" class="text-red btn btn-primary ">
                         <h5>More info</h5>
                        </router-link>
                    </li>
 -->               </ul>

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
</style>