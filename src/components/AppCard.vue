<template>
  <div style="margin-top: 100px;" >
    <div class="flip-card" @mouseover="getStats(item, attack), getStatsDiff(item, attack)">
      <div class="flip-card-inner">
        <div class="flip-card-front" style="background-image: {{ store.secondImgPath + item.image }};">
            <h3>{{ item.name }}</h3>
        </div>
        <div class="flip-card-back">
            <div>
                <span class="text-danger">Atk</span>
                <div class="d-flex align-items-center justify-content-between ">
                    <div>
                        <div>
                            <div class="left-line" style="{{ getStats }}">

                            </div>
                            <div class="right-line" style="{{ getStatsDiff }}"></div>
                        </div>
                    </div>
                    <span class="text-danger">{{ item.attack }}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
    export default {
        name: "AppCard",
        props: ['item'],
        data(){
            return {
                store,
            }
        },
        methods: {
            getStats(prop, stat){
                let percentage = prop.stat / 20 * 100;
                percentage = percentage * 3;
                return `width: ${percentage}px;`;
            },
            getStatsDiff(prop, stat){
                let difference = 20 - prop.stat;
                let percentage = difference / 20 * 100;
                percentage = percentage * 3;
                return `width: ${percentage}px;`;
            }
        },
    };
</script>

<style lang="scss" scoped>

.left-line, .right-line {
    height: 12px;
}

.right-line {
    background-color: gray;
}


.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}


</style>
