<template>
    <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Navbar</span>
        <span class="navbar-brand mb-0 h1">Cart ({{tottalQty}}) </span>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'Header',
    computed:{
        ...mapGetters(['cart']),
        tottalQty(){
            return this.cart.reduce((a,b)=>a+b.qty,0);
        }
    },

}
</script>