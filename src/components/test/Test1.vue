<template>
    <div class="container">
        <h5>Test1 component</h5>
        <div class="login-form shadow-lg p-2 mb-5 mt-4 bg-body rounded">
            <label for="login-box" class="login-box">Login Box</label>
            <div class="login-form">
                <p v-if="loginFormError.length">
                    <b>Please correct the error</b>
                    <ul style="list-style-type:none;">
                        <li v-for="e in loginFormError" v-bind:key="e.id">
                            {{e}}
                        </li>
                    </ul>
                </p>
                <form @submit="login" class="login-form">
                    <input type="text" v-model="loginFormData.username" ref="inputRef" name="uname" id="uname" placeholder="Enter user name"><br><br>
                    <input type="password" v-model="loginFormData.password" name="password" id="name" placeholder="Enter password"><br><br>
                    <button>Login</button>
                </form>
            </div>
        </div>

        <div class="props shadow-lg p-2 mb-5 mt-4 bg-body rounded">
            <label for="login-box" class="login-box">Props pass - Parent to child</label>
            <h2>{{name}}</h2>
            <span>{{workName}}</span>
        </div>

        <!-- Immidiate and Deep Watchers -->
        <div class="mmidiate-watchers shadow-lg p-2 mb-5 mt-4 bg-body rounded">
            <label for="deep-watchers" class="deep-watchers">Deep watchers</label>
            <div class="deep-watchers">
                <input v-model="movie" type="text">
                <input v-model="movieInfo.title" type="text">
                <input v-model="movieInfo.actor" type="text">
            </div>
            <div class="watcher-array">
                <!-- Deep property is required in movieList for deep method-->
                <!-- <button @click="movieList.push('Wonder Women')">Add Movie</button> -->

                <!-- Deep property is not required in movieList as we return a new reference-->
                <button @click="movieList = movieList.concat(['Wonder Boy'])">Add Movie</button>
            </div>
        </div>

        <!-- Watchers -->
        <div class="watchers shadow-lg p-2 mb-5 mt-4 bg-body rounded">
            <h2>Volume Tracker</h2>
            <label for="watchers" class="login-box">Watchers</label>
            <div class="watchers">
                <div>
                    <h3>Current Volume - {{volume}}</h3>
                    <div class="btn-adjust">
                        <button @click="volume += 2">Increment</button>
                        <button @click="volume -= 2">Decrease</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Change name using Computed Setter -->
        <div class="computed-setter shadow-lg p-3 mb-5 mt-4 bg-body rounded">
            <div class="side" style="display: flex; float:right;">
                <span>Welcome - {{fullName}}</span><br>
                <button @click="changeFullName">Change full name</button>
            </div><br><br><br>
            <label for="products" class="products">Product list - using computed properties</label>
            <div class="products section">
                <button @click="productItems.push({id: 4, title: 'Keyboard', price: 50})">Add item</button>
                <h5>Products total(using computed property) - ${{getProductsTotalUsingComputedProperties}}</h5>

                <h5>Products total(using computed method) - {{getProductsTotalUsingComputedMethods()}}</h5>

                <!-- This input will show an example for cached computed properties and difference between computed propertis and computed methods-->
                <input type="text" v-model="country"><br>

                <!-- Computed Properties and v-for conditional rendering -->
                <span>Products having price greater than 100</span><br>
                <template v-for="item in productItems" :key="item.id">
                    <div v-if="item.price > 100" class="col-12 col-sm-8 col-md-6 col-lg-4" style="display: inline-flex">
                        <div class="card">
                            <div class="card-body">
                            <h4 class="card-title">{{item.title}}</h4>
                            <div class="buy d-flex justify-content-between align-items-center">
                                <div class="price text-success"><h5 class="mt-4">{{item.price}}$</h5></div>
                                <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </template>

                <!-- Using computed and v-for -->
                <div v-for="item in expensiveItems" :key="item.id" class="col-12 col-sm-8 col-md-6 col-lg-4" style="display: inline-flex">
                    <div class="card">
                        <div class="card-body">
                        <h4 class="card-title">{{item.title}}</h4>
                        <div class="buy d-flex justify-content-between align-items-center">
                            <div class="price text-success"><h5 class="mt-4">{{item.price}}$</h5></div>
                            <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Custom component Events -->
        <div class="component-event shadow-lg p-3 mb-5 mt-4 bg-body rounded">
            <button @click="showPopup = true">Show Popup</button>
            <!-- <Popup v-show="showPopup" @close="showPopup = false" /> -->
            <Popup v-show="showPopup" @close="closePopup" />

            <!-- Vue JS 3 Tutorial - 43 Modal with teleporting not working-->
            <!-- <button @click="showModal = true">Show Modal</button>
            <teleport to="#modal-root">
                <Modal v-show="showModal" @close="showModal = false">
                    This is the secret modal message!
                </Modal>
            </teleport> -->
        </div>

        <!-- Components and v-model -->
        <div class="component-vmodel shadow-lg p-3 mb-5 mt-4 bg-body rounded">
            <Input v-model="myName" />
            <h5 style="text-align: left">Bind input component to parent - {{myName}}</h5>
        </div>

        <!-- Usage of slots -->
        <div class="card-body shadow-lg p-3 mb-5 mt-4 bg-body rounded" style="display: flex; position: relative;">
            <div class="card-section">
                <Card></Card>
                <Card>Card content</Card>
                <Card><h2>card content</h2></Card>
                <Card><img src="https://picsum.photos/200/200" alt=""></Card>
            </div><br>
            
            <!-- Named slots -->
            <div class="named-slot">
                <Card>
                    <template v-slot:slot-header>
                        <h3>Header</h3>
                    </template>
                    
                    <template v-slot:default>
                        <img src="https://picsum.photos/200/200" alt="">
                    </template>

                    <template v-slot:slot-footer>
                        <button>View Details</button>
                    </template>
                </Card>
            </div>
        </div>

        <!-- Slots Props-->
        <div class="card-body shadow-lg p-3 mb-5 mt-4 bg-body rounded">
            <div class="slot-props">
                <NameList>
                    <template v-slot:default="slotProps">
                        {{slotProps.firstname}} {{slotProps.lastName}}
                    </template>
                </NameList>

                <NameList>
                    <template v-slot:default="slotProps">
                        {{slotProps.lastName}} {{slotProps.firstname}}
                    </template>
                </NameList>

                <NameList>
                    <template v-slot:default="slotProps">
                        {{slotProps.firstname}}
                    </template>
                </NameList>
            </div>
        </div>

        <!-- Vue JS 3 Tutorial - 41 - Dynamic Components -->
        <div class="dynamic component shadow-lg p-3 mb-5 mt-4 bg-body rounded">
            <div class="dynamic-component">
                <button @click="activeTab = 'TabA'">TAB A</button>
                <button @click="activeTab = 'TabB'">TAB B</button>
                <button @click="activeTab = 'TabC'">TAB C</button>

                <!-- <TabA v-if="activeTab === 'TabA'"/>
                <TabB v-if="activeTab === 'TabB'"/>
                <TabC v-if="activeTab === 'TabC'"/> -->

                <!-- Use this if we have multiple and lots of tabs -->
                <!-- Vue JS 3 Tutorial - 42 - Keeping Dynamic Components Alive -->
                <keep-alive>
                    <component :is="activeTab" />
                </keep-alive>
            </div>
        </div>
    </div>

    <template>
        <div class="dynamic component shadow-lg p-3 mb-5 mt-4 bg-body rounded">
            <teleport to="#portal-app">
                <portal />
            </teleport>
        </div>
    </template>

    
