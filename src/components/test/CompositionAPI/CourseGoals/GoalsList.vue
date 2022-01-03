<template>
    <div class="goal-lists">
        <h4>Goal Lists</h4>
        <section class="container">
            <ul>
                <li v-for="goal in goals" :key="goal.id">{{ goal.text }}</li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        // name: 'GoalsList',
        props: ["goals"],
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        margin: 1rem 0;
        border: 1px solid #ccc;
    }
</style>