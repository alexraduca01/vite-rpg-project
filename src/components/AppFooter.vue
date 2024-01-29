<template>
    <footer class=" text-center">
      <div class="container p-4 py-5">
        <section class="mb-4">
          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-facebook-f"></i
          ></a>

          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-twitter"></i
          ></a>

          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-google"></i
          ></a>

          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-instagram"></i
          ></a>

          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-reddit"></i
          ></a>

          <a data-mdb-ripple-init class="btn btn-outline btn-floating m-1" href="#!" role="button"
            ><i class="fab fa-github"></i
          ></a>
        </section>

        <section class="mb-4">
            <ul class="d-flex justify-content-center "> 
                <li class="px-5"><a href="#"><img class="img-logo mt-3" src="https://baldursgate3.game/png/logo-dd.png" alt="dungeon studios"></a></li>
                <li class="px-5"><a href="#"><img class="img-lar" src="https://baldursgate3.game/png/logo.png" alt="larian-studios"></a></li>
                <li class="px-5"><a href="#"><img class="img-logo mt-2" src="https://baldursgate3.game/png/logo-wizards.png" alt="wizard-studios"></a></li>
            </ul>
        </section>
          <section class="mt-3">
              <ul class="d-flex justify-content-center contact"> 
                  <li class="px-1"><a class="text-uppercase text-decoration-none" href="#">privacy policy |</a></li>
                  <li class="px-1"><a class="text-uppercase text-decoration-none" href="#">fan content policy |</a></li>
                  <li class="px-1"><a class="text-uppercase text-decoration-none"  href="#">Careers |</a></li>
                  <li class="px-1"><a class="text-uppercase text-decoration-none" href="#">forums |</a></li>
                  <li class="px-1"><a class="text-uppercase text-decoration-none" href="#">presskit |</a></li>
                  <li class="px-1"><a class="text-uppercase text-decoration-none" href="#">cookie settings</a></li>
              </ul>
          </section>

          <section class="mb-4">
          <p>
               © 2024 Boolean Studios. All rights reserved. Boolean Studios is a registered trademark of arrakis nv,
                affiliate of Boolean Studios Games ltd. All company names, brand names, trademarks and logos are the
                 property of their respective owners. © 2024 Wizards of the coast. All rights reserved. Wizards of the 
                 coast, Baldur’s Gate, Dungeons & Dragons, D&D, Boolean Legacy and their respective logos. Are registered trademarks of
                  wizards of the coast LLC  
          </p>
          </section>
          <section>
                <ul class="d-flex justify-content-center "> 
                  <li class="px-1"><a href="#"><img  src="https://images.blz-contentstack.com/v3/assets/blt3d2b37a4c9c0ce28/blt7ca7b3076bbd52a5/5d5f3869cfdefb1cd5f95e48/12.213ng.png" alt="+12"></a></li>
                  <li class="px-1"><a href="#"><img  src="https://images.blz-contentstack.com/v3/assets/blt3d2b37a4c9c0ce28/blt53b6f2a11aaa068b/61083b3db1bb2f5c1ac0b98b/bad-language-black-IT.png" alt="no-violence"></a></li>
                  <li class="px-1"><a href="#"><img  src="https://images.blz-contentstack.com/v3/assets/blt3d2b37a4c9c0ce28/bltc961e464b5ea4150/61083b3d2285fc502f305e89/violence-black-IT.png" alt="wizard-studios"></a></li>
                  <li class="px-1"><a href="#"><img src="https://images.blz-contentstack.com/v3/assets/blt3d2b37a4c9c0ce28/bltea75a8b6af408bfc/61083b3d3056e05d4baae038/in-game-purchase-black-IT.png" alt="wizard-studios"></a></li>
                </ul>
          </section>
      </div>

      <div class="text-center p-2" style="background-color: rgba(0, 0, 0, 0.05);">
        ©2024 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Boolean Legacy.com</a>
      </div>
    </footer>
</template>

<script>
import { store } from "../store";
import axios from "axios";

    export default {
        name: 'AppFooter',
        data() {
            return {
                store,
            }
        }

    }
</script>

<style lang="scss" scoped>

footer{
    background-color: #0b121c78;
    font-family: "QuadraatOffcPro Regular", sans-serif;
}

i {
    color:#c19976;
    font-size: 1.9rem;
}
a{
  color: rgba($color: #ffffff, $alpha: 0.7)
}
p{
  color: rgba($color: #c19976, $alpha: 0.4)
}
i:hover{
    color:white;
}
li{
    list-style-type: none;
}
.img-logo{
    width: 110px;
}
.img-lar {
        width: 60px !important;
        height: 60px !important;
}
.text-reset:hover{
  color: white  ;
}

.contact > li > a:hover{
  color:   #c19976;
;
}
</style>