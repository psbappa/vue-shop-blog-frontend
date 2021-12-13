<template>
    <div class="test">
        <div class="container my-5 bg-warning simple-binds mt-n1">
            <ul class="list-group">
                <li class="list-group-item">
                    <button type="button" @click="onBackgroundChange">Update Title</button>
                    <div class="my-name text-success">{{greet}} {{name}}</div>
                    <div class="props-calling">This is called from parent to child as a props - {{appname}}</div>
                </li>
                
                <li class="list-group-item">
                    <!-- Binding text -->
                    <div v-text="directiveText"></div>
                    <!-- <div v-text="name">OverRide</div> -->          <!-- Gets error as v-text will override element children -->
                </li>
                <li class="list-group-item">
                    <!-- Binding Html -->
                    <div v-html="bold"></div>
                    <div v-html="hack"></div>
                </li>
                <li class="list-group-item">
                    <!-- Binding attributes -->
                    <div v-bind:id="bindId">Heading</div>
                    <button v-bind:disabled="isDisabled">Yes it is disabled</button>
                </li>
                <li class="list-group-item">
                    <!-- Binding classes -->
                    <h4 class="underline">This is class binding</h4>
                    <h5 class="underline" v-bind:class="status">Status with static underline class and status bind class</h5>
                </li>
                <li class="list-group-item">
                    <!-- Logical and operator to conditionnaly apply the promoted class only isPromoted is true -->
                    <h4 v-bind:class="isPromoted && 'promotedMovie'">Promoted Movies</h4>
                    <h4 v-bind:class="isSoldOut ? 'sold-out-movie' : 'new-movie'">Soldout? Movie</h4>
                </li>

                <li class="list-group-item">
                    <!-- Bind classes uses arrays or objects -->
                    <!-- Bind using array -->
                    <h4 v-bind:class="['new-movie', 'promotedMovie']">Newly Prometed Movie</h4>
                    <h4 v-bind:class="[isPromoted &&  'promotedMovie', isSoldOut ? 'sold-out-movie' : 'new']">Array conditional movie - isPromoted and isSoldOut Movie</h4>

                </li>

                <li class="list-group-item">
                    <!-- Bind using Object -->
                    <h4 v-bind:class="{
                        promotedMovie: isPromoted,
                        new: !isSoldOut,
                        'sold-out-movie': isSoldOut
                    }">Object conditional movie - isPromoted and isSoldOut Movie</h4>
                </li>

                <li class="list-group-item">
                    <!-- Bind Inline styles using Object syntax-->
                    <h4>Object conditional movie color</h4>
                </li>

                <li class="list-group-item">
                    <div class="header">
                        <button v-if="editing" @click="doEdit(false)" class="btn btn-danger">Cancel</button>
                        <button v-else @click="doEdit(true)" class="btn btn-primary">Open Form</button>
                    </div>
                    <div v-if="editing" class="shop-list">
                        <div class="shadow-lg p-3 mb-5 bg-body rounded">
                            <h3>Shopping List</h3>
                            <input 
                                v-on:keyup.enter="items_array.push({id: items_array.length +1, label: newItem})"
                                type="text" v-model="newItem" placeholder="Enter here to add new Item">
                                <p class="counter">{{characterCount}}/10</p>
                            
                            <button 
                                v-bind:disabled="newItem.length == 0"
                                v-on:click="items_array.push({id:items_array.length + 1, label: newItem})"
                                class="btn btn-primary me-md-2">
                                Add Item
                            </button>
                            <a v-bind:href="newItem">Dynamic Link</a>

                            <br>{{newItem}}<br>

                            <strong>Priority</strong>
                            <label><input type="radio" v-model="newItemPriority" value="high">High</label>
                            <label><input type="radio" v-model="newItemPriority" value="low">Low</label> |

                            
                            <select v-model="newItemPriority">
                                <option value="high">High</option>
                                <option value="low">low</option>
                            </select> |
                            {{newItemPriority}}<br><br>

                            <!-- <strong>Switch</strong>    
                            <label><input name="change_bg" @change="onBackgroundChange($event)" type="radio" v-model="isChangeBackGroundColor" value="contrast">Contrast</label>
                            <label><input name="change_bg" @change="onBackgroundChange($event)" type="radio" v-model="isChangeBackGroundColor" value="dark">Dark</label> |
                            {{isChangeBackGroundColor}}<br><br> -->

                            <div v-if="items_array.length == 0" class="condition-rendering text-danger bg-warning">
                                You have no array items in your cart
                            </div>

                            <!-- List rendering -->
                            <div 
                                v-for="(item, index) in items_array" 
                                :key="item.id"
                                class="bg-success"
                                :class="[
                                    item.purchased ? 'strikeout text-info' : 'underlined',
                                    item.highPriority ? 'priority' : ''
                                ]"
                            >
                                {{index}}. {{item.id}}. {{item.label}}
                            </div>
                            
                            <div v-for="(item, key) in items_object" :key="item.id" class="bg-secondary">
                                {{key}}. {{key.id}} {{item.label}}
                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-group-item">
                    <div class="form-control">
                        Form Control
                        <div class="display-section">
                            <pre>
                                {{ JSON.stringify(formValues, null, 2) }}
                            </pre>

                            <h3>Contact Form</h3>

                            <div class="container">
                            <form @submit="submitForm">
                                <label for="fname">First Name</label>
                                <input v-model="formValues.name" type="text" id="fname" name="firstname" placeholder="Your name..">

                                <label for="country">Country</label>
                                    <select v-model="formValues.country" id="country" name="country">
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                </select>

                                <label for="job-location">Job Location</label>
                                    <select multiple v-model="formValues.jobLocation" id="job-location" name="job-location">
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                </select>

                                <div class="remote-work">
                                    <input 
                                        v-model="formValues.remoteWork" 
                                        true-value="yes" 
                                        false-value="no" 
                                        type="checkbox" 
                                        id="remoteWork">
                                    <label for="remoteWork">Open to remote work?</label>
                                </div>

                                <div class="skill-set">
                                    <label for="skill-set">Skill set</label>
                                    <input v-model="formValues.skillSet" type="checkbox" id="html" value="html" />
                                    <label for="html">HTML</label>
                                    <input v-model="formValues.skillSet" type="checkbox" id="css" value="css" />
                                    <label for="css">CSS</label>
                                    <input v-model="formValues.skillSet" type="checkbox" id="javascript" value="javascript" />
                                    <label for="javascript">JavaScript</label>
                                </div>

                                <label for="subject">Subject</label>
                                <textarea v-model="formValues.subject" id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

                                <button>Submit Form</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-group-item">
                    
                </li>
            </ul>
        </div>

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
    </div>
