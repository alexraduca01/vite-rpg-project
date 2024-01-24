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
          <button class="flip-card-btn-turn-to-back" @click="flipAllCardsToFront(), setAttackValue(character.attack), setDefenseValue(character.defence)">Stats</button>
        </div>
      </div>
      <div class="flip-card-back">
        <div class='card-body'>
          <h4 class="text-center text-dark">Stats</h4>
          <ul class="list-unstyled text-dark">
            <li>Attack: {{ character.attack }}
              <div class="bar-container">
                <div class="attack-bar"></div>
              </div>
            </li>
            <li>Defense: {{ character.defence }}
              <div class="bar-container">
                <div class="defense-bar"></div>
              </div>
            </li>
            <li>Health: {{ character.life }}
              <div class="bar-container">
                <div class="life-bar"></div>
              </div>
            </li>
            <li>Speed: {{ character.speed }}
              <div class="bar-container">
                <div class="speed-bar"></div>
              </div>
            </li>
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
    },
    flipAllCardsToFront() {
      const cards = document.querySelectorAll(".flip-card");

      for (let i = 0; i < cards.length; i++) {
        const isBackFlipped = cards[i].classList.contains('do-flip');

        if (isBackFlipped) {
          cards[i].classList.remove('do-flip');
        }
      }
    },
    setAttackValue(value) {
      value = Math.max(0, Math.min(20, value));
      let percentage = (value / 20) * 100;
      let attackBars = document.querySelectorAll(".attack-bar")
      attackBars.forEach(function (attackBar) {
        attackBar.style.width = percentage + '%';
      });
    },
    setDefenseValue(value) {
      value = Math.max(0, Math.min(20, value));
      let percentage = (value / 20) * 100;
      let defenseBars = document.querySelectorAll(".defense-bar")
      defenseBars.forEach(function (defenseBar) {
        defenseBar.style.width = percentage + '%';
      });
    },
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

.bar-container {
  width: 230px;
  height: 10px;
  background-color: lightgray;
}

.attack-bar {
  height: 100%;
  background-color: red;
}

.defense-bar {
  height: 100%;
  background-color: blue;
}

.life-bar {
  height: 100%;
  background-color: green;
}

.speed-bar {
  height: 100%;
  background-color: purple;
}
</style>
