<template>
    <div class="budget-planner">
        <div class="header-section" style="background-color: #86d393">
            <div class="budget-header-section py-3">
                <h2>Budget App </h2>
                <button v-if="editing" @click="toggleBudget(false)" class="btn btn-danger">Close Budget</button>
                <button v-else @click="toggleBudget(true)" class="btn btn-primary">Open Budget</button>
            </div>
            <div v-if="editing" class="body-section" style="width: 100%; display: table; background: #b3946f">
                <div style="display: table-row; height: 100px;">
                    <!-- Left side - Add Edit Form -->
                    <div style="width: 42%; display: table-cell; padding: 1rem;">
                        <div class="form-body">
                            <form @submit.prevent="submitAddEditForm" novalidate class="budget-add-edit" action="">
                                <div class="add-category" style="display: table">
                                    <!-- Add category Section -->
                                    <div class="element add-category input-section">
                                        <div class="add-category-input">
                                            <input type="text" v-model="addedNewCategory" ref="clearTextRef" placeholder="Enter here to add new category"/>
                                        </div>
                                    </div>
                                    
                                    <div class="element add-category-submit-btn">
                                        <button 
                                            v-bind:disabled="addedNewCategory.length == 0"
                                            @click="addCategory"
                                            class="btn btn-primary me-md-2" style="height: 50px;">
                                            Add Category
                                        </button>

                                        <button
                                            class="btn btn-primary me-md-2 toggle-text" style="height: 50px;">
                                            Toggle Add category
                                        </button>
                                    </div>


                                    <!-- Edit category section -->
                                    <div class="edit-section">
                                        <div class="element add-category input-section">
                                            <div class="edit-category-input">
                                                <input type="text" v-model="selectedCategoryValue"/>
                                            </div>
                                        </div>
                                        
                                        <div class="element add-category-submit-btn">
                                            <button
                                                v-bind:disabled="selectedCategoryValue.length == 0"
                                                @click="updateCategory(expensesDataInTable)"
                                                class="btn btn-primary me-md-2" style="height: 50px;">
                                                Edit Category
                                            </button>

                                            <button
                                                class="btn btn-primary me-md-2 toggle-text" style="height: 50px;">
                                                Toggle Edit category
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="drop-down-section" style="display: flex; width: 35%">
                                    <select v-model="selectedCategoryValue" @change="changeCategory($event)">
                                        <option v-for="category in defaultCategories" v-bind:value="category.key" :key="category.key">
                                            {{ category.value }}
                                        </option>
                                    </select>
                                </div>
                                <!-- <button>Submit Form</button> -->
                            </form>
                        </div>
                    </div>

                    <!-- Right side -->
                    <div class="column" style="padding: 1rem;">
                        <div v-if="selectedCategoryValue">
                            You select - {{ selectedCategoryValue }} with key: {{selectedCategoryKey}}
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-sm-4 col-sm-offset-1">
                                        <div class="box-of-stuff">
                                            <div class="form-floating mb-3">
                                                <input type="number" class="form-control" id="floatingInput" placeholder="Total Income" v-model="totalBudget" />
                                                <label for="floatingInput">Total Budget</label>
                                            </div>
                                            <form>
                                                <div class="form-floating mb-3">
                                                    <input type="number" class="form-control" id="floatingInput" v-model="expenses">
                                                    <label for="floatingInput">Expenses in {{selectedCategoryValue}}</label>
                                                </div>
                                                <input class="form-control input-lg" type="text" id="category" placeholder="category" :value="selectedCategoryValue" readonly />
                                            </form>
                                            <button @click="addItem(this.selectedCategoryKey, this.selectedCategoryValue)" class="btn btn-primary btn-lg btn-block">Add to table</button>
                                        </div>
                                    </div>
                                    <div v-if="isResultTableShow" class="col-sm-8">
                                        <div class="results">
                                            <h1 class="title">Results</h1>
                                            <span class="emoji"></span>
                                            <div class="results-data">
                                                <table class="table table-striped table-bordered table-sm">
                                                    <thead class="thead-light">
                                                        <th>Category</th>
                                                        <th>Expenses</th>
                                                        <!-- <th>Edit/Del</th> -->
                                                    </thead>
                                                    
                                                    <tr v-for="(item, index) in expensesDataInTable" :key="index">
                                                        <td>
                                                        <input v-if="item.edit" type="text" v-model="item.category"  v-on:keyup.enter="item.edit = !item.edit">
                                                        <span v-else>{{item.category}} </span>
                                                        </td>
                                                        <td>
                                                        <input v-if="item.edit" type="text" v-model="item.expenses" v-on:keyup.enter="item.edit = !item.edit">
                                                        <span v-else>{{item.expenses}} </span>
                                                        </td>
                                                        <td>
                                                            <button @click="item.edit = !item.edit" class="btn btn-info">Edit</button>
                                                            <button @click="removeItem(index)" class="btn btn-danger">Delete</button>
                                                        </td>
                                                    </tr>
                                                    <tr class="alert alert-info last-row" style="border: none; background: #ad98a5">
                                                        <td></td>
                                                        <td>total:
                                                            <strong><span 
                                                                :class="totalExpenses > this.totalBudget ? 'text-danger' : 'text-primary'"
                                                                >{{totalExpenses}}/-</span></strong> 
                                                            out of 
                                                            <strong><span>{{this.totalBudget}}/-</span></strong></td>
                                                        <td></td>       
                                                    </tr> 
                                                </table>

                                                <div class="show-chart-btn">
                                                    <button class="togglebutton" v-on:click="showChartSection">Show chart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br>
                        <div 
                            v-for="(item, index) in defaultCategories" 
                            :key="item.id"
                            class="bg-success" style="display: none;">
                            {{index}}. {{item.key}}. {{item.value}}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isChartTableShow" class="budget-section" style="background-color: #86d393">

            <FusionChartData :selectedTableValueData="expensesDataInTable" :key="this.rerenderCount" />
        </div>
    </div>