</template>

<script>
export default {
    name: 'Test',
    props: ['appname'],
    computed: {
        reversedItems() {
            return [...this.items].reverse()
        },
        characterCount() {
            return this.newItem.length
        }
    },
    methods: {
        submitForm(event) {
            event.preventDefault()
            console.log('Form Values', this.formValues)
        },
        
        doEdit(editing){
            this.editing = editing
            this.newItem = ""
        },

        onBackgroundChange() {
            // console.log('Testing')
            this.$emit('changeBackgroundColor', 'Child to parent using props');
          }
    },
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
            isSoldOut: true,
            // Items in array format
            items_array : [
               {id: 1, label: '10 Party level array', purchased: true, highPriority: true},
               {id: 2, label: '20 Party level array', purchased: false, highPriority: true},
               {id: 3, label: '30 Party level array', purchased: true, highPriority: false},
            ],

            // Items in object format
            items_object : {
               'item-1': {id: 1, label: '10 Party level object'},
               'item-2': {id: 2, label: '20 Party level object'},
               'item-3': {id: 3, label: '30 Party level object'},
            },

            newItem: '',
            newItemPriority: 'low',
            newItemHighPriority: false,
            isChangeBackGroundColor: false,
            iceCreamFlavours: [],
            editing: false,
            formValues: {
                name: '',
                country: '',
                jobLocation: '',
                remoteWork: "no",
                skillSet: [],
                subject: ''
            }
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


.switchBackgroundColor {
    background-color: rgb(43, 38, 38);
}

.priority {
    color: rgb(160, 160, 9);
}

/* Form Section start*/
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
/* Form section Ends */
</style>
