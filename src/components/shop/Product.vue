<template>
    <div class="col-md-3 col-sm-6">
        <div class="product-grid6">
            <div class="product-image6">
              <!-- <pre> {{ JSON.stringify(product, null, 2) }}</pre> -->
                <router-link :to="{ name: 'ProductView', params: { id: product.id } }" tag="button">
                  <img class="pic-1" src="https://picsum.photos/200/200">
                </router-link>
            </div>
            <div class="product-content">
                <h3 class="title"><a href="#">{{ product.name }}</a></h3>
                <div class="price">${{ product.price }} <span>${{ product.marketPrice }}</span></div>
            </div>
            <ul class="social">
                <li>
                    <a href="" data-tip="Quick View">
                        <fa icon="eye" />
                    </a>
                </li>
                <li>
                    <a href="" data-tip="Add to Wishlist">
                        <fa icon="shopping-bag" />
                    </a>
                </li>
                <li>
                    <button @click="addToCart()" class="btn btn-primary btn-block" :disabled="itemAlreadyInCart">
                        {{itemAlreadyInCart? "Added" : "Cart"}}
                    </button>
                    <!-- <a href="" data-tip="Add to Cart">
                        <fa icon="cart-plus" />
                    </a> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    export default {
        name: 'Product',
        props: ['product'],
        setup(props) {
          const store = useStore();

          let cart = computed(function() {
              return store.state.cart
          });

          let itemAlreadyInCart = computed(function() {
            let inCart = false;

            if(cart.value) {
              cart.value.forEach(item => {
                if(item.id == props.product.id){
                  inCart = true;
                }
              });
            }

            return inCart;
          });

          function addToCart() {
            if(!itemAlreadyInCart.value) {
              store.commit("addCartItem", props.product)
            } else {
              alert('Item already added to cart')
            }
          }

          return {
            cart,
            itemAlreadyInCart,
            addToCart
          }
        }
    }
</script>

<style scoped>
/********************* Shopping Demo-6 **********************/
.product-grid6 {
  overflow: hidden;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  position: relative;
  transition: all 0.5s ease 0s;
}
.product-grid6 .product-image6 {
  overflow: hidden;
}
.product-grid6:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.product-grid6 .product-image6 a {
  display: block;
}
.product-grid6 .product-image6 img {
  width: 100%;
  height: auto;
  transition: all 0.5s ease 0s;
}
.product-grid6:hover .product-image6 img {
  transform: scale(1.1);
}
.product-grid6 .product-content {
  padding: 12px 12px 15px;
  transition: all 0.5s ease 0s;
}
.product-grid6:hover .product-content {
  opacity: 0;
}
.product-grid6 .title {
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0 0 10px;
  transition: all 0.3s ease 0s;
}
.product-grid6 .title a {
  color: #000;
}
.product-grid6 .title a:hover {
  color: #2e86de;
}
.product-grid6 .price {
  font-size: 18px;
  font-weight: 600;
  color: #2e86de;
}
.product-grid6 .price span {
  color: #999;
  font-size: 15px;
  font-weight: 400;
  text-decoration: line-through;
  margin-left: 7px;
  display: inline-block;
}
.product-grid6 .social {
  background-color: #fff;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  opacity: 0;
  transform: translateX(-50%);
  position: absolute;
  bottom: -50%;
  left: 50%;
  z-index: 1;
  transition: all 0.5s ease 0s;
}
.product-grid6:hover .social {
  opacity: 1;
  bottom: 20px;
}
.product-grid6 .social li {
  display: inline-block;
}
.product-grid6 .social li a {
  color: #909090;
  font-size: 16px;
  line-height: 45px;
  text-align: center;
  height: 45px;
  width: 45px;
  margin: 0 7px;
  border: 1px solid #909090;
  border-radius: 50px;
  display: block;
  position: relative;
  transition: all 0.3s ease-in-out;
}
.product-grid6 .social li a:hover {
  color: #fff;
  background-color: #2e86de;
  width: 80px;
}
.product-grid6 .social li a:after, .product-grid6 .social li a:before {
  content: attr(data-tip);
  color: #fff;
  background-color: #2e86de;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 20px;
  padding: 1px 5px;
  border-radius: 5px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
  top: -30px;
}
.product-grid6 .social li a:after {
  content: "";
  height: 15px;
  width: 15px;
  border-radius: 0;
  transform: translateX(-50%) rotate(45deg);
  top: -20px;
  z-index: -1;
}
.product-grid6 .social li a:hover:after, .product-grid6 .social li a:hover:before {
  opacity: 1;
}

@media only screen and (max-width: 990px) {
  .product-grid6 {
    margin-bottom: 30px;
  }
}
</style>