<template>
















































    <div class="text-white bgsmoke d-flex align-items-center ">
        <div class="fs-5 w-50 p-3 m-5 test">
            <p>About Us</p>
            <h1>About Booleans Legacy</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquam blanditiis, recusandae nihil eveniet iste voluptatum tempore sit, odit sequi veritatis similique corrupti hic consequatur consectetur officiis deserunt magnam in!</p> 
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptatibus officia ducimus consectetur itaque nam illum aspernatur velit vitae, ratione minima animi laudantium esse porro expedita optio asperiores veritatis. Eligendi nam vitae, nihil eveniet maiores rerum, perferendis laudantium rem est officia blanditiis ipsam reiciendis ad natus aspernatur in, obcaecati quisquam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quisquam repudiandae, sequi laboriosam cumque voluptatem similique nam eveniet ut recusandae ipsum dolores minus error illo culpa nihil praesentium dicta ea. Consequuntur veritatis excepturi laudantium aut. Delectus odit consequatur nisi natus, exercitationem fuga beatae placeat laborum nihil expedita quas voluptatem aut nam, numquam, tempora eius doloremque neque pariatur libero voluptatibus quisquam?</p>
        </div>
        <div class="w-75 m-5">
            <img class=" w-100 h-100 shadow-sm circlebig" src="https://wallpapers.com/images/hd/elden-ring-background-giq5p36lqqu12rnj.jpg" alt="">
        </div>
    </div>
    <div class="text-white bgsectionhome d-flex flex-column justify-content-center align-items-center">
        <p>Booleans Legacy</p>
        <h1>Nessuna rinascita, nessun rimpianto!</h1>
        <p class="fs-5 p-4">Affronta i pericoli di Azeroth nei reami Hardcore di WoW Classic e scopri quanto lontano riesci ad arrivare. Hai solo una vita da vivere. Se morirai, non ci sarà nessuno Spirit Healer a rimandarti nel mondo dei vivi</p>
    </div>
</template>

<script>

    export default {
        name: 'AppHome',
        
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>

.test{
    border-top: 5px solid #553c229a;
    border-bottom: 5px solid #553c229a;
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



</style>