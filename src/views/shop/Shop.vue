<template>
<!-- https://auth0.com/blog/state-management-in-vue-3-applications/ -->
  <div class="shop-head">
    <div id="topBar">
      <input type="text" id="search" name="search" class="form-control player-search" placeholder="Search for an item..." autocomplete="off">
      <div class="sortBy">
        <h4>SORT BY:</h4>
        <select class="form-control">
          <option>Most Popular</option>
          <option>Price [Lowest to Highest]</option>
          <option>Price [Highest to Lowest]</option>
          <option>Name [A to Z]</option>
        </select>
      </div>
    </div>
    <div class="container-fluid left-sidebar">
      <div class="row">
        <!-- Left sidebar section -->
        <div class="col-md-3 pt-5" style="width: 19% !important; height: 100%;">
          <aside id="filters left-side">
            <h1 class="bigHead">FILTER SHOP ITEMS</h1>
            <h2 class="bump"><span class="results">37</span> Results Found</h2>
            <div id="type">
              <h1>TYPE</h1>
              <div class="bump">
                <div class="box1">
                  <input type="checkbox" id="clothing">
                  <label for="clothing" class="check-box"></label>
                  <h4>Clothing</h4> </div>
                <div class="box1">
                  <input type="checkbox" id="equipment">
                  <label for="equipment" class="check-box"></label>
                  <h4>Equipment</h4> </div>
                <div class="box1">
                  <input type="checkbox" id="trips">
                  <label for="trips" class="check-box"></label>
                  <h4>Trips/Tickets</h4> </div>
                <div class="box1">
                  <input type="checkbox" id="social">
                  <label for="social" class="check-box"></label>
                  <h4>Social Media</h4> </div>
                <div class="box1">
                  <input type="checkbox" id="profile">
                  <label for="profile" class="check-box"></label>
                  <h4>Profile Perks</h4> </div>
              </div>
            </div>
            <div id="sports" class="clearfix">
              <h1>SPORT</h1>
              <div class="bump">
                <div class="box1">
                  <input type="checkbox" id="nfl">
                  <label for="nfl" class="check-box"></label>
                  <h4>NFL</h4> </div>
                <div class="box1">
                  <input type="checkbox" id="mlb">
                  <label for="mlb" class="check-box"></label>
                  <h4>PGA</h4> </div>
                <div class="box1">
                  <input type="checkbox" id="pga">
                  <label for="pga" class="check-box"></label>
                  <h4>MLB</h4> </div>
                <div class="box1">
                  <input type="checkbox" id="esports">
                  <label for="esports" class="check-box"></label>
                  <h4 class="clearMarg">E-SPORTS</h4> </div>
              </div>
            </div>
            <div id="specials" class="clearfix">
              <h1>SPECIALS</h1>
              <div class="specBump">
                <div class="box2">
                  <input type="checkbox" id="onSale">
                  <label for="onSale" class="check-box"></label>
                  <h4>ON SALE</h4> </div>
                <div class="box2">
                  <input type="checkbox" id="newest">
                  <label for="newest" class="check-box"></label>
                  <h4>NEWEST</h4> </div>
                <div class="box2">
                  <input type="checkbox" id="featured">
                  <label for="featured" class="check-box"></label>
                  <h4>FEATURED</h4> </div>
              </div>
            </div>
            <!--END SPECIALS RANGE -->
            <div id="priceRange" class="clearfix">
              <h1>PRICE RANGE</h1>
              <div class="bump">
                <div id="slider"></div>
                <div class="minVal">
                  <h3 class="minPrice">1,300</h3> </div>
                <div class="maxVal">
                  <h3 class="maxPrice">14,000</h3> </div>
              </div>
            </div>
            <!--END PRICE RANGE-->
          </aside>
        </div>

        <div class="col overflow-auto h-100 py-5">
          <div class="cart-btn" style="position:fixed; right: 40px;z-index: 1000">
            <button type="button" title="Bestel eenvoudig & snel" class="button btn-cart">
              <span>
                <fa icon="cart-plus" />&nbsp;&nbsp;
                <span>
                  <router-link to="/cart">Go to cart</router-link>&nbsp;&nbsp;
                  <span class="badge badge-primary badge-pill" style="background: #5f9ea0;">{{ this.cart.length }}</span>
                </span>
              </span>
              <div class="spinner"></div>
            </button>
          </div>

          <!-- Products lists section -->
          <div class="products-lists">


            <!-- <div class="container">
              <div class="odd-header">
                <h3 class="h3">Trends</h3>
              </div>
              <div class="row">
                <div class="col-md-3 col-sm-6">
                  <div class="product-grid4">
                    <div class="product-image4">
                      <a href="#"> <img class="pic-1" src="https://picsum.photos/200/200"> <img class="pic-2" src="https://picsum.photos/200/200"> </a>
                      <ul class="social">
                        <li>
                          <a href="#" data-tip="Quick View">
                            <fa icon="camera" />
                          </a>
                        </li>
                        <li>
                          <a href="#" data-tip="Add to Wishlist">
                            <fa icon="shopping-bag" />
                          </a>
                        </li>
                        <li>
                          <a href="#" data-tip="Add to Cart">
                            <fa icon="cart-plus" />
                          </a>
                        </li>
                      </ul> <span class="product-new-label">New</span> <span class="product-discount-label">-10%</span> </div>
                    <div class="product-content">
                      <h3 class="title"><a href="#">Home decor wall sticker</a></h3>
                      <div class="price"> $14.40 <span>$16.00</span> </div> <a class="add-to-cart" href="">ADD TO CART</a> </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="product-grid4">
                    <div class="product-image4">
                      <a href="#"> <img class="pic-1" src="https://picsum.photos/200/200"> <img class="pic-2" src="https://picsum.photos/200/200"> </a>
                      <ul class="social">
                        <li>
                          <a href="#" data-tip="Quick View">
                            <fa icon="camera" />
                          </a>
                        </li>
                        <li>
                          <a href="#" data-tip="Add to Wishlist">
                            <fa icon="shopping-bag" />
                          </a>
                        </li>
                        <li>
                          <a href="#" data-tip="Add to Cart">
                            <fa icon="cart-plus" />
                          </a>
                        </li>
                      </ul> <span class="product-discount-label">-12%</span>
                    </div>
                    <div class="product-content">
                      <h3 class="title"><a href="#">Men's Blue Shirt</a></h3>
                      <div class="price"> $17.60 <span>$20.00</span>
                      </div> <a class="add-to-cart" href="">ADD TO CART</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="product-grid4">
                    <div class="product-image4">
                      <a href="#"> <img class="pic-1" src="https://picsum.photos/200/200"> <img class="pic-2" src="https://picsum.photos/200/200"> </a>
                      <ul class="social">
                        <li>
                          <a href="#" data-tip="Quick View">
                            <fa icon="camera" />
                          </a>
                        </li>
                        <li>
                          <a href="#" data-tip="Add to Wishlist">
                            <fa icon="shopping-bag" />
                          </a>
                        </li>
                        <li>
                          <a href="#" data-tip="Add to Cart">
                            <fa icon="cart-plus" />
                          </a>
                        </li>
                      </ul> <span class="product-new-label">New</span> <span class="product-discount-label">-10%</span> </div>
                    <div class="product-content">
                      <h3 class="title"><a href="#">Women's Black Top</a></h3>
                      <div class="price"> $14.40 <span>$16.00</span> </div> <a class="add-to-cart" href="">ADD TO CART</a> </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="product-grid4">
                    <div class="product-image4">
                      <a href="#"> <img class="pic-1" src="https://picsum.photos/200/200"> <img class="pic-2" src="https://picsum.photos/200/200"> </a>
                      <ul class="social">
                        <li>
                          <a href="#" data-tip="Quick View">
                            <fa icon="camera" />
                          </a>
                        </li>
                        <li>
                          <a href="#" data-tip="Add to Wishlist">
                            <fa icon="shopping-bag" />
                          </a>
                        </li>
                        <li>
                          <a href="#" data-tip="Add to Cart">
                            <fa icon="cart-plus" />
                          </a>
                        </li>
                      </ul> <span class="product-new-label">New</span> <span class="product-discount-label">-10%</span> </div>
                    <div class="product-content">
                      <h3 class="title"><a href="#">Women's Black Top</a></h3>
                      <div class="price"> $14.40 <span>$16.00</span> </div> <a class="add-to-cart" href="">ADD TO CART</a> </div>
                  </div>
                </div>
              </div>
            </div>
            <hr> -->
            <div class="container">
              <div class="even-header">
                <h3 class="h3">Upcomming - Hover Effect</h3>
              </div>
              <div class="row">
                <Product v-for="product in products" :product="product" :key="product.id" />
              </div>
            </div>
            <hr>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="static-banner">
      <div class="tns-brands">
        <div id="brands-home" class="autoplay  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal">
          <div class="item tns-item"><img src="https://www.gobantes.cl/pub/media/wysiwyg/brands/Carrusel-01.jpg" title="Ekoline" /></div>
          <div class="item tns-item"><img src="https://www.gobantes.cl/pub/media/wysiwyg/brands/Carrusel-02.jpg" title="MJM" /></div>
          <div class="item tns-item"><img src="https://www.gobantes.cl/pub/media/wysiwyg/brands/Carrusel-03.jpg" title="Aparelec BCN" /></div>
          <div class="item tns-item"><img src="https://www.gobantes.cl/pub/media/wysiwyg/brands/Carrusel-04.jpg" title="bticino" /></div>
          <div class="item tns-item"><img src="https://www.gobantes.cl/pub/media/wysiwyg/brands/Carrusel-05.jpg" title="Whirlpower" /></div>
          <div class="item tns-item"><img src="https://www.gobantes.cl/pub/media/wysiwyg/brands/Carrusel-07.jpg" title="3M" /></div>
          <div class="item tns-item"><img src="https://www.gobantes.cl/pub/media/wysiwyg/brands/Carrusel-08.jpg" title="VS" /></div>
          <div class="item tns-item"><img src="https://www.gobantes.cl/pub/media/wysiwyg/brands/Carrusel-06.jpg" title="Eaton" /></div>
          <div class="item tns-item"><img src="https://www.gobantes.cl/pub/media/wysiwyg/brands/Carrusel-06.jpg" title="Schneider Electric" /></div>
          <div class="item tns-item"><img src="https://www.gobantes.cl/pub/media/wysiwyg/brands/Carrusel-06.jpg" title="Legrand" /></div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
    import Product from '../../components/shop/Product.vue'
    // import Cart from "../components/Cart.vue";

    import { computed } from 'vue'
    import { useStore } from 'vuex'
 
    export default {
        name: 'Shop',
        components: {
          Product
        },
        data() {
          return {
            active: 4 // zero-based slide
          }
        },
        setup() {
          const store = useStore();
          console.log('products views', store.state.cart)
          let products = computed(function () {
            return store.state.products
          })

          let cart = computed(function() {
            return store.state.cart
          })

          return {
            products,
            cart
          }
        },
    }
