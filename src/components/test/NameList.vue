<template>
    <div class="name-list">
        <h4 v-for="name in names" :key="name.firstName">
            <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
        </h4>
    </div>
</template>

<script>
    export default {
        name: 'NameList',
        data() {
            return {
                names: [
                    {firstName: 'Bappa', lastName: 'Dey'},
                    {firstName: 'Peter', lastName: 'Charlie'},
                    {firstName: 'Mark', lastName: 'wilkinson'},
                    {firstName: 'Antony', lastName: 'Selves'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>