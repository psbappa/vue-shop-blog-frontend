<template>
    <div class="budget-planner">
        <div class="header-section" style="background-color: #86d393">
            <div class="budget-header-section py-3">
                <!-- <h2>Budget App</h2> -->
                <button v-if="editing" @click="toggleBudget(false)" class="button modern border -small -plain">Close Budget</button>
                <button v-else @click="toggleBudget(true)" class="button modern border -small -plain">Open Budget App</button>
            </div>
            <div v-if="editing" class="body-section" style="width: 100%; display: table; background: #b3946f">
                <div style="display: table-row; height: 100px;">
                    <!-- Left side - Add Edit Form -->
                    <div style="width: 30%; display: table-cell; padding: 1rem;">
                        <div class="form-body">
                            <form @submit.prevent="submitAddEditForm" name="contact-form" novalidate class="budget-add-edit" action="">
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
                                                @click="editCategory(this.selectedCategoryKey, this.selectedCategoryValue)"
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
                            <!-- You select - {{ selectedCategoryValue }} with key: {{selectedCategoryKey}} -->
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-sm-4 col-sm-offset-1">
                                        <div class="box-of-stuff">
                                            <p v-if="formErrors.length" class="text-danger">
                                                <b>Please correct the error</b>
                                                <ul style="list-style-type:none;">
                                                    <li v-for="e in formErrors" v-bind:key="e.id">
                                                        {{e}}
                                                    </li>
                                                </ul>
                                            </p>
                                            <div class="form-floating mb-3">
                                                <input type="number" class="form-control" id="floatingInput" placeholder="Total Income" v-model="totalBudget" />
                                                <label for="floatingInput">Total Budget</label>
                                            </div>
                                            
                                            <form @submit.prevent="addItem(this.selectedCategoryKey, this.selectedCategoryValue)" method="post">
                                                <div class="form-floating mb-3">
                                                    <input type="number" class="form-control" id="floatingInput" v-model="expenses">
                                                    <label for="floatingInput">Expenses in {{selectedCategoryValue}}</label>
                                                </div>
                                                <input class="form-control input-lg" type="text" id="category" placeholder="category" :value="selectedCategoryValue" readonly />
                                            
                                                <button class="btn btn-primary btn-lg btn-block">Add to table</button>
                                            </form>
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
                                                            <!-- <input v-if="item.edit" type="text" v-model="item.category"  v-on:keyup.enter="item.edit = !item.edit">
                                                            <span v-else>{{item.category}}</span> -->

                                                            <!-- <pre>
                                                                Bappa {{ JSON.stringify(item.edit, null, 2) }}
                                                            </pre> -->

                                                            <input v-if="false" type="text" v-model="item.category">
                                                            <span v-else>{{item.category}}</span>
                                                        </td>
                                                        <td>
                                                        <input v-if="item.edit" type="text" v-model="item.expenses" v-on:keyup.enter="item.edit = !item.edit">
                                                        <span v-else>{{item.expenses}} </span>
                                                        </td>
                                                        <td>
                                                            <button @click="editItem(item)" class="btn btn-info">
                                                                <i class="fas fa-edit">Edit</i>
                                                            </button>
                                                            <button @click="removeItem(item)" class="btn btn-danger">
                                                                <i class="fas fa-times">Delete</i>
                                                            </button>
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
                                                    <button class="btn btn-primary" v-on:click="showChartSection">Show chart</button>&nbsp;&nbsp;
                                                    <button class="btn btn-warning" v-on:click="clearTableChart">Clear data</button>
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

        <div v-if="isChartTableShow & expensesDataInTable.length > 0" class="budget-section" style="background-color: #86d393">
            <FusionChartData :selectedTableValueData="expensesDataInTable" :key="this.rerenderCount" />
        </div>
    </div>
</template>

<script>
import FusionChartData from '../BudgetPlanner/FusionChartData.vue'

