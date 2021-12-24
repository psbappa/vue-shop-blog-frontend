<template>
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

        <div class="container-fluid h-100 left-sidebar">
            <div class="row h-100">
                <div class="col-3" style="width: 19% !important; height: 100%;">
                    <aside id="filters left-side">
                        <h1 class="bigHead">FILTER SHOP ITEMS</h1>
                        <h2 class="bump"><span class="results">37</span> Results Found</h2>

                        <div id="type">
                            <h1>TYPE</h1>
                            <div class="bump">
                            <div class="box1">
                                <input type="checkbox" id="clothing">
                                <label for="clothing" class="check-box"></label>
                                <h4>Clothing</h4>
                            </div>
                            <div class="box1">
                                <input type="checkbox" id="equipment">
                                <label for="equipment" class="check-box"></label>
                                <h4>Equipment</h4>
                            </div>
                            <div class="box1">
                                <input type="checkbox" id="trips">
                                <label for="trips" class="check-box"></label>
                                <h4>Trips/Tickets</h4>
                            </div>
                            <div class="box1">
                                <input type="checkbox" id="social">
                                <label for="social" class="check-box"></label>
                                <h4>Social Media</h4>
                            </div>
                            <div class="box1">
                                <input type="checkbox" id="profile">
                                <label for="profile" class="check-box"></label>
                                <h4>Profile Perks</h4>
                            </div>
                            </div>
                        </div>

                        <div id="sports" class="clearfix">
                            <h1>SPORT</h1>
                            <div class="bump">
                            <div class="box1">
                                <input type="checkbox" id="nfl">
                                <label for="nfl" class="check-box"></label>
                                <h4>NFL</h4>
                            </div>
                            <div class="box1">
                                <input type="checkbox" id="mlb">
                                <label for="mlb" class="check-box"></label>
                                <h4>PGA</h4>
                            </div>
                            <div class="box1">
                                <input type="checkbox" id="pga">
                                <label for="pga" class="check-box"></label>
                                <h4>MLB</h4>
                            </div>
                            <div class="box1">
                                <input type="checkbox" id="esports">
                                <label for="esports" class="check-box"></label>
                                <h4 class="clearMarg">E-SPORTS</h4>
                            </div>
                            </div>
                        </div>


                        <div id="specials" class="clearfix">
                            <h1>SPECIALS</h1>
                            <div class="specBump">
                            <div class="box2">
                                <input type="checkbox" id="onSale">
                                <label for="onSale" class="check-box"></label>
                                <h4>ON SALE</h4>
                            </div>
                            <div class="box2">
                                <input type="checkbox" id="newest">
                                <label for="newest" class="check-box"></label>
                                <h4>NEWEST</h4>
                            </div>
                            <div class="box2">
                                <input type="checkbox" id="featured">
                                <label for="featured" class="check-box"></label>
                                <h4>FEATURED</h4>
                            </div>
                            </div>
                        </div>
                        <!--END SPECIALS RANGE -->


                        <div id="priceRange" class="clearfix">
                            <h1>PRICE RANGE</h1>
                            <div class="bump">
                            <div id="slider"></div>

                            <div class="minVal">
                                <h3 class="minPrice">1,300</h3>
                            </div>

                            <div class="maxVal">
                                <h3 class="maxPrice">14,000</h3>
                            </div>
                            </div>
                        </div>
                        <!--END PRICE RANGE-->
                    </aside>
                </div>
                <div class="col overflow-auto h-100 py-5">
                    <div class="products-lists">
                        <div class="container">
                            <div class="odd">
                                <h3 class="h3">Trends</h3>
                            </div>
                            <div class="row">
                                <div class="col-md-3 col-sm-6">
                                    <div class="product-grid4">
                                        <div class="product-image4">
                                            <a href="#">
                                                <img class="pic-1" src="https://picsum.photos/200/200">
                                                <img class="pic-2" src="https://picsum.photos/200/200">
                                            </a>
                                            <ul class="social">
                                                <li><a href="#" data-tip="Quick View"><fa icon="camera" /></a></li>
                                                <li><a href="#" data-tip="Add to Wishlist"><fa icon="shopping-bag" /></a></li>
                                                <li><a href="#" data-tip="Add to Cart"><fa icon="cart-plus" /></a></li>
                                            </ul>
                                            <span class="product-new-label">New</span>
                                            <span class="product-discount-label">-10%</span>
                                        </div>
                                        <div class="product-content">
                                            <h3 class="title"><a href="#">Women's Black Top</a></h3>
                                            <div class="price">
                                                $14.40
                                                <span>$16.00</span>
                                            </div>
                                            <a class="add-to-cart" href="">ADD TO CART</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="product-grid4">
                                        <div class="product-image4">
                                            <a href="#">
                                                <img class="pic-1" src="https://picsum.photos/200/200">
                                                <img class="pic-2" src="https://picsum.photos/200/200">
                                            </a>
                                            <ul class="social">
                                                <li><a href="#" data-tip="Quick View"><fa icon="camera" /></a></li>
                                                <li><a href="#" data-tip="Add to Wishlist"><fa icon="shopping-bag" /></a></li>
                                                <li><a href="#" data-tip="Add to Cart"><fa icon="cart-plus" /></a></li>
                                            </ul>
                                            <span class="product-discount-label">-12%</span>
                                        </div>
                                        <div class="product-content">
                                            <h3 class="title"><a href="#">Men's Blue Shirt</a></h3>
                                            <div class="price">
                                                $17.60
                                                <span>$20.00</span>
                                            </div>
                                            <a class="add-to-cart" href="">ADD TO CART</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="product-grid4">
                                        <div class="product-image4">
                                            <a href="#">
                                                <img class="pic-1" src="https://picsum.photos/200/200">
                                                <img class="pic-2" src="https://picsum.photos/200/200">
                                            </a>
                                            <ul class="social">
                                                <li><a href="#" data-tip="Quick View"><fa icon="camera" /></a></li>
                                                <li><a href="#" data-tip="Add to Wishlist"><fa icon="shopping-bag" /></a></li>
                                                <li><a href="#" data-tip="Add to Cart"><fa icon="cart-plus" /></a></li>
                                            </ul>
                                            <span class="product-new-label">New</span>
                                            <span class="product-discount-label">-10%</span>
                                        </div>
                                        <div class="product-content">
                                            <h3 class="title"><a href="#">Women's Black Top</a></h3>
                                            <div class="price">
                                                $14.40
                                                <span>$16.00</span>
                                            </div>
                                            <a class="add-to-cart" href="">ADD TO CART</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="product-grid4">
                                        <div class="product-image4">
                                            <a href="#">
                                                <img class="pic-1" src="https://picsum.photos/200/200">
                                                <img class="pic-2" src="https://picsum.photos/200/200">
                                            </a>
                                            <ul class="social">
                                                <li><a href="#" data-tip="Quick View"><fa icon="camera" /></a></li>
                                                <li><a href="#" data-tip="Add to Wishlist"><fa icon="shopping-bag" /></a></li>
                                                <li><a href="#" data-tip="Add to Cart"><fa icon="cart-plus" /></a></li>
                                            </ul>
                                            <span class="product-new-label">New</span>
                                            <span class="product-discount-label">-10%</span>
                                        </div>
                                        <div class="product-content">
                                            <h3 class="title"><a href="#">Women's Black Top</a></h3>
                                            <div class="price">
                                                $14.40
                                                <span>$16.00</span>
                                            </div>
                                            <a class="add-to-cart" href="">ADD TO CART</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>

                        <div class="container">
                            <div class="odd">
                                <h3 class="h3">Upcomming</h3>
                            </div>
                            <div class="row">
                                <div class="col-md-3 col-sm-6">
                                    <div class="product-grid6">
                                        <div class="product-image6">
                                            <a href="#">
                                                <img class="pic-1" src="https://picsum.photos/200/200">
                                            </a>
                                        </div>
                                        <div class="product-content">
                                            <h3 class="title"><a href="#">Men's Shirt</a></h3>
                                            <div class="price">$11.00
                                                <span>$14.00</span>
                                            </div>
                                        </div>
                                        <ul class="social">
                                            <li><a href="" data-tip="Quick View"><fa icon="eye" /></a></li>
                                            <li><a href="" data-tip="Add to Wishlist"><fa icon="shopping-bag" /></a></li>
                                            <li><a href="" data-tip="Add to Cart"><fa icon="cart-plus" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="product-grid6">
                                        <div class="product-image6">
                                            <a href="#">
                                                <img class="pic-1" src="https://picsum.photos/200/200">
                                            </a>
                                        </div>
                                        <div class="product-content">
                                            <h3 class="title"><a href="#">Women's Red Top</a></h3>
                                            <div class="price">$8.00
                                                <span>$12.00</span>
                                            </div>
                                        </div>
                                        <ul class="social">
                                            <li><a href="" data-tip="Quick View"><fa icon="eye" /></a></li>
                                            <li><a href="" data-tip="Add to Wishlist"><fa icon="shopping-bag" /></a></li>
                                            <li><a href="" data-tip="Add to Cart"><fa icon="cart-plus" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="product-grid6">
                                        <div class="product-image6">
                                            <a href="#">
                                                <img class="pic-1" src="https://picsum.photos/200/200">
                                            </a>
                                        </div>
                                        <div class="product-content">
                                            <h3 class="title"><a href="#">Men's Shirt</a></h3>
                                            <div class="price">$11.00
                                                <span>$14.00</span>
                                            </div>
                                        </div>
                                        <ul class="social">
                                            <li><a href="" data-tip="Quick View"><fa icon="eye" /></a></li>
                                            <li><a href="" data-tip="Add to Wishlist"><fa icon="shopping-bag" /></a></li>
                                            <li><a href="" data-tip="Add to Cart"><fa icon="cart-plus" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <div class="product-grid6">
                                        <div class="product-image6">
                                            <a href="#">
                                                <img class="pic-1" src="https://picsum.photos/200/200">
                                            </a>
                                        </div>
                                        <div class="product-content">
                                            <h3 class="title"><a href="#">Men's Shirt</a></h3>
                                            <div class="price">$11.00
                                                <span>$14.00</span>
                                            </div>
                                        </div>
                                        <ul class="social">
                                            <li><a href="" data-tip="Quick View"><fa icon="eye" /></a></li>
                                            <li><a href="" data-tip="Add to Wishlist"><fa icon="shopping-bag" /></a></li>
                                            <li><a href="" data-tip="Add to Cart"><fa icon="cart-plus" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Shop'
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
  background: #fff url("//d1g3fc5n8s9pjg.cloudfront.net/img/icons/util/search.svg") no-repeat;
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
  background: url("//d1g3fc5n8s9pjg.cloudfront.net/img/icons/user/ticket-gold.svg") no-repeat;
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

