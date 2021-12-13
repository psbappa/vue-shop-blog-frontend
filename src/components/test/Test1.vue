<template>
    <div class="container">
        Life cycles...
        <div class="login-form shadow-lg p-3 mb-5 mt-4 bg-body rounded">
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
                    <input type="text" v-model="loginFormData.username" name="uname" id="uname" placeholder="Enter user name"><br><br>
                    <input type="password" v-model="loginFormData.password" name="password" id="name" placeholder="Enter password"><br><br>
                    <button>Login</button>
                </form>
            </div>
        </div>

        <div class="login-form shadow-lg p-3 mb-5 mt-4 bg-body rounded">
            <label for="products" class="products">Product list - using computed properties</label>
            <div class="products section">
                <button @click="productItems.push({id: 4, title: 'Keyboard', price: 50})">Add item</button>
                <h2>Total - ${{productsTotal}}</h2>
            </div>
        </div>
    </div>   
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    name: 'Test1',
    computed: {
        productsTotal() {
            return this.productItems.reduce((total, curr) => (total = total + curr.price), 0)
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

        getTotal() {
            return this.productItems.reduce((total, curr) => (total = total + curr.price), 0)
        }
    },
    data() {
        return {
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
                {id: 5, title: 'micro-station', price: 200},
            ]
        }
    },
    beforeCreate: function() {
        console.log('Before Created')
    },
    created: function() {
        console.log('Created')
    },
    beforeMount: function() {
        console.log('Before mount')
    },
    mounted: function() {
        console.log('Mount')
    }
}
</script>
