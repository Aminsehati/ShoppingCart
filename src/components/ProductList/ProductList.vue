<template>
<div class="col-lg-4" v-for="item in Products" :key="item.id">
    <div class="card "  >
        <img class="card-img-top" :src="item.imgUrl" :alt="item.title">
        <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">$ {{item.price}}</p>
            <a href="#" class="btn btn-primary" @click="addToCart(item)">Go somewhere</a>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name:'ProductList',
    computed:{
        ...mapGetters(['Products'])
    },
    methods:{
        ...mapActions(['getProduct','addToCart'])
    },
    mounted(){
        this.getProduct();
    }
}
</script>

<style>
.card{
    margin-bottom: 20px;
}
</style>