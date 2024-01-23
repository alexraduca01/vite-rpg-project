<template>
    <main class="container">

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
      
    },
    created() {
    }
}
</script>

<style lang="scss" scoped></style>