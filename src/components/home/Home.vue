<template>
    <div class="home">
        <Navbar />
        
        <h1 style="color: purple">Home title - {{ backgroundColor }}</h1>
        <h4>username - {{name}}</h4>
        <div class="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <Test2 />
                    </div>
                    <div class="col-md-6">
                        Bappa
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-sm-6">
                    <Test id="test-component-head-tag" @changeBackgroundColor="updatebackgroundColor($event)" title="Passed from parent to child!" />
                </div>
                <div class="col-sm-6">
                    <Test1 :name="name" :work-name="channel" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../templates/Navbar.vue'
import Test from '../test/Test.vue'
import Test1 from '../test/Test1.vue'
import Test2 from '../test/Test2.vue'

export default {
    name: 'Home',
    components: {
        Navbar,
        Test,
        Test1,
        Test2
    },
    data() {
        return {
            name: 'Renew',
            channel: 'ppt',
            backgroundColor: 'default'
        }
    },
    methods: {
        updatebackgroundColor(backgroundColor) {
            this.backgroundColor = backgroundColor
        }
    },
    provide() {
        return {
            username: this.name
        }
    }
}
</script>

<style scoped>

</style>