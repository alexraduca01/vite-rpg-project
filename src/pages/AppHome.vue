<template>
    <div class="h-100 bgsmoke">
        <div class="w-100" style="height: 1430px;">
            <video class="w-100 back-video" src="/videos/elden-ring.mp4" autoplay muted loop></video>
        </div>
        <div class="py-5 w-100">
            <div class="container">
                <div class="w-100 d-flex justify-content-between gap-5 pb-5 mb-5">
                    <img src="/public/img/cornice.png" class="frame" alt="cornice">
                    <video class="w-65" autoplay loop muted>
                        <source :src="store.videos[0].path" type="video/mp4">
                    </video>
                    <div class="text-white d-flex flex-column justify-content-center">
                        <h2>{{ store.videos[0].name }}</h2>
                        <p>{{ store.videos[0].desc }}</p>
                    </div>
                </div>
                <div class="w-100 d-flex justify-content-between gap-5 pb-5 mb-5 position-relative">
                    <img src="/public/img/cornice.png" class="frame frame1" alt="cornice">
                    <div class="text-white text-center d-flex flex-column justify-content-center">
                        <h3 class="fs-2" >{{ store.videos[1].name }}</h3>
                        <p>{{ store.videos[1].desc }}</p>
                    </div>
                    <video class="w-65" autoplay loop muted>
                        <source :src="store.videos[1].path" type="video/mp4">
                    </video>
                </div>
                <div class="w-100 d-flex justify-content-between gap-5 pb-5 mb-5">
                    <img src="/public/img/cornice.png" class="frame" alt="cornice">
                    <video class="w-65" autoplay loop muted>
                        <source :src="store.videos[2].path" type="video/mp4">
                    </video>
                    <div class="text-white text-center d-flex flex-column justify-content-center">
                        <h2>{{ store.videos[2].name }}</h2>
                        <p>{{ store.videos[2].desc }}</p>
                    </div>
                </div>
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
            getRandomVideo() {
                this.randomVideo = store.videos[this.getRndInteger(0, store.videos.length - 1)];
            }
        },
    }
</script>

<style lang="scss" scoped>

.w-65 {
    width: 65%;
}

.bgsmoke{
    background-attachment: fixed;
    background-size: cover;
    background-image: url('https://baldursgate3.game/masks/smoke.jpg');
}

.back-video {
    position: absolute;
    top: 0;
    left: 0;
}

.frame{
    position: absolute;
    width: 842px;
}

.frame1 {
    right: 0;
}

h2 {
    transform: translateX(-85px);
    background-color: gold;
    background-size: cover;
}
</style>