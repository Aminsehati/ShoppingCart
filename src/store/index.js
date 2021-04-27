import { createStore } from 'vuex';
import Products from '../mock/product.json';

export default createStore({
  state: {
    Products:[],
    cart:[],
  },
  getters:{
    Products :state => state.Products,
    cart :state => state.cart,
  },
  mutations: {
      getproductData(state){
      state.Products = Products
    },
    additemToCart(state,item){
      const addedItem = state.cart.find((product)=>product.id ===item.id);
      if(addedItem){
        addedItem.qty++
      }else{
        state.cart.push({
          qty:1,
          ...item,
        });
      }
    },
    addQty(state,id){
      const currentItem = state.cart.find((product)=>product.id ===id);
      currentItem.qty++;
    },
    reduceQty(state,id){
      const currentItem = state.cart.find((product)=>product.id ===id);
      if(currentItem.qty > 1){
        currentItem.qty--;
      }else{
        state.cart.splice(currentItem,1);
      }
    },
    removeItem(state,id){
      const currentItem = state.cart.find((product)=>product.id ===id);
      state.cart.splice(currentItem,1);
    }
  },
  actions: {
      getProduct({commit}){
       commit('getproductData')
     },
     addToCart({commit},item){
        commit('additemToCart',item);
     },
     addQty({commit},id){
      commit('addQty',id);
     },
     reduceQty({commit},id){
       commit('reduceQty',id);
     },
     removeItem({commit,id}){
      commit('removeItem',id);
     }
  },
  modules: {
  }
})