</script>

<style scoped>

/* Shop body start */
@import url(https://fonts.googleapis.com/css?family=Titillium+Web:400,200,300,600,700);
body {
  padding: 40px 0 0 0;
  font-family: 'Titillium Web', sans-serif;
  background: #efefef;
  color: rgb(177, 177, 177);
  padding: 20px 20px;
}

aside,
section {
  width: 244px;
  border-right: 1px solid rgba(51, 51, 51, 0.3);
  padding-right: 30px;
}

.left-side {width:250px; height:250px; background:#ddd; display:inline-block; float: left; position:sticky; top:50px;}

#topBar {
  height: 55px;
  border-bottom: 1px solid rgba(51, 51, 51, 0.3);
  padding: 8px 16px 0px 0px;
}

#topBar input {
  width:430px;
  float:left;
  clear: none;
}

#topBar select {
  max-width: 200px;
  /* float: right; */
}

#topBar .player-search {
  background-size: 14px 14px;
  background-position: 10px center;
  /* padding-left: 35px;
  width: 500px; */
}

.sortBy {
  float: right;
  /* width: 330px; */
}

.sortBy h4 {
  float: left;
  margin-top: 7px;
}

#specials,#priceRange,#sports,#type
{
  margin: 10px 0;
  position: relative;
  clear: both;
}

