<template>
    <div class = "card-wrapper">
        <div v-if="product.length" class="card">
            <!-- <pre> {{ JSON.stringify(product.length, null, 2) }}</pre> -->
            <!-- card left -->
            <div class = "product-imgs">
            <div class = "img-display">
                <div class = "img-showcase">
                    <img src="https://picsum.photos/200/200" alt="">
                    <!-- <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt = "shoe image">
                    <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt = "shoe image">
                    <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt = "shoe image">
                    <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt = "shoe image"> -->
                </div>
            </div>
            <!-- <div class = "img-select">
                <div class = "img-item">
                <a href = "#" data-id = "1">
                    <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt = "shoe image">
                </a>
                </div>
                <div class = "img-item">
                <a href = "#" data-id = "2">
                    <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt = "shoe image">
                </a>
                </div>
                <div class = "img-item">
                <a href = "#" data-id = "3">
                    <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt = "shoe image">
                </a>
                </div>
                <div class = "img-item">
                <a href = "#" data-id = "4">
                    <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt = "shoe image">
                </a>
                </div>
            </div> -->
            </div>
            <!-- card right -->
            <div class = "product-content">
                <h2 class = "product-title">{{ product[0].name }}</h2>
                <a href="#" class = "product-link">visit store</a>
                <div class = "product-rating">
                    <i class = "fas fa-star"></i>
                    <i class = "fas fa-star"></i>
                    <i class = "fas fa-star"></i>
                    <i class = "fas fa-star"></i>
                    <i class = "fas fa-star-half-alt"></i>
                    <!-- <span>Rating - 4.7(21)</span> -->
                </div>

                <div class = "product-price">
                    <p class = "last-price">Old Price: <span>${{ product[0].marketPrice }}</span></p>
                    <p class = "new-price">New Price: <span>${{ product[0].price }}</span></p>
                </div>

                <div class = "product-detail">
                    <h5>about this item: </h5>
                    <p>{{ product[0].shortdesc }}</p>
                    <ul>
                        <li>Color: <span>Black</span></li>
                        <li>Available: <span>{{ product[0].inStock ? 'In Stock' : 'Out of stock' }}</span></li>
                        <li>Category: <span>Shoes</span></li>
                        <li>Shipping Area: <span>All over the world</span></li>
                        <li>Shipping Fee: <span>{{ product[0].isFreeShipping ? 'Free' : 'charges may'}}</span></li>
                    </ul>
                </div>

                <div class = "purchase-info">
                    <!-- <pre> {{ JSON.stringify(itemAlreadyInCart, null, 2) }}</pre> -->
                    <form>
                        <!-- <input type = "number" min = "0" value = "1" style="height: 47px;"> -->
                        <!-- <button @click="addToCart()" :disabled="itemAlreadyInCart" class="btn btn-outline-primary btn-lg btn-block btn-custom-color">
                            {{itemAlreadyInCart? "Added" : "Cart"}}
                        </button> -->
                        <button
                            type="button"
                            @click="addToCart()" 
                            :disabled="itemAlreadyInCart" 
                            class="btn btn-outline-primary btn-lg btn-block btn-custom-color">
                            {{itemAlreadyInCart? "View Cart" : "ADD TO CART"}}
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div v-else class="container-fluid mt-3">No Products in store!...</div>
    </div>
</template>

