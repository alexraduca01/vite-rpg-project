<template>
    <div class="h-100 bgsmoke">
        <div class="w-100 position-relative" style="height: 1430px;">
            <video class="w-100 back-video" src="/videos/elden-ring.mp4" autoplay muted loop></video>
            <div class="absolutecenter text-white">
                <h1 class="titlefs" style="z-index: 5;">Boolean's Legacy</h1>
                <p class="fs-1 py-4 text-center">Try our game</p>
                <div class="d-flex justify-content-center ">
                    <router-link :to="{ name: 'game' }">
                        <FancyButton :text="'play now'" />
                    </router-link>
                </div>
            </div>
        </div>
        <div class="py-5 mt-5 w-100">
            <div class="container">
                <div>
                    <h6 class="text-white fs-2">Our <span class="fs-1">10/10</span></h6>
                </div>
                <div class="w-100 d-flex justify-content-between gap-5 pb-5 mb-5">
                    <img src="/public/img/cornice.png" class="frame" alt="cornice">
                    <video class="w-65" autoplay loop muted>
                        <source :src="store.videos[0].path" type="video/mp4">
                    </video>
                    <div class="text-white d-flex flex-column justify-content-center">
                        <div>
                            <h2 class="fs-4">{{ store.videos[0].name }}</h2>
                            <p class="lh">{{ store.videos[0].desc }}</p>
                        </div>
                    </div>
                </div>
                <div class="w-100 d-flex justify-content-between gap-5 pb-5 mb-5 position-relative">
                    <img src="/public/img/cornice.png" class="frame frame1" alt="cornice">
                    <div class="text-white d-flex flex-column justify-content-center">
                        <div class="text-end">
                            <h4>{{ store.videos[1].name }}</h4>
                            <p class="lh">{{ store.videos[1].desc }}</p>
                        </div>
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
                    <div class="text-white d-flex flex-column justify-content-center">
                        <div>
                            <h2 class="fs-4">{{ store.videos[2].name }}</h2>
                            <p class="lh">{{ store.videos[2].desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-white bgsmoke d-flex align-items-center gap-5 my-5 justify-content-between py-5">
            <div class="fs-5 w-50 p-3 py-5 test">
                <p>About Us</p>
                <h1>About Booleans Legacy</h1>
                <p>Welcome to Booleans legacy, where the boundaries between reality and fantasy blur, and epic adventures await! Immerse yourself in a realm where creativity knows no bounds, and every choice you make shapes the destiny of your character.</p> 
                <p>At Booleans legacy, we are passionate storytellers, game enthusiasts, and world builders. Our mission is to provide a platform where players from around the globe can come together to embark on thrilling journeys, forge alliances, and confront formidable foes.</p>
                <p>We envision a community where imagination flourishes and narratives unfold in ways never imagined. Through engaging storylines, intricate game mechanics, and a supportive community, we strive to create an environment that sparks inspiration and fosters a love for storytelling.</p>
            </div>
            <div class="w-50 pe-5">
                <img src="/public/img/cornice.png" class="frame2" alt="">
                <img class="w-100 shadow-sm" src="https://wallpapers.com/images/hd/elden-ring-background-giq5p36lqqu12rnj.jpg" alt="">
            </div>
        </div>
        <div class="text-white gap-2 bgsectionhome d-flex flex-column justify-content-center align-items-center">
            <p>Booleans Legacy</p>
            <h1>No rebirth, no regrets!</h1>
            <p class="fs-5 p-4">Emerge the dangers of Boolean in Boolean's Hardcore Realms and discover how far you can go. You only have one life to live. If you die, there will be no Spirit Healer to send you back to the world of the living</p>
        </div>
        <div class="w-100 bgdark">
            <div class="container p-5">
                <h3 class="text-white text-center py-5">Our Partners</h3>
                <swiper :spaceBetween="30" :slidesPerView="3" :centeredSlides="true" :autoplay="{ delay: 2500, disableOnInteraction: false, }" :loop="true" :modules="modules" class="mySwiper">
                    <swiper-slide class="d-flex justify-content-center align-items-center pb-5" v-for="item in store.miniLogos">
                        <img style="height: 150px; cursor: grab;" :src="item.url" alt="">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <AppFooter />
    </div>
</template>

<script>
import { store } from '../store'
import FancyButton from '../components/FancyButton.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import AppFooter from '../components/AppFooter.vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
    
    export default {
        name: 'AppHome',
        components: {
            FancyButton,
            Swiper,
            SwiperSlide,
            AppFooter,
        },
        data() {
            return {
                store,
                modules: [Autoplay, Pagination, Navigation],
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
.lh {
    line-height: 1.8;
}
.absolutecenter{
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.titlefs{
    font-size: 80px;
}
.test{
    border-top: 3px solid #553c229a;
    border-bottom: 3px solid #553c229a;
}
.bgsectionhome{
    background-size: cover;
    background-image: url('/public/img/sectionhome.jpg');
    height: 500px;
    background-position: top;
}
.goldcolor{
    color: #553C22;
}
.w-65 {
    width: 65%;
}
.back-video {
    position: absolute;
    top: 0;
    left: 0;
}
.frame{
    position: absolute;
    width: 842px;
    z-index: 1;
}
.frame1 {
    right: 0;
}
.frame2 {
    position: absolute;
    width: 1205px;
}
h2 {
    display: inline-block;
    position: relative;
    padding: 10px 0;
    padding-left: 100px;
    padding-right: 15px;
    margin-left: -100px;
    background-color: #c19d53;
    z-index: 3;
}
h4 {
    display: inline-block;
    position: relative;
    padding: 10px 0;
    padding-right: 100px;
    padding-left: 15px;
    margin-right: -100px;
    background-color: #c19d53;
    z-index: 3;
}
.bgdark {
    background-color: rgba(0, 0, 0, 0.303);
}
</style>