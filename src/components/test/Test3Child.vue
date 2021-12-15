<template>
    <div class="test3">
        <h4>Test3-Child of Test2 - {{username}}</h4>
    </div>
</template>

<script>
    export default {
        name: 'Test3Child',
        inject: ['username']
    }
</script>

<style scoped>

</style>