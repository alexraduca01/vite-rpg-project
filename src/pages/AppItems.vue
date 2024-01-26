<template>
            <h1>Items List</h1>
            <div class="container p-5">
            <div class="row">
                <div class="col-12 col-md-4 col-lg-4 p-4" v-for="item in store.items" :key="item.slug">
                 <div class="card  card-item p-3 " style="width: 18rem;">
                    <img :src="`${store.imgBasePath}${item.image}`" class="card-img-top" alt="{{ item.name }}">  
                <div class="card-body text-center">
                    <h5 class="card-title ">Name: {{ item.name}}</h5>
                </div>
              <div class="d-flex justify-content-center">
                <router-link class="text-decoration-none  decoration btn btn-dark m-3"  :to="{ name: 'item-detail', params: { slug: item.slug } }">View
                    More</router-link>
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
.card-item {
  background: #222;
  border: 1px solid #dd2476;
  color: rgba(250, 250, 250, 0.8);
  margin-bottom: 2rem;
} 
.decoration {
   color: white;
  border: 1px solid #dd2476;
  border-image-slice: 1;
  background: var(--gradient) !important;
  border-image-source:  var(--gradient) !important; 
  text-decoration: none;
  transition: all .4s ease;
}


 



</style>