</template>

<script>
import Popup from '../test/Popup.vue'
import Input from '../test/Input.vue'
import Card from '../test/Card.vue'
import NameList from '../test/NameList.vue'
import TabA from '../test/TabComponent/TabA.vue'
import TabB from '../test/TabComponent/TabB.vue'
import TabC from '../test/TabComponent/TabC.vue'
import Portal from '../test/Portal.vue'
import Modal from '../test/Modal.vue'

export default {
    name: 'Test1',
    components: {
        Popup,
        Input,
        Card,
        NameList,
        TabA,
        TabB,
        TabC,
        Portal,
        Modal
    },
    props: ['name', 'workName'],
    mounted() {
        this.$refs.inputRef.focus()
    },
    computed: {
        fullName: {
            get() {
                return `${this.firstName} ${this.lastName}`
            },
            set(value) {
                const names = value.split(' ')
                this.firstName = names[0],
                this.lastName = names[1]
            }
        },

        getProductsTotalUsingComputedProperties() {
            // console.log('getProductsTotalUsingComputedProperties')
            return this.productItems.reduce((total, curr) => (total = total + curr.price), 0)
        },
        expensiveItems() {
            return this.productItems.filter(item => item.price > 100)
        }
    },
    methods: {
        login(e) {
            e.preventDefault()
            
            if(this.loginFormData.username && this.loginFormData.password) {
                console.log(this.loginFormData.username, this.loginFormData.password)
            }

            this.loginFormError = [];

            if(!this.loginFormData.username) {
                this.loginFormError.push('Username is required')
            }

            if(!this.loginFormData.password) {
                this.loginFormError.push('password is required')
            }

            console.log(this.loginFormError)
        },

        getProductsTotalUsingComputedMethods() {
            //This console is called on every page load and also if any new update(any events) in UI irespective with this current element
            // console.log('getProductsTotalUsingComputedMethods')
            return this.productItems.reduce((total, curr) => (total = total + curr.price), 0)
        },

        changeFullName() {
            this.fullName = 'Clark Kent'
        },

        closePopup(name) {
            this.showPopup = false
            console.log('name -', name)
        }
    },
    watch: {
        volume(newValue, oldvaue) {
            if(newValue > oldvaue && newValue === 16) {
                alert("You may have a high volume")
            }
        },
        movie: {
            // handler(newValue) {
            //     console.log('API called -', newValue)
            // },
            // immediate: true,
        },
        movieInfo: {
            handler(newValue) {
                console.log(`Calling Api with movie title = ${newValue.title} and actor = ${newValue.actor}`)
            },
            deep: true
        },
        movieList: {
            handler(newValue) {
                console.log(`Updated List ${newValue}`)
            },
            // deep: true
        }
    },
    data() {
        return {
            myName: '',
            firstName: 'Bappa',
            lastName: 'Dey',
            loginFormError: [],
            loginFormData: {
                username: '',
                password: ''
            },
            productItems: [
                {id: 1, title: 'iPhoneX', price: 100},
                {id: 2, title: 'Starlink seven', price: 200},
                {id: 3, title: 'station play', price: 100},
                {id: 4, title: 'primax game', price: 200},
                {id: 5, title: 'micro-station', price: 400},
            ],
            country: '',
            volume: 0,
            movie: 'Bappa',
            movieInfo: {
                title: '',
                actor: ''
            },
            movieList: ['Batman', 'Superman'],
            showPopup: false,
            activeTab: 'TabA',
            showModal: false,
        }
    }
}
</script>

<style scoped>
.container {
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
}

.content {
  max-width: 400px;
  position: relative;
}
</style>
