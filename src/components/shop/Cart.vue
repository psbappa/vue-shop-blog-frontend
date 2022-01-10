<template>
    <div class="container">
        <!-- https://codepen.io/mjweaver01/pen/yerzox?editors=1010 -->
        <div class="container-fluid">
            <!-- <pre> {{ JSON.stringify(cart, null, 2) }}</pre> -->
            <p v-if="cart.length == 0">
                Your Cart is Empty
            </p>

            <div v-if="totalPrice > 0" class="cart-content">
                <div class="cart-body">
                  <table class="table table-image">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Total</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <!-- <pre>{{ JSON.stringify(cart, null, 2) }}</pre> -->
                    <tbody>
                      <tr v-for="item in cart" :key="item.id">
                        <td class="w-25">
                          <img :src="item.url" class="img-fluid img-thumbnail" alt="Sheep">
                        </td>
                        <td>{{item.name}}</td>
                        <td>{{item.price}}$</td>
                        <td class="qty">
                            <input type="number" class="form-control" id="input" v-model="item.quantity" @change='change(item)' min="1">
                            <span class="badge badge-primary badge-pill" style="background: #5f9ea0;">{{item.quantity}}</span>
                        </td>
                        <td>{{item.quantity * item.price}}</td>
                        <td>
                            <button @click="removeItem(item)" class="btn btn-danger">
                                <fa icon="trash-alt" />
                            </button>
                        </td>
                      </tr>
                    </tbody>
                  </table> 
                  <div class="d-flex justify-content-end">
                    <h5>Total: <span class="price text-success">${{totalPrice}}</span></h5>
                  </div>
                  <div class="cart-footer border-top-0 d-flex justify-content-between" style="float: right;">
                    <button type="button" class="btn btn-success">Checkout</button>
                  </div>
                </div>
              </div>
        </div>

        <div class="card-body">
            <router-link to="/shop" class="btn btn-primary btn-block">Go to shop</router-link>
        </div>
    </div>
</template>

<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    export default {
        name: 'Cart',
        methods: {
            removeItem(item) {
                // console.log('Item', item, 'totalPrice', this.totalPrice, 'cart', this.cart)
                this.cart.splice(item, 1)            //only remove from DOM
            },
            change(item) {
              // console.log('change', item.quantity)
              if(item.quantity == 0) {
                this.cart.splice(item, 1)
              }
            },
        },
        setup(){
            const store = useStore();
            let cart = computed(function () {
                return store.state.cart
            });

            let totalPrice = computed(function(){
                return cart.value.reduce((total, next) => {
                    return total + (next.quantity * next.price)
                }, 0)
            })

            return {
                cart,
                totalPrice
            }
        }
    }
</script>

<style scoped>
.table-image thead td, .table-image thead th {
  border: 0;
  color: #666;
  font-size: 0.8rem;
}
.table-image td, .table-image th {
  vertical-align: middle;
  text-align: center;
}
.table-image td.qty, .table-image th.qty {
  max-width: 2rem;
}

.price {
  margin-left: 1rem;
}

.cart-footer {
  padding-top: 0rem;
}
</style>