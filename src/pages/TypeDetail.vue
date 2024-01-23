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
    }
</script>

<style lang="scss" scoped>

</style>