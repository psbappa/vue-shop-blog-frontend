<template>
    <div class="test2">
        <h4>Test2</h4>
        <!-- Mixins examples -->
        <!-- <button @click="incrementCounter">Clicked - {{count}} times</button>
        <h2 @click="incrementCounter">Hover {{count}} times</h2> -->
        <Test3Child />
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import Test3Child from '../test/Test3Child.vue'
// import CounterMixin from 'mixins/counter.js'

export default {
    name: 'Test2',
    // mixins: [CounterMixin],
    components: {
        Test3Child
    }
}
</script>

<style scoped>

</style>