<template>
    <div>
        <button>
            <div class="label">
                <span class="text-uppercase">{{ text }}</span>
                <div class="top">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="bottom">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="border">
                <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 1L15.7071 0.292893L15.4142 0H15V1ZM3 1V0H0.585786L2.29289 1.70711L3 1ZM12.5 10.5L11.7929 11.2071L12.5 11.9142L13.2071 11.2071L12.5 10.5ZM16 7L16.7071 7.70711L17.4142 7L16.7071 6.29289L16 7ZM13.5 4.5L14.2071 3.79289L13.5 3.08579L12.7929 3.79289L13.5 4.5ZM7 11L6.29289 10.2929L5.58579 11L6.29289 11.7071L7 11ZM8.79289 14.2071L9.5 14.9142L10.9142 13.5L10.2071 12.7929L8.79289 14.2071ZM18.5 4.5L17.7929 5.20711L18.5565 5.9707L19.2593 5.15079L18.5 4.5ZM21.5 1V0H21.0401L20.7407 0.349209L21.5 1ZM15 0H3V2H15V0ZM2.29289 1.70711L11.7929 11.2071L13.2071 9.79289L3.70711 0.292893L2.29289 1.70711ZM13.2071 11.2071L16.7071 7.70711L15.2929 6.29289L11.7929 9.79289L13.2071 11.2071ZM16.7071 6.29289L14.2071 3.79289L12.7929 5.20711L15.2929 7.70711L16.7071 6.29289ZM14.2929 1.70711L17.7929 5.20711L19.2071 3.79289L15.7071 0.292893L14.2929 1.70711ZM19.2593 5.15079L22.2593 1.65079L20.7407 0.349209L17.7407 3.84921L19.2593 5.15079ZM21.5 2H23V0H21.5V2ZM12.7929 3.79289L10.7929 5.79289L12.2071 7.20711L14.2071 5.20711L12.7929 3.79289ZM7.79289 8.79289L6.29289 10.2929L7.70711 11.7071L9.20711 10.2071L7.79289 8.79289ZM9 15V12H7V15H9ZM6.29289 11.7071L7.29289 12.7071L8.70711 11.2929L7.70711 10.2929L6.29289 11.7071ZM7.29289 12.7071L8.79289 14.2071L10.2071 12.7929L8.70711 11.2929L7.29289 12.7071Z">
                    </path>
                </svg>
                <div class="line"></div>
                <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 1L7.29289 0.292893L7.58579 0H8V1ZM20 1V0H22.4142L20.7071 1.70711L20 1ZM10.5 10.5L11.2071 11.2071L10.5 11.9142L9.79289 11.2071L10.5 10.5ZM7 7L6.29289 7.70711L5.58579 7L6.29289 6.29289L7 7ZM9.5 4.5L8.79289 3.79289L9.5 3.08579L10.2071 3.79289L9.5 4.5ZM16 11L16.7071 10.2929L17.4142 11L16.7071 11.7071L16 11ZM14.2071 14.2071L13.5 14.9142L12.0858 13.5L12.7929 12.7929L14.2071 14.2071ZM4.5 4.5L5.20711 5.20711L4.44352 5.9707L3.74074 5.15079L4.5 4.5ZM1.5 1V0H1.95993L2.25926 0.349209L1.5 1ZM8 0H20V2H8V0ZM20.7071 1.70711L11.2071 11.2071L9.79289 9.79289L19.2929 0.292893L20.7071 1.70711ZM9.79289 11.2071L6.29289 7.70711L7.70711 6.29289L11.2071 9.79289L9.79289 11.2071ZM6.29289 6.29289L8.79289 3.79289L10.2071 5.20711L7.70711 7.70711L6.29289 6.29289ZM8.70711 1.70711L5.20711 5.20711L3.79289 3.79289L7.29289 0.292893L8.70711 1.70711ZM3.74074 5.15079L0.740743 1.65079L2.25926 0.349209L5.25926 3.84921L3.74074 5.15079ZM1.5 2H0V0H1.5V2ZM10.2071 3.79289L12.2071 5.79289L10.7929 7.20711L8.79289 5.20711L10.2071 3.79289ZM15.2071 8.79289L16.7071 10.2929L15.2929 11.7071L13.7929 10.2071L15.2071 8.79289ZM14 15V12H16V15H14ZM16.7071 11.7071L15.7071 12.7071L14.2929 11.2929L15.2929 10.2929L16.7071 11.7071ZM15.7071 12.7071L14.2071 14.2071L12.7929 12.7929L14.2929 11.2929L15.7071 12.7071Z">
                    </path>
                </svg>
                <div class="line"></div>
                <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 14L15.7071 14.7071L15.4142 15H15V14ZM3 14V15H0.585786L2.29289 13.2929L3 14ZM12.5 4.5L11.7929 3.79289L12.5 3.08579L13.2071 3.79289L12.5 4.5ZM16 8L16.7071 7.29289L17.4142 8L16.7071 8.70711L16 8ZM13.5 10.5L14.2071 11.2071L13.5 11.9142L12.7929 11.2071L13.5 10.5ZM7 4L6.29289 4.70711L5.58579 4L6.29289 3.29289L7 4ZM8.79289 0.792893L9.5 0.0857864L10.9142 1.5L10.2071 2.20711L8.79289 0.792893ZM18.5 10.5L17.7929 9.79289L18.5565 9.0293L19.2593 9.84921L18.5 10.5ZM21.5 14V15H21.0401L20.7407 14.6508L21.5 14ZM15 15H3V13H15V15ZM2.29289 13.2929L11.7929 3.79289L13.2071 5.20711L3.70711 14.7071L2.29289 13.2929ZM13.2071 3.79289L16.7071 7.29289L15.2929 8.70711L11.7929 5.20711L13.2071 3.79289ZM16.7071 8.70711L14.2071 11.2071L12.7929 9.79289L15.2929 7.29289L16.7071 8.70711ZM14.2929 13.2929L17.7929 9.79289L19.2071 11.2071L15.7071 14.7071L14.2929 13.2929ZM19.2593 9.84921L22.2593 13.3492L20.7407 14.6508L17.7407 11.1508L19.2593 9.84921ZM21.5 13H23V15H21.5V13ZM12.7929 11.2071L10.7929 9.20711L12.2071 7.79289L14.2071 9.79289L12.7929 11.2071ZM7.79289 6.20711L6.29289 4.70711L7.70711 3.29289L9.20711 4.79289L7.79289 6.20711ZM9 0V3H7V0H9ZM6.29289 3.29289L7.29289 2.29289L8.70711 3.70711L7.70711 4.70711L6.29289 3.29289ZM7.29289 2.29289L8.79289 0.792893L10.2071 2.20711L8.70711 3.70711L7.29289 2.29289Z">
                    </path>
                </svg>
                <div class="line"></div>
                <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 14L7.29289 14.7071L7.58579 15H8V14ZM20 14V15H22.4142L20.7071 13.2929L20 14ZM10.5 4.5L11.2071 3.79289L10.5 3.08579L9.79289 3.79289L10.5 4.5ZM7 8L6.29289 7.29289L5.58579 8L6.29289 8.70711L7 8ZM9.5 10.5L8.79289 11.2071L9.5 11.9142L10.2071 11.2071L9.5 10.5ZM16 4L16.7071 4.70711L17.4142 4L16.7071 3.29289L16 4ZM14.2071 0.792893L13.5 0.0857864L12.0858 1.5L12.7929 2.20711L14.2071 0.792893ZM4.5 10.5L5.20711 9.79289L4.44352 9.0293L3.74074 9.84921L4.5 10.5ZM1.5 14V15H1.95993L2.25926 14.6508L1.5 14ZM8 15H20V13H8V15ZM20.7071 13.2929L11.2071 3.79289L9.79289 5.20711L19.2929 14.7071L20.7071 13.2929ZM9.79289 3.79289L6.29289 7.29289L7.70711 8.70711L11.2071 5.20711L9.79289 3.79289ZM6.29289 8.70711L8.79289 11.2071L10.2071 9.79289L7.70711 7.29289L6.29289 8.70711ZM8.70711 13.2929L5.20711 9.79289L3.79289 11.2071L7.29289 14.7071L8.70711 13.2929ZM3.74074 9.84921L0.740743 13.3492L2.25926 14.6508L5.25926 11.1508L3.74074 9.84921ZM1.5 13H0V15H1.5V13ZM10.2071 11.2071L12.2071 9.20711L10.7929 7.79289L8.79289 9.79289L10.2071 11.2071ZM15.2071 6.20711L16.7071 4.70711L15.2929 3.29289L13.7929 4.79289L15.2071 6.20711ZM14 0V3H16V0H14ZM16.7071 3.29289L15.7071 2.29289L14.2929 3.70711L15.2929 4.70711L16.7071 3.29289ZM15.7071 2.29289L14.2071 0.792893L12.7929 2.20711L14.2929 3.70711L15.7071 2.29289Z">
                    </path>
                </svg>
                <div class="line"></div>
            </div>
            <svg class="defs">
                <defs>
                    <linearGradient id="border" x1="74.5" y1="0" x2="74.5" y2="50" gradientUnits="userSpaceOnUse">
                        <stop stop-color="currentColor"></stop>
                        <stop offset="1" stop-color="#776751"></stop>
                    </linearGradient>
                    <filter id="black-overlay" x="0" y="0" width="100%" height="100%">
                        <feColorMatrix type="matrix" values="0.6 0 0 0 0  0 0.6 0 0 0  0 0 0.6 0 0  0 0 0 1 0">
                        </feColorMatrix>
                    </filter>
                    <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feComponentTransfer in="SourceAlpha">
                            <feFuncA type="table" tableValues="1 0"></feFuncA>
                        </feComponentTransfer>
                        <feGaussianBlur stdDeviation="0"></feGaussianBlur>
                        <feOffset dx="0" dy="1" result="offsetblur"></feOffset>
                        <feFlood flood-color="#c9bda8" result="color"></feFlood>
                        <feComposite in2="offsetblur" operator="in"></feComposite>
                        <feComposite in2="SourceAlpha" operator="in"></feComposite>
                        <feMerge>
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                            <feMergeNode></feMergeNode>
                        </feMerge>
                    </filter>
                </defs>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    name: 'FancyButton',
    props: {
        text: '',
    }
}
</script>

