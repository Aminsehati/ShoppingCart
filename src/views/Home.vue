<template>
  <div class="Home">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <ProductList/>
          </div>
        </div>
        <div class="col-lg-4">
          <Cart/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from '../components/ProductList/ProductList';
import Cart from '../components/Cart/Cart';
export default {
  name:'Home',
  components:{ProductList,Cart},
}
</script>

<style>
.Home{
  padding: 20px 0;
}
</style>