/********************* Shopping Demo-4 **********************/
.product-grid4 {
  position: relative;
  font-family: Poppins, sans-serif;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease 0s;
}
.product-grid4 .product-image4 {
  position: relative;
}
.product-grid4:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.product-grid4 .product-image4 a {
  display: block;
}
.product-grid4 .product-image4 img {
  width: 100%;
  height: auto;
}
.product-grid4 .pic-1 {
  opacity: 1;
  transition: all 0.5s ease-out 0s;
}
.product-grid4:hover .pic-1 {
  opacity: 0;
}
.product-grid4 .pic-2 {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.5s ease-out 0s;
}
.product-grid4:hover .pic-2 {
  opacity: 1;
}
.product-grid4 .social {
  width: 180px;
  padding: 0;
  margin: 0 auto;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease 0s;
}
.product-grid4 .social li {
  display: inline-block;
  opacity: 0;
  transition: all 0.7s;
}
.product-grid4 .social li:nth-child(1) {
  transition-delay: 0.15s;
}
.product-grid4 .social li:nth-child(2) {
  transition-delay: 0.3s;
}
.product-grid4 .social li:nth-child(3) {
  transition-delay: 0.45s;
}
.product-grid4:hover .social li {
  opacity: 1;
}
.product-grid4 .social li a {
  color: #222;
  background: #fff;
  font-size: 17px;
  line-height: 36px;
  width: 40px;
  height: 36px;
  border-radius: 2px;
  margin: 0 5px;
  display: block;
  transition: all 0.3s ease 0s;
}
.product-grid4 .social li a:hover {
  color: #fff;
  background: #16a085;
}
.product-grid4 .social li a:after, .product-grid4 .social li a:before {
  content: attr(data-tip);
  color: #fff;
  background-color: #000;
  font-size: 12px;
  line-height: 20px;
  border-radius: 3px;
  padding: 0 5px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
  top: -30px;
}
.product-grid4 .social li a:after {
  content: "";
  height: 15px;
  width: 15px;
  border-radius: 0;
  transform: translateX(-50%) rotate(45deg);
  top: -22px;
  z-index: -1;
}
.product-grid4 .social li a:hover:after, .product-grid4 .social li a:hover:before {
  opacity: 1;
}
.product-grid4 .product-discount-label, .product-grid4 .product-new-label {
  color: #fff;
  background-color: #16a085;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 45px;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  position: absolute;
  left: 10px;
  top: 15px;
  transition: all 0.3s;
}
.product-grid4 .product-discount-label {
  left: auto;
  right: 10px;
  background-color: #d7292a;
}
.product-grid4:hover .product-new-label {
  opacity: 0;
}
.product-grid4 .product-content {
  padding: 25px;
}
.product-grid4 .title {
  font-size: 15px;
  font-weight: 400;
  text-transform: capitalize;
  margin: 0 0 7px;
  transition: all 0.3s ease 0s;
}
.product-grid4 .title a {
  color: #222;
}
.product-grid4 .title a:hover {
  color: #16a085;
}
.product-grid4 .price {
  color: #16a085;
  font-size: 17px;
  font-weight: 700;
  margin: 0 2px 15px 0;
  display: block;
}
.product-grid4 .price span {
  color: #909090;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0;
  text-decoration: line-through;
  text-align: left;
  vertical-align: middle;
  display: inline-block;
}
.product-grid4 .add-to-cart {
  border: 1px solid #e5e5e5;
  display: inline-block;
  padding: 10px 20px;
  color: #888;
  font-weight: 600;
  font-size: 14px;
  border-radius: 4px;
  transition: all 0.3s;
}
.product-grid4:hover .add-to-cart {
  border: 1px solid transparent;
  background: #16a085;
  color: #fff;
}
.product-grid4 .add-to-cart:hover {
  background-color: #505050;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

@media only screen and (max-width: 990px) {
  .product-grid4 {
    margin-bottom: 30px;
  }
}
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