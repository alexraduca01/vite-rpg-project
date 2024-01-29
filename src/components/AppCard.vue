<template>
  <!-- Characters Card -->
  <router-link :to="{ name: 'character-detail', params: { slug: character.slug } }" class="text-decoration-none text-dark">
    <div class="card-container scale">

      <div class="card-background">

        <div class="card-frame">

          <div class="frame-header">
            <h1 class="name">{{ character.name }}</h1>
          </div>

          <img :src="store.imgBasePath + character.image" :alt="character.name" class="frame-art object-fit-cover">

          <div class="frame-type-line">
            <h1 class="type">{{ character.type?.name }}</h1>
            <!-- Here goes the set icon -->
          </div>

          <div class="frame-text-box">

            <p class="description ftb-inner-margin my-fs">{{ character.description.substr(0, 100) + '...' }}</p>

          </div>

        </div>

      </div>

    </div>
  </router-link>
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
    setLifeValue(value) {
      value = Math.max(0, Math.min(100, value));
      let percentage = (value / 100) * 100;
      let lifeBars = document.querySelectorAll(".life-bar")
      lifeBars.forEach(function (lifeBar) {
        lifeBar.style.width = percentage + '%';
      });
    },
    setSpeedValue(value) {
      value = Math.max(0, Math.min(20, value));
      let percentage = (value / 20) * 100;
      let speedBars = document.querySelectorAll(".speed-bar")
      speedBars.forEach(function (speedBar) {
        speedBar.style.width = percentage + '%';
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
  transition: all 0.3s ease-in-out;
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

.pt-80 {
  padding-top: 80px;
}

.frame-header,
.frame-type-line {
  border-bottom: 4px solid #a9a9a9;
  border-left: 2px solid #a9a9a9;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
}

.frame-header,
.frame-art,
.frame-type-line {
  box-shadow:
    0 0 0 2px #171314,
    0 0 0 5px #26714A,
    -3px 3px 2px 5px #171314;
  margin-bottom: 7px;
}

.frame-text-box {
  box-shadow:
    0 0 0 5px #26714A,
    -3px 3px 2px 5px #171314;
  margin-top: 1px;
  background:
    linear-gradient(0deg, rgba(201, 216, 201, .3), rgba(201, 216, 209, .3)),
    url(https://image.ibb.co/jKByZn/tile_bg_1.jpg);
  width: 330px;
  margin-left: 12px;
}

.frame-header,
.frame-type-line,
.frame-text-box {
  overflow: hidden;
}

.frame-header,
.frame-type-line {
  background:
    linear-gradient(0deg, rgba(201, 216, 201, .3), rgba(201, 216, 209, .3)),
    url(https://image.ibb.co/jKByZn/tile_bg_1.jpg);
  display: flex;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  border-radius: 18px/40px;
  margin-left: 12px;
}

.name,
.type {
  font-size: 1.3em;
  margin-left: 10px;
  align-self: baseline;
  font-weight: 600;
}

.frame-art {
  height: 50%;
  margin: 0 10px;
  object-position: 0px 0px;
  margin-left: 18px;
}

.card-background {
  background-image: url(https://static.vecteezy.com/system/resources/previews/004/288/142/non_2x/geometric-lines-pattern-on-black-background-free-vector.jpg);
  background-position: center;
}

.card-container {
  border: 1px solid black;
  width: 400px;
  height: 590px;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 25px;
  box-sizing: border-box;
  box-shadow: -8px 9px 16px -3px black;
  background: #171314;
}

.card-background {
  height: 550px;
  margin: 20px 20px 0 20px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 8%;
  border-bottom-right-radius: 8%;
  background-color: #bbb;
  z-index: 0;
}

.card-frame {
  z-index: 1;
  position: relative;
  height: 108%;
  max-width: 97%;
  left: 1%;
  top: 0.5%;
  left: 1.2%;
  display: flex;
  flex-direction: column;
}

.my-fs {
  font-size: 14px;
}
.scale:hover{
  scale: 1.1;
  transition: 0.3s;
}
</style>
