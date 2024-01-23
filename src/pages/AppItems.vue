<template>
    <main class="container">

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

<style lang="scss" scoped>
</style>