.value {
  display: none !important;
}

.bigHead {
  font-size: 1.2em;
  color: rgb(101, 101, 101);
  margin-top:0;
  padding-top: 15px;
}

h1 {
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 15px;
}

h2 {
  margin: 0;
   font-size: 1.3em;
}

h3 {
  font-size: 1.3em;
  margin-top: -5px;
}

h4 {
  color: #b1b1b1;
  font-size: 1.1em;
}

.results {
  color: #f4c015;
  font-weight: 600;
  font-size: 1.8em;
}

#sports h4,
#type h4 {
  font-size: 1.1em;
  display: inline-block;
  margin: 5px 10px;
  clear: none;
}

#sports .check-box,
#type .check-box {
  float: left;
}

.box1 {
  min-width: 120px;
  margin: 10px 0;
  clear: none;
  color: #b1b1b1;
}

#sports .box1 {
  float: left;
  margin: 4px 0;
}

.box2 {
  float: left;
  text-align: center;
  margin-right: 17px;
}

.clearMarg {
  margin: 15px 0;
}

#slider {}

.prices {
  margin: 0 auto;
}

.prices img {
  width: 25px;
  margin-right: 5px;
}

.minVal,
.maxVal {
  margin-top: 20px;
  background-size: 25px;
  padding: 5px 0 5px 25px;
}