<style lang="scss" scoped>

button {
  --border-color: #B19B7E;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  position: relative;
  padding: 4px 11px;
  margin: 0;
  cursor: pointer;
  transform: translateZ(0);
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.35)) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
}
button:before, button:after {
  content: "";
  width: 23px;
  height: 15px;
  position: absolute;
  z-index: 2;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 15"><path d="M8 14L7.29289 14.7071L7.58579 15H8V14ZM20 14V15H22.4142L20.7071 13.2929L20 14ZM10.5 4.5L11.2071 3.79289L10.5 3.08579L9.79289 3.79289L10.5 4.5ZM7 8L6.29289 7.29289L5.58579 8L6.29289 8.70711L7 8ZM9.5 10.5L8.79289 11.2071L9.5 11.9142L10.2071 11.2071L9.5 10.5ZM16 4L16.7071 4.70711L17.4142 4L16.7071 3.29289L16 4ZM14.2071 0.792893L13.5 0.0857864L12.0858 1.5L12.7929 2.20711L14.2071 0.792893ZM4.5 10.5L5.20711 9.79289L4.44352 9.0293L3.74074 9.84921L4.5 10.5ZM1.5 14V15H1.95993L2.25926 14.6508L1.5 14ZM8 15H20V13H8V15ZM20.7071 13.2929L11.2071 3.79289L9.79289 5.20711L19.2929 14.7071L20.7071 13.2929ZM9.79289 3.79289L6.29289 7.29289L7.70711 8.70711L11.2071 5.20711L9.79289 3.79289ZM6.29289 8.70711L8.79289 11.2071L10.2071 9.79289L7.70711 7.29289L6.29289 8.70711ZM8.70711 13.2929L5.20711 9.79289L3.79289 11.2071L7.29289 14.7071L8.70711 13.2929ZM3.74074 9.84921L0.740743 13.3492L2.25926 14.6508L5.25926 11.1508L3.74074 9.84921ZM1.5 13H0V15H1.5V13ZM10.2071 11.2071L12.2071 9.20711L10.7929 7.79289L8.79289 9.79289L10.2071 11.2071ZM15.2071 6.20711L16.7071 4.70711L15.2929 3.29289L13.7929 4.79289L15.2071 6.20711ZM14 0V3H16V0H14ZM16.7071 3.29289L15.7071 2.29289L14.2929 3.70711L15.2929 4.70711L16.7071 3.29289ZM15.7071 2.29289L14.2071 0.792893L12.7929 2.20711L14.2929 3.70711L15.7071 2.29289Z"></path></svg>') no-repeat;
          mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 15"><path d="M8 14L7.29289 14.7071L7.58579 15H8V14ZM20 14V15H22.4142L20.7071 13.2929L20 14ZM10.5 4.5L11.2071 3.79289L10.5 3.08579L9.79289 3.79289L10.5 4.5ZM7 8L6.29289 7.29289L5.58579 8L6.29289 8.70711L7 8ZM9.5 10.5L8.79289 11.2071L9.5 11.9142L10.2071 11.2071L9.5 10.5ZM16 4L16.7071 4.70711L17.4142 4L16.7071 3.29289L16 4ZM14.2071 0.792893L13.5 0.0857864L12.0858 1.5L12.7929 2.20711L14.2071 0.792893ZM4.5 10.5L5.20711 9.79289L4.44352 9.0293L3.74074 9.84921L4.5 10.5ZM1.5 14V15H1.95993L2.25926 14.6508L1.5 14ZM8 15H20V13H8V15ZM20.7071 13.2929L11.2071 3.79289L9.79289 5.20711L19.2929 14.7071L20.7071 13.2929ZM9.79289 3.79289L6.29289 7.29289L7.70711 8.70711L11.2071 5.20711L9.79289 3.79289ZM6.29289 8.70711L8.79289 11.2071L10.2071 9.79289L7.70711 7.29289L6.29289 8.70711ZM8.70711 13.2929L5.20711 9.79289L3.79289 11.2071L7.29289 14.7071L8.70711 13.2929ZM3.74074 9.84921L0.740743 13.3492L2.25926 14.6508L5.25926 11.1508L3.74074 9.84921ZM1.5 13H0V15H1.5V13ZM10.2071 11.2071L12.2071 9.20711L10.7929 7.79289L8.79289 9.79289L10.2071 11.2071ZM15.2071 6.20711L16.7071 4.70711L15.2929 3.29289L13.7929 4.79289L15.2071 6.20711ZM14 0V3H16V0H14ZM16.7071 3.29289L15.7071 2.29289L14.2929 3.70711L15.2929 4.70711L16.7071 3.29289ZM15.7071 2.29289L14.2071 0.792893L12.7929 2.20711L14.2929 3.70711L15.7071 2.29289Z"></path></svg>') no-repeat;
}
button:before {
  left: 0;
  transform: scaleX(-1);
}
button:after {
  right: 0;
}
button .defs {
  color: var(--border-color);
  transition: color 0.3s;
}
button .border {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 23px auto 23px;
  grid-template-rows: 15px auto 15px;
}
button .border svg {
  width: 23px;
  height: 15px;
  display: block;
  fill: black;
  position: absolute;
  color: var(--border-color);
  transform: translateZ(0);
  fill: url(#border);
  filter: url(#inset-shadow);
}
button .border svg:nth-child(3) {
  grid-column: 3;
  grid-row: 1;
}
button .border svg:nth-child(5) {
  grid-column: 1;
  grid-row: 3;
}
button .border svg:nth-child(7) {
  grid-column: 3;
  grid-row: 3;
}
button .border .line {
  height: 2px;
  width: 100%;
  background-color: var(--border-color);
  position: relative;
  transition: background-color 0.3s;
}
button .border .line:nth-child(2) {
  grid-column: 2;
  grid-row: 1;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4);
}
button .border .line:nth-child(4), button .border .line:nth-child(8) {
  width: 2px;
  z-index: 3;
  height: calc(100% + 1px);
}
button .border .line:nth-child(4):before, button .border .line:nth-child(8):before {
  content: "";
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
}
button .border .line:nth-child(4) {
  grid-column: 1;
  grid-row: 2;
  margin-left: 7px;
}
button .border .line:nth-child(6) {
  grid-column: 2;
  grid-row: 3;
  margin-top: 13px;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4);
  background-color: var(--border-color);
}
button .border .line:nth-child(6):before {
  content: "";
  inset: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
}
button .border .line:nth-child(8) {
  grid-column: 3;
  grid-row: 2;
  margin-left: 14px;
}
button .label {
  padding: 16px 24px;
  position: relative;
  z-index: 1;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(0, 0, 0, 0.34) 50.01%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, #31221B 0%, #341307 100%);
  background-blend-mode: overlay, overlay, overlay, normal;
  box-shadow: 0px -1px 1px 0px rgba(0, 0, 0, 0.4) inset;
  -webkit-clip-path: polygon(12px 0, calc(100% - 12px) 0, 100% 13px, 100% calc(100% - 13px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 13px), 0 13px);
          clip-path: polygon(12px 0, calc(100% - 12px) 0, 100% 13px, 100% calc(100% - 13px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 13px), 0 13px);
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  line-height: 16px;
  white-space: nowrap;
  text-shadow: 0 2px 1px rgba(0, 0, 0, 0.25);
  transform: translateZ(0);
}
button .label span {
  background: linear-gradient(180deg, #FFE5C2 1%, #CDAF87 100%), #FFFFFF;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: block;
  opacity: var(--text-opacity, 0.8);
  transition: opacity 0.3s;
}
button .label .top,
button .label .bottom {
  left: 0;
  right: 0;
  position: absolute;
  height: 6px;
  overflow: hidden;
}
button .label .top div, button .label .top:before, button .label .top:after,
button .label .bottom div,
button .label .bottom:before,
button .label .bottom:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
}
button .label .top {
  top: 0;
  background: radial-gradient(61.17% 100% at 50% 100%, transparent, rgba(255, 255, 255, 0) 100%);
}
button .label .top div {
  inset: 0;
  background: radial-gradient(70% 100% at 50% 100%, rgba(255, 255, 255, 0.75) 0%, transparent 100%);
  mix-blend-mode: overlay;
  opacity: var(--top-shine-opacity, 0.75);
  transition: opacity 0.3s;
}
button .label .top div:nth-child(2) {
  background: radial-gradient(80% 100% at 50% 100%, white 40%, transparent 100%);
}
button .label .top div:nth-child(3) {
  background: radial-gradient(80% 100% at 50% 100%, white 20%, transparent 100%);
}
button .label .top:before {
  height: 0;
  bottom: 0;
  background: radial-gradient(61.17% 100% at 50% 100%, #FFFFFF 0%, white 100%);
  mix-blend-mode: overlay;
  background-blend-mode: screen;
}
button .label .top:after {
  height: 1px;
  bottom: 0;
  z-index: 1;
  background: linear-gradient(to right, transparent 0%, white 50%, transparent 100%);
}
button .label .bottom {
  bottom: 0;
  background: radial-gradient(89.02% 100% at 50% 100%, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.6) 100%);
  mix-blend-mode: overlay;
  transform: matrix(1, 0, 0, -1, 0, 0);
}
button .label .bottom div {
  height: 1px;
  bottom: 0;
  background: radial-gradient(circle at 33% 0%, rgba(255, 255, 255, 0.8) 0%, transparent 30%), radial-gradient(circle at 66% 0%, rgba(255, 255, 255, 0.8) 0%, transparent 20%);
  opacity: var(--bottom-shine-opacity, 0.7);
  transition: opacity 0.3s;
}
button:focus-visible, button:hover {
  --top-shine-opacity: 1;
  --bottom-shine-opacity: 1;
  --border-color: #CEB390;
  --text-opacity: 1;
}

.defs {
  position: absolute;
  pointer-events: none;
}

body {
  min-height: 100dvh;
  display: grid;
  place-items: center;
  background: #404040;
}
.border {
  border: 0!important;
}
</style>