export default {
    name: 'BudgetPlanner',
    components: {
        FusionChartData,
    },
    data() {
        return {
            editing: false,
            addedNewCategory: '',
            selectedCategoryValue: '',
            selectedCategoryKey: '',
            editedcategoryValue: '',
            isResultTableShow: false,
            isChartTableShow: false,
            expenses: '',
            totalBudget: '',
            remainingBudget: '',
            defaultCategories: [
                { key: 'travelling', value: 'Travelling', expenses: 0},
                { key: 'food', value: 'Food', expenses: 0},
                { key: 'pocket-money', value: 'Pocket Money', expenses: 0},
                { key: 'room-expenses', value: 'Room Expenses', expenses: 0},
            ],
            expensesDataInTable: [],
            rerenderCount: 0,
            formErrors: [],
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
        editCategory(key, value) {
            this.rerenderCount++
            let editItem = [{
                key: key,
                category: value.replace(/\s+/g, ' ')
            }]

            this.defaultCategories.map(item => {
                if(item.key === editItem[0].key) {
                    item.value = editItem[0].category
                }
            })

            this.expensesDataInTable.map(td => {
                if(td.key === editItem[0].key) {
                    td.category = editItem[0].category
                }
            })
        },
        changeCategory(event) {
            this.selectedCategoryValue = event.target.options[event.target.options.selectedIndex].text
            this.selectedCategoryKey = event.target.value
        },
        addItem(key, value) {
            this.formErrors = [];

            if(!this.expenses) {
                this.formErrors.push('Enter your expenses')
            } else if(!this.totalBudget) {
                this.formErrors.push('Enter Total expenses')
            }
            else {
                let checkItem = [{
                    key,
                    category: value,
                    expenses: this.expenses
                }]
                this.isResultTableShow = true
                if(this.expensesDataInTable) {
                    let itemInTable = this.expensesDataInTable.filter(item => item.key === key)
                    let isItemInTable = itemInTable.length > 0

                    if(isItemInTable === false) {
                        this.expensesDataInTable.push({'key':this.selectedCategoryValue.replace(/\s+/g, '-').toLowerCase(), 'category': this.selectedCategoryValue, 'expenses': this.expenses})
                        this.$toast.open({
                            message: "Item Added Successfully",
                            type: "success",
                            duration: 5000,
                            dismissible: true
                        })
                    } else {
                        this.expensesDataInTable.filter(item => {
                            if(item.key === checkItem[0].key) {
                                item.expenses += checkItem[0].expenses
                            }
                        })
                    }

                    this.expenses = ''
                }
                
                this.rerenderCount++
            }
        },
        editItem(val) {
            val.edit = !val.edit
            this.rerenderCount++
        },
        removeItem(selData) {
            // this.expensesDataInTable.splice(index, 1)            //only remove from DOM
            if (confirm('Sure to delete')) {
                this.expensesDataInTable = this.expensesDataInTable.filter((item) => item.key != selData.key)
                this.$toast.open({
                    message: "Deleted Successfully",
                    type: "warning",
                    duration: 5000,
                    dismissible: true
                })
                this.rerenderCount--
            }
        },
        showChartSection() {
            if(this.expensesDataInTable.length != 0) {
                this.isChartTableShow = !this.isChartTableShow
            } else {
                this.$toast.open({
                    message: "Empty data",
                    type: "success",
                    duration: 5000,
                    dismissible: true
                })
            }
        },
        clearTableChart() {
            this.expensesDataInTable = []
            this.rerenderCount++

        }
    },
    computed: {
        totalExpenses() {
            let sum = 0
            for (let i = 0; i < this.expensesDataInTable.length; i++){
                sum += parseInt(this.expensesDataInTable[i].expenses);
            }
            return sum;
        }
    }
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

/* .togglebutton{
    padding : 0.1em;
    background-color:#2196F3;
    color:#FFF;
    cursor:pointer;
} */

/* Button design Start */

@media screen and (min-width: 82em) {
    .buttons {
        transform: translateX(0);
        max-width: 50%;
        width: 700px;
        justify-content: center;
        top: 200px;
        bottom: auto;
    }
}

.buttons {
    display: flex;
    justify-content: space-evenly;
    width: 400px;
    margin: 0 auto;
    top: 368px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.button.modern.-plain:hover {
    transform: scale(1.1);
}

.buttons .modern {
    padding: 0 30px;
}

.button.active.modern, .button:hover.modern, a:hover .button.modern {
    box-shadow: inset 0 9px 21px rgb(19 183 166 / 10%), 0 0 2px rgb(60 196 180 / 60%);
    border-left-color: #028ebb;
    border-right-color: #028ebb;
    border-top: 1px solid rgba(3,143,188,.722);
    border-bottom: 1px solid rgba(3,143,188,.722);
}

.button.active.border, .button:hover.border, a:hover .button.border {
    border-color: transparent;
    color: #fff;
}

@media screen and (min-width: 40em) {
    .button.-small.border {
        line-height: 40px;
    }
}

.button.modern.-plain {
    padding: 0 30px;
    background: rgba(5,37,59,.21);
}

.button.active, .button:hover, a:hover .button {
    text-decoration: none;
}

.button.modern.-plain:before {
    -webkit-animation: left 10s infinite;
    animation: left 10s infinite;
}

.button:after, .button:before {
    background: linear-gradient(to top right,transparent,#fff);
    content: "";
    height: 150px;
    left: -175px;
    opacity: .1;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    width: 100px;
}

.button:after, .button:before {
    background: linear-gradient(to top right,transparent,#fff);
    content: "";
    height: 150px;
    left: -175px;
    opacity: .1;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    width: 100px;
}

/* Button design End */
</style>