.minVal img,
.maxVal img {
  width: 35px;
}

.minVal h3,
.maxVal h3 {
  float: right;
  clear: none;
  padding-left: 2px;
}

.minVal {
  float: left;
  clear: none;
}

.maxVal {
  float: right;
  clear: none;
}

.bump {
  margin-left: 25px;
  position: relative
}

.specBump {
  margin-left: 5px;
}

.ui-widget-header {
  background: #f4c015;
}

.ui-state-default,
.ui-widget-content .ui-state-default,
.ui-widget-header .ui-state-default {
  background: #656565;
}

.ui-widget-content {
  background: #ddd;
}

.ui-slider-handle:focus {
  outline: none;
}

.ui-slider-horizontal .ui-slider-handle {
  top: -.5em;
  margin-left: -.6em;
  height: 1.8em;
  width: 1.3em
}
/*CHECK BOXES*/
/* Checkmark style starts */

@-moz-keyframes dothabottomcheck {
  0% {
    height: 0;
  }
  100% {
    height: 15px;
  }
}

@-webkit-keyframes dothabottomcheck {
  0% {
    height: 0;
  }
  100% {
    height: 15px;
  }
}

@keyframes dothabottomcheck {
  0% {
    height: 0;
  }
  100% {
    height: 15px;
  }
}

@keyframes dothatopcheck {
  0% {
    height: 0;
  }
  50% {
    height: 0;
  }
  100% {
    height: 30px;
  }
}

@-webkit-keyframes dothatopcheck {
  0% {
    height: 0;
  }
  50% {
    height: 0;
  }
  100% {
    height: 30px;
  }
}

@-moz-keyframes dothatopcheck {
  0% {
    height: 0;
  }
  50% {
    height: 0;
  }
  100% {
    height: 30px;
  }
}

input[type=checkbox] {
  display: none;
}

.check-box {
  height: 30px;
  width: 30px;
  background-color: transparent;
  border: 2px solid #838383;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -moz-transition: border-color ease 0.2s;
  -o-transition: border-color ease 0.2s;
  -webkit-transition: border-color ease 0.2s;
  transition: border-color ease 0.2s;
  cursor: pointer;
}

