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
                <p>Sotto il cielo stellato, eroi silenziosi sfidano l'oscurità, forgiando destini con coraggio, mentre il destino tessitore sorride.</p> 
                <p>Nell'epica danza della vita, i valorosi affrontano le tempeste, le passioni ardono come fuoco eterno. Tra le pagine dell'eternità, il destino intreccia le storie, creando leggende incancellabili nel cuore del tempo.</p>
                <p>Sotto cieli immensi e stelle scintillanti, eroi emergono dall'ombra dell'ignoto, con cuori ardenti di speranza. Attraverso il labirinto del destino, sfidano il fato, intrecciando leggende eteree che risuonano nei secoli, come canti immortali nel tessuto dell'universo.</p>
            </div>
            <div class="w-50 pe-5">
                <img src="/public/img/cornice.png" class="frame2" alt="">
                <img class="w-100 shadow-sm" src="https://wallpapers.com/images/hd/elden-ring-background-giq5p36lqqu12rnj.jpg" alt="">
            </div>
        </div>
        <div class="text-white bgsectionhome d-flex flex-column justify-content-center align-items-center">
            <p>Booleans Legacy</p>
            <h1>Nessuna rinascita, nessun rimpianto!</h1>
            <p class="fs-5 p-4">Affronta i pericoli di Azeroth nei reami Hardcore di Boolean e scopri quanto lontano riesci ad arrivare. Hai solo una vita da vivere. Se morirai, non ci sarà nessuno Spirit Healer a rimandarti nel mondo dei vivi</p>
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