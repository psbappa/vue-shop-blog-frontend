<template>
    <div class="test">
        

        <div class="grid-system">
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="https://i.imgur.com/ccMhxvC.png" width="70">
                                <div class="d-flex flex-column ml-2"><span>Stripe</span><span class="text-black-50">Payment Services</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                            </div>
                            <h6>Get more context on your users with stripe data inside our platform.</h6>
                            <div class="d-flex justify-content-between install mt-3"><span>Installed 172 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="https://i.imgur.com/IpKQiNu.png" width="70">
                                <div class="d-flex flex-column ml-2"><span>Mailchimp</span><span class="text-black-50">Project Management</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                            </div>
                            <h6>Capture and sync subscribers from your mailchimp platform to ours with ease.</h6>
                            <div class="d-flex justify-content-between install mt-3"><span>Installed 1234 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="https://i.imgur.com/42SqVZd.png" width="70">
                                <div class="d-flex flex-column ml-2"><span>Dropbox</span><span class="text-black-50">File Management</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                            </div>
                            <h6>Use dropbox to sync your photos to our platform and share it with others.</h6>
                            <div class="d-flex justify-content-between install mt-3"><span>Installed 1234 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="https://i.imgur.com/lXEUCY8.png" width="70">
                                <div class="d-flex flex-column ml-2"><span>Shopify</span><span class="text-black-50">Ecommerce</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                            </div>
                            <h6>Sell you items with ease with having any website with our free platform</h6>
                            <div class="d-flex justify-content-between install mt-3"><span>Installed 1234 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="https://i.imgur.com/S2In5pz.png" width="70">
                                <div class="d-flex flex-column ml-2"><span>Atlassian</span><span class="text-black-50">Project management</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                            </div>
                            <h6>Developing products for developers,project managers and architects.</h6>
                            <div class="d-flex justify-content-between install mt-3"><span>Installed 345 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card p-3">
                            <div class="d-flex flex-row mb-3"><img src="https://i.imgur.com/S5oK3Oe.png" width="70">
                                <div class="d-flex flex-column ml-2"><span>Salesforce</span><span class="text-black-50">Project management</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                            </div>
                            <h6>Developing products for developers,project managers and architects.</h6>
                            <div class="d-flex justify-content-between install mt-3"><span>Installed 345 times</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="my-name">{{greet}} {{name}}</div>

        <!-- Binding text -->
        <div v-text="directiveText"></div>
        <!-- <div v-text="name">OverRide</div> -->          <!-- Gets error as v-text will override element children -->

        <!-- Binding Html -->
        <div v-html="bold"></div>
        <div v-html="hack"></div>

        <!-- Binding attributes -->
        <div v-bind:id="bindId">Heading</div>
        <button v-bind:disabled="isDisabled">Yes it is disabled</button>

        <!-- Binding classes -->
        <h2 class="underline">This is class binding</h2>
        <h2 class="underline" v-bind:class="status">Status with static underline class and status bind class</h2>

        <!-- Logical and operator to conditionnaly apply the promoted class only isPromoted is true -->
        <h2 v-bind:class="isPromoted && 'promotedMovie'">Promoted Movies</h2>
        <h2 v-bind:class="isSoldOut ? 'sold-out-movie' : 'new-movie'">Soldout? Movie</h2>
        
        <!-- Bind classes uses arrays or objects -->
        <!-- Bind using array -->
        <h2 v-bind:class="['new-movie', 'promotedMovie']">Newly Prometed Movie</h2>
        <h2 v-bind:class="[isPromoted &&  'promotedMovie', isSoldOut ? 'sold-out-movie' : 'new']">Array conditional movie - isPromoted and isSoldOut Movie</h2>

        <!-- Bind using Object -->
        <h2 v-bind:class="{
            promotedMovie: isPromoted,
            new: !isSoldOut,
            'sold-out-movie': isSoldOut
        }">Object conditional movie - isPromoted and isSoldOut Movie</h2>

        <!-- Bind Inline styles using Object syntax-->
        <h2 v-bind:style="{
            color: highlightColor
        }">Object conditional movie</h2>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            greet: 'this',
            name: 'js!',
            directiveText: 'Horray',
            bold: 'This is bold text',
            hack: `<a href="#" onclick="alert('You have been haked')">Win a prize</a>`,
            bindId: 'heading',
            isDisabled: true,
            status: 'danger',
            isPromoted: true,
            isSoldOut: true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ratings i {
    color: green
}

.install span {
    font-size: 12px
}

.col-md-4 {
    margin-top: 27px
}

.underline {
    text-decoration: underline;
}

.promotedMovie {
    font-style: italic;
}

.new-movie {
    color: olivedrab;
}

.sold-out-movie {
    color: red;
}

.highlightColor {
    color: orange;
}
</style>