.check-box:last-child,#specials ul li:last-child {
  /*margin-right: 0;*/
}

.check-box::before,
.check-box::after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  height: 0;
  width: 5px;
  background-color: #f4c015;
  display: inline-block;
  -moz-transform-origin: left top;
  -ms-transform-origin: left top;
  -o-transform-origin: left top;
  -webkit-transform-origin: left top;
  transform-origin: left top;
  border-radius: 2px;
  content: ' ';
  -webkit-transition: opacity ease .5;
  -moz-transition: opacity ease .5;
  transition: opacity ease .5;
}

.check-box::before {
  top: 20px;
  left: 15px;
  box-shadow: 0 0 0 3px #efefef;
  -moz-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

.check-box::after {
  top: 10px;
  left: 4px;
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

input[type=checkbox]:checked + .check-box,
.check-box.checked {
  border-color: #f4c015;
}

input[type=checkbox]:checked + .check-box::after,
.check-box.checked::after {
  height: 10px;
  -moz-animation: dothabottomcheck 0.2s ease 0s forwards;
  -o-animation: dothabottomcheck 0.2s ease 0s forwards;
  -webkit-animation: dothabottomcheck 0.2s ease 0s forwards;
  animation: dothabottomcheck 0.2s ease 0s forwards;
}

input[type=checkbox]:checked + .check-box::before,
.check-box.checked::before {
  height: 60px;
  -moz-animation: dothatopcheck 0.4s ease 0s forwards;
  -o-animation: dothatopcheck 0.4s ease 0s forwards;
  -webkit-animation: dothatopcheck 0.4s ease 0s forwards;
  animation: dothatopcheck 0.4s ease 0s forwards;
}

.grey {
  color: rgb(51, 51, 51) !important;
}
.fixed {
  position: fixed;
  top: 0;
  height: 55px;
  z-index: 1;
  width:100%;
}

/* Shop body End */

h3.h3 {
  text-align: center;
  margin: 1em;
  text-transform: capitalize;
  font-size: 1.7em;
}

button.btn-cart {
  border: none;
  background: #ff8100;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  padding: 8px 25px;
  font: 16px/30px 'Lato', sans-serif;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  box-shadow: inset 0px 2px 0px 0px rgba(255, 255, 255, 0.2);
  transition: all 0.2s;
}

button.btn-cart:after {
  content: "";
  display: block;
  width: 50px;
  height: 200px;
  position: absolute;
  -ms-transform: rotateZ(30deg);
  -webkit-transform: rotateZ(30deg);
  transform: rotateZ(30deg);
  left: -60px;
  top: -100px;
  opacity: 0.1;
  background: #ffffff;
}

button.btn-cart:hover:after {
  width: 100%;
  opacity: 0;
  transition: all 0.75s ease 0s;
}

button.btn-cart .fa {
  margin-right: 10px;
  font-size: 24px;
  line-height: 30px;
  vertical-align: baseline;
}

button.btn-cart .fa.fa-arrow-down {
  color: #ff8100;
  font-size: 10px;
  position: absolute;
  left: 9px;
  top: -12px;
  transition: all 0.75s ease 0s;
}

button.btn-cart:before {
  content: "";
  display: block;
  position: absolute;
  z-index: 0;
  height: 0%;
  left: 50%;
  top: 50%;
  background-color: #ffffff;
  width: 0%;
  opacity: 0.3;
  border-radius: 50%;
  -ms-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

button.btn-cart span {
  display: inline-block;
  position: relative;
  text-align: center;
  z-index: 1;
}

button.btn-cart:hover .fa.fa-arrow-down {
  top: -3px;
}

button.btn-cart:active:before {
  height: 350%;
  width: 90%;
  opacity: 0.0;
  transition: all 0.75s ease 0s;
}





/* Start */
.item.tns-item {
    float: left;
}
/* End */
</style>