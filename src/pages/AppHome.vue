<template>
    <div class="h-100">
        <div class="w-100">
            <video class="w-100" autoplay loop>
                <source src="/videos/wallpaper.mp4" type="video/mp4">
            </video>
        </div>
        <div class="container">
            <div class="w-100">
                <video class="w-100" autoplay loop>
                    <source :src="store.videos[getRndInteger(0, store.videos.length - 1)].path" type="video/mp4">
                </video>
                <h2></h2>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store'
    export default {
        name: 'AppHome',
        
        data() {
            return {
                store,
            }
        },
        methods: {
            getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>