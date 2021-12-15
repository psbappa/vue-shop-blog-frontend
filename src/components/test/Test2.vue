<template>
    <div class="test2">
        <h4>Test2</h4>
        <Test3Child />
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import Test3Child from '../test/Test3Child.vue'

export default {
    name: 'Test2',
    components: {
        Test3Child
    }
}
</script>

<style scoped>

</style>