<template>
    <div class="parent-test-component">
        <h1 style="color: purple">Testy title - {{ backgroundColor }}</h1>

        <div class="refs-section">
            <div class="row">
              <div class="column" style="background-color:#e3c7c9;">
                <Data />
              </div>
              <div class="column" style="background-color:#b4c571;">
                <CourseGoals />
              </div>
            </div>
        </div>

        <div class="axios-api-section">
            <div class="row">
              <div class="column" style="background-color:#aaa;">
                <HttpGetRequest />
              </div>
              <div class="column" style="background-color:#bbb;">
                <HttpPostRequest />
              </div>
            </div>
        </div>

        <div class="main">
            <hr><br>
            <div class="my-container">
                <div class="row">
                    <div class="col-md-6" style="background-color: #74a7a9;">
                        <Test2 />
                    </div>
                    <div class="col-md-6" style="background-color: #482866;">
                        <button @click="showChildLifeCycle = !showChildLifeCycle">Toggle Child Life Cycle</button>
                        <LifeCycle v-if="showChildLifeCycle"/>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-sm-6">
                    <Test id="test-component-head-tag" @changeBackgroundColor="updatebackgroundColor($event)" title="Passed from parent to child!" />
                    
                    <h4>username - {{name}}</h4>
                </div>
                <div class="col-sm-6">
                    <Test1 :name="name" :work-name="channel" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Test from '../test/Test.vue'
    import Test1 from '../test/Test1.vue'
    import Test2 from '../test/Test2.vue'
    import HttpGetRequest from '../test/Axios/HttpGetRequest.vue'
    import HttpPostRequest from '../test/Axios/HttpPostRequest.vue'
    import LifeCycle from '../test/LifeCycle.vue'
    import Data from '../test/CompositionAPI/Data.vue'
    import CourseGoals from './CompositionAPI/CourseGoals/CourseGoals.vue'

    export default {
        name: 'ParentTest',
            components: {
            Test,
            Test1,
            Test2,
            HttpGetRequest,
            HttpPostRequest,
            LifeCycle,
            Data,
            CourseGoals
        },
        data() {
            return {
                name: 'Renew',
                channel: 'ppt',
                backgroundColor: 'default',
                showChildLifeCycle: true
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
        },
        // beforeCreate: function() {
        //     console.log('Parent Life Cycle - Before Created')
        // },
        // created: function() {
        //     console.log('Parent Life Cycle - Created')
        // },
        // beforeMount: function() {
        //     console.log('Parent Life Cycle - Before mount')
        // },
        // mounted: function() {
        //     console.log('Parent Life Cycle - Mount')
        // },
        // beforeUpdate() {
        //     console.log('Parent Life Cycle - beforeUpdate')
        // },
        // updated() {
        //     console.log('Parent Life Cycle - updated')
        // },
        // beforeUnmount() {
        //     console.log('Parent Life Cycle - beforeUnmount')
        // },
        // unmounted() {
        //     console.log('Parent Life Cycle - unmounted')
        // }
    }
</script>

<style scoped>
/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  padding: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>