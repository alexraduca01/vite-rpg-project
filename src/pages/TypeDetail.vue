<template>
<div>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ type.name }}</h5>
            <p class="card-text">{{ type.description }}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'TypeDetail',
        data(){
            return {
                store,
                type: {},
            }
        },
        methods:{
            getTypeData(){
                console.log(this.$route);
                axios.get(`${this.store.apiUrl}/types/${this.$route.params.slug}`).then((res)=>{
                    console.log(res.data);
                    this.type = res.data.results 
                })
            }
        },
        created(){
            this.getTypeData();
        }
    }
</script>

<style lang="scss" scoped>

</style>