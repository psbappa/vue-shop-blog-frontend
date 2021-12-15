<template>
    <div class="budget-planner">
        <h4>Budget planner</h4>
        <div class="header-section mx-1 my-4">
            <button v-if="editing" @click="doEdit(false)" class="btn btn-danger">Cancel</button>
            <button v-else @click="doEdit(true)" class="btn btn-primary">Open Form</button>

            <div v-if="editing" class="form-body">
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BudgetPlanner',
        data() {
            return {
                editing: false
            }
        },
        methods: {
            doEdit(editing) {
                this.editing = editing
            }
        }
    }
</script>

<style scoped>

</style>