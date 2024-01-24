<template>
  <!-- Characters Card -->
  <div class="flip-card-3D-wrapper">
    <div class="flip-card">
      <div class="flip-card-front">
        <div class='card-img'>
          <img :src="store.imgBasePath + character.image" :alt="character.name">
        </div>
        <div class='card-body'>
          <h4 class="text-center text-dark">{{ character.name }}</h4>
          <p class="text-dark px-3">{{ character.description }}</p>
          <div class="d-flex justify-content-center">
            <button><router-link :to="{ name: 'character-detail', params: { id: character.id } }">View
              More</router-link></button>
          </div>
          <button class="flip-card-btn-turn-to-back">Stats</button>
        </div>
      </div>
      <div class="flip-card-back">
        <div class='card-body'>
          <h4 class="text-center text-dark">Stats</h4>
          <ul class="list-unstyled text-dark">
            <li>Attack: {{ character.attack }}</li>
            <li>Defense: {{ character.defence }}</li>
            <li>Health: {{ character.life }}</li>
            <li>Speed: {{ character.speed }}</li>
            <li>Sex: {{ character.sex }}</li>
          </ul>
          <button class="flip-card-btn-turn-to-front text-dark">Return</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "AppCard",
  props: ['character'],
  data() {
    return {
      store,
    }
  },
  methods: {
    // getStats(prop, stat) {
    //   let percentage = prop.stat / 20 * 100;
    //   percentage = percentage * 3;
    //   return `width: ${percentage}px;`;
    // },
    // getStatsDiff(prop, stat) {
    //   let difference = 20 - prop.stat;
    //   let percentage = difference / 20 * 100;
    //   percentage = percentage * 3;
    //   return `width: ${percentage}px;`;
    // }
    cardFlip() {
      const flipCardWrapAll = document.querySelector("#flip-card-wrap-all")
      const cardsWrapper = document.querySelectorAll(".flip-card-3D-wrapper")
      const cards = document.querySelectorAll(".flip-card")
      let frontButtons = ""
      let backButtons = ""

      for (let i = 0; i < cardsWrapper.length; i++) {
        frontButtons = cardsWrapper[i].querySelector(".flip-card-btn-turn-to-back")
        frontButtons.style.visibility = "visible"
        frontButtons.onclick = function () {
          cards[i].classList.toggle('do-flip')
        }

        backButtons = cardsWrapper[i].querySelector(".flip-card-btn-turn-to-front")
        backButtons.style.visibility = "visible"
        backButtons.onclick = function () {
          cards[i].classList.toggle('do-flip')
        }
      }
    }
  },
  mounted() {
    this.cardFlip()
  },
};
</script>

<style lang="scss" scoped>
.flip-card-3D-wrapper {
  width: 100%;
  height: 100%;
  max-width: 300px;
  perspective: 900px;
  margin: 10px auto;
}

.flip-card {
  height: 100%;
  transition: all 1s ease-in-out;
  transform-style: preserve-3d;
  height: 500px;
}

.flip-card img {
  display: block;
  width: 290px;
  height: 270px;
  object-fit: cover;
}


.do-flip {
  transform: rotateY(-180deg);
}

.flip-card-btn-turn-to-back,
.flip-card-btn-turn-to-front {
  position: absolute;
  bottom: 8px;
  right: 8px;
  visibility: hidden;
  border-radius: 10px;
}

.flip-card-btn-turn-to-back {
  background: white;
  color: black;
}

.flip-card-btn-turn-to-front {
  background: white;
  color: black;
}

.flip-card-front,
.flip-card-back {
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  z-index: 2;
  border-radius: 10px;
  border: 5px solid #29292D;
}

.flip-card-front {
  background: white;
}

.flip-card-back {
  background: white;
  transform: rotateY(180deg);
}

.flip-card-front {
  color: white;
}

.flip-card-back h4 {
  color: white;
}
</style>
