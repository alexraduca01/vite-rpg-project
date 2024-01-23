<template>
    <main class="container">
        <h1>Items List</h1>
        <div class="row">
            <div class="col-12 col-md-4 col-lg-4 p-2 " v-for="item in store.items" :key="item.id">
                <AppCard :item="item" />
            </div>

        </div>

    </main>
</template>

<script>
import { store } from "../store";
import axios from "axios";
import AppItems from '../components/AppItems.vue';


export default {
    name: 'AppItems',
    components: {
        AppItems
    },
    data() {
        return {
            store,
        }
    },
    methods: {
       getAllItems() {
            axios.get(`${this.store.apiUrl}/items`).then((res) => {
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

<style lang="scss" scoped></style>