<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    import { useRoute } from 'vue-router'

    export default {
        name: 'ProductView',
        setup() {
            const store = useStore();
            const route = useRoute();

            let cart = computed(function() {
                return store.state.cart
            });

            let product = computed(function(){
                return store.state.products ? store.state.products.filter(item => {
                    if(item.id == route.params.id) {
                        return item
                    }
                }) : ''
            })

            let itemAlreadyInCart = computed(function() {
                let inCart = false;

                cart.value.forEach(item => {
                    if(item.id == product.value[0].id){
                        inCart = true;
                    }
                });
                return inCart;
            });

            function addToCart() {
                if(!itemAlreadyInCart.value) {
                    store.commit("addCartItem", product.value[0])
                } else {
                    alert('Item already added to cart')
                }
            }

            return {
                product,
                cart,
                itemAlreadyInCart,
                addToCart
            }
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
}
body{
    line-height: 1.5;
}
.card-wrapper{
    max-width: 1100px;
    margin: 0 auto;
}
img{
    width: 100%;
    display: block;
}
.img-display{
    overflow: hidden;
}
.img-showcase{
    display: flex;
    height: 65%;
    width: 100%;
    transition: all 0.5s ease;
}
.img-showcase img{
    min-width: 100%;
}
.img-select{
    display: flex;
}
.img-item{
    margin: 0.3rem;
}
.img-item:nth-child(1),
.img-item:nth-child(2),
.img-item:nth-child(3){
    margin-right: 0;
}
.img-item:hover{
    opacity: 0.8;
}
.product-content{
    padding: 2rem 1rem;
}
.product-title{
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: 700;
    position: relative;
    color: #12263a;
    margin: 1rem 0;
}
.product-title::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    width: 28%;
    background: #3f89d3;
}
.product-link{
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.9rem;
    display: inline-block;
    margin-bottom: 0.5rem;
    background: #256eff;
    color: #fff;
    padding: 0 0.3rem;
    transition: all 0.5s ease;
}
.product-link:hover{
    opacity: 0.9;
}
.product-rating{
    color: #ffc107;
}
.product-rating span{
    font-weight: 600;
    color: #252525;
}
.product-price{
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 700;
}
.product-price span{
    font-weight: 400;
}
.last-price span{
    color: #f64749;
    text-decoration: line-through;
}
.new-price span{
    color: #256eff;
}
.product-detail h2{
    text-transform: capitalize;
    color: #12263a;
    padding-bottom: 0.6rem;
}
.product-detail p{
    font-size: 0.9rem;
    padding: 0.3rem;
    opacity: 0.8;
}
.product-detail ul{
    margin: 1rem 0;
    font-size: 0.9rem;
}
.product-detail ul li{
    margin: 0;
    list-style: none;
    background: url(https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/checked.png) left center no-repeat;
    background-size: 18px;
    padding-left: 1.7rem;
    margin: 0.4rem 0;
    font-weight: 600;
    opacity: 0.9;
}
.product-detail ul li span{
    font-weight: 400;
}
.purchase-info{
    margin: 1.5rem 0;
}
.purchase-info input,
.purchase-info .btn{
    border: 1.5px solid #ddd;
    border-radius: 25px;
    text-align: center;
    padding: 0.45rem 0.8rem;
    outline: 0;
    margin-right: 0.2rem;
    /* margin-bottom: 1rem; */
}
.purchase-info input{
    /* width: 60px; */
}
.purchase-info .btn{
    cursor: pointer;
    /* color: #fff; */
}
/* .purchase-info .btn:first-of-type{
    background: #256eff;
}
.purchase-info .btn:last-of-type{
    background: #f64749;
} */
.purchase-info .btn:hover{
    opacity: 0.9;
}
.social-links{
    display: flex;
    align-items: center;
}
.social-links a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: #000;
    border: 1px solid #000;
    margin: 0 0.2rem;
    border-radius: 50%;
    text-decoration: none;
    font-size: 0.8rem;
    transition: all 0.5s ease;
}
.social-links a:hover{
    background: #000;
    border-color: transparent;
    color: #fff;
}

@media screen and (min-width: 992px){
    .card{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
    }
    .card-wrapper{
        height: 100vh;
        /* display: flex; */
        justify-content: center;
        align-items: center;
    }
    .product-imgs{
        /* padding: 25px;
        display: flex; */
        flex-direction: column;
        justify-content: center;
    }
    .product-content{
        text-align: start;
        padding-top: 0;
    }
}

.btn-custom-color {
  border: 2px solid #4fc08d;
  color: #4fc08d;
}
.btn-custom-color:hover {
  border: 2px solid #4fc08d;
  background-color: #4fc08d;
  /* color: #ffffff; */
}
</style>