</template>

<script>
import FusionChartData from '../BudgetPlanner/FusionChartData.vue'

export default {
    name: 'BudgetPlanner',
    components: {
        FusionChartData
    },
    data() {
        return {
            editing: false,
            addedNewCategory: '',
            selectedCategoryValue: '',
            selectedCategoryKey: '',
            isResultTableShow: false,
            isChartTableShow: false,
            expenses: '',
            totalBudget: 5000,
            remainingBudget: '',
            defaultCategories: [
                { key: 'travelling', value: 'Travelling', expenses: 0, edit: false },
                { key: 'food', value: 'Food', expenses: 0, edit: false},
                { key: 'pocket-money', value: 'Pocket Money', expenses: 0, edit: false},
                { key: 'room-expenses', value: 'Room Expenses', expenses: 0, edit: false},
            ],
            expensesDataInTable: [],
            rerenderCount: 0
        }
    },
    methods: {
        toggleBudget(editing) {
            this.editing = editing
        },
        addCategory: function() {
            this.defaultCategories.push({key: this.addedNewCategory.replace(/\s+/g, '-').toLowerCase(), value: this.addedNewCategory})
            this.addedNewCategory = ''
        },
        updateCategory: function() {
            this.selectedCategoryValue = this.selectedCategoryValue.replace(/\s+/g, ' ')
            console.log('selectedCategoryValue:', this.selectedCategoryValue)
        },
        changeCategory(event) {
            this.selectedCategoryValue = event.target.options[event.target.options.selectedIndex].text
            this.selectedCategoryKey = event.target.value
        },
        addItem(key, value) {
            let checkItem = [{
                key,
                category: value,
                expenses: this.expenses
            }]
            this.isResultTableShow = true
            this.rerenderCount++
            
            let itemInTable = this.expensesDataInTable.filter(item => item.key === key)
            let isItemInTable = itemInTable.length > 0

            if(isItemInTable === false) {                   //item not present, please insert it
                console.log('no, added new')
                this.expensesDataInTable.push({'key':this.selectedCategoryValue.replace(/\s+/g, '-').toLowerCase(), 'category': this.selectedCategoryValue, 'expenses': this.expenses})
            } else {                                        //item already exists, update only calculation
                this.expensesDataInTable.filter(item => {
                    if(item.key === checkItem[0].key) {
                        item.expenses += checkItem[0].expenses
                    }
                })

            }

            // this.expensesDataInTable.push({'key':this.selectedCategoryValue.replace(/\s+/g, '-').toLowerCase(), 'category': this.selectedCategoryValue, 'expenses': this.expenses})
        },
        removeItem(index) {
            this.expensesDataInTable.splice(index, 1)
        },
        showChartSection() {
            this.isChartTableShow = !this.isChartTableShow
        },
    },
    computed: {
        totalExpenses() {
            let sum = 0
            for (let i = 0; i < this.expensesDataInTable.length; i++){
                sum += parseInt(this.expensesDataInTable[i].expenses);
            }
            return sum;
        }
    },
}
</script>

<style scoped>
/* Form Section start*/
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

/* budget-form */
.budget-form {
    /* width: 80%; */
    margin-left: 5px;
}
/* Form section Ends */

.element {
  display: inline-block;
}

/* Temporary have */
.toggle-text {
    display: none;
}

.togglebutton{
    padding : 0.1em;
    background-color:#2196F3;
    color:#FFF;
    cursor:pointer;
}
</style>