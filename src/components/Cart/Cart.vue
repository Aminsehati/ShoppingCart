<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(itemcart,index) in cart" :key="index">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="removeItem(itemcart.id)">
            <span aria-hidden="true">&times;</span>
            </button>
            <div class="media">
                 <img :src="itemcart.imgUrl" :alt="itemcart.title" class="mr-3" width="80"/>
                <div class="media-body text-left">
                    <h5 class="mt-0">{{itemcart.title}}</h5>
                    <button class="btn-qty btn btn-secondary btn-sm rounded-circle" @click="addQty(itemcart.id)">
                        +
                    </button>
                        x {{itemcart.qty}}
                    <button class="btn-qty btn btn-secondary btn-sm rounded-circle" @click="reduceQty(itemcart.id)">
                        -
                    </button>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import {  mapActions, mapGetters } from 'vuex';
export default {
    name:'cart',
    computed:{
        ...mapGetters(['cart'])
    },
    methods:{
        ...mapActions(['addQty','reduceQty','removeItem'])
    }
}
</script>

<style scoped>
    .btn-qty{
        border-radius: 50%;
        width: 34px;
        height: 34px;
    }
</style>