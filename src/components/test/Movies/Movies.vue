<template>
  <div class="movies">
    <Header @get-task-schedule="addTask" />
    <div class="display-section">
      <div class="row show-grid" style="width: 85rem;">
        <div class="col-lg-8 col-lg-pull-4 col-md-8 col-md-pull-0 col-sm-8 col-sm-pull-4">
          <!-- Main -->
          <!-- <pre>{{ JSON.stringify(filteredTasks, null, 2) }}</pre> -->
          <main role="main">
            <ul class="tasks">
              <div v-for="(item, index) in filteredTasks" :key="index">
                <li id="task-0" style="width: 130%;">
                <h2><span class="text-warnign">{{ item.id }} . </span>{{ item.text }}</h2>
                <div class="timer">
                  <p class="timer-label">Time spend</p>
                  <p class="timer-text"><span class="hours">{{ item.hours.hh ? item.hours.hh : '00'}}</span>:<span class="minutes">{{ item.hours.mm ? item.hours.mm : '00' }}</span></p>
                </div>
                <button v-if="isLogDataForm" @click="showLogDataForm({status: false, id: item.id})" class="btn stop">off</button>
                <button v-else @click="showLogDataForm({status: true, id: item.id})" class="btn start">Log Time</button>
                <button @click="removeItem(item)" class="delete-btn"><fa icon="trash" /></button>
              </li>
            </div>
            <span>total time:</span>
            <strong><span class='text-primary'>
              {{totalTime}}
            </span>&nbsp;&nbsp;Min.</strong>
                
            </ul>
          </main>
          <!-- End main-->
        </div>
        <div class="col-lg-4 col-lg-push-8 col-md-4 col-md-push-0 col-sm-4 col-sm-push-8">
          <div v-if="isLogDataForm" class="log-data-form">
            <h4>Log data</h4>
            <form>
              <button @click.prevent="saveTimeSpend(this.passedIdToForm)">save</button>
              <div class="">
                <label>Choose hours</label>
                <vue-timepicker :format="datTimeFormat" v-model="hoursForTask"></vue-timepicker>
              </div>
            </form>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';
import VueTimepicker from 'vue3-timepicker/src/VueTimepicker.vue'
import Header from '../Movies/Header.vue'
// import moment from 'moment'

export default {
    name: 'Movies',
    components: {
      VueTimepicker,
      Header
    },
    data() {
      return {
        isLogDataForm: false,
        passedIdToForm: '',
        // hoursForTask: ''
      }
    },
    methods: {
      showLogDataForm(isLogDataForm) {
        this.isLogDataForm = isLogDataForm.status
        this.passedIdToForm = isLogDataForm.id
      }
    },
    setup() {
      const tasks = ref([]);
      let counter = 0
      const hoursForTask = ref("")
      const invalidInput = ref(false)

      const filteredTasks = computed(function() {
        return tasks.value.filter(
          (task) => !task.text.includes("Bappa") && !task.text.includes("Dey")
        );
      });

      let totalTime = computed(function() {
        let logData = filteredTasks.value.filter(item => {
          return item.hours
        })

        return logData
      })

      function addTask(text) {
        const newTask = {
            // id: new Date().toISOString(),
            id: ++counter,
            text: text,
            hours: {
              hh: '00',
              mm: '00'
            }
        };
        tasks.value.push(newTask);
      }

      watch(invalidInput, function (val) {
        if (val) {
          console.log("Analytics: Invalid Input");
        }
      });

      function saveTimeSpend(id) {
        invalidInput.value = false;

        if(hoursForTask.value == '') {
          invalidInput.value = true;
          return;
        }

        filteredTasks.value.filter(item => {
          if(item.id == id) {
            let hours = hoursForTask.value.split(':')
            
            item.hours.hh = hours[0]
            item.hours.mm = hours[1]
          }
        })

        filteredTasks.value.filter(item => {
          let hours = item.hours.hh + ':' + item.hours.mm
          let timeInMinutes = convertH2M(hours);
          return timeInMinutes
        })

        function convertH2M(timeEntries){
          var timeParts = timeEntries.toString().split(":");
          let total = totalTime.value += Number(timeParts[0]) * 60 + Number(timeParts[1])
          console.log(total)
          return total;
        }
      }

      return {
        filteredTasks,
        hoursForTask,
        totalTime,
        addTask,
        saveTimeSpend
      }
    },

    // created: function () {
    //   this.moment = moment;
    // },
    // data() {
    //   return {
    //       toggleLogFormData: false,
    //       isLogDataForm: false,
    //       work: [],
    //       passedIdToForm: '',
    //       timeEntries: []
    //     }
    // },
    // methods: {
    //   showLogDataForm(isLogDataForm) {
    //     this.isLogDataForm = isLogDataForm.status
    //     this.passedIdToForm = isLogDataForm.id
    //   },
    //   addProjectChild(value) {
    //     this.work = value
    //   },
    //   removeItem(item) {
    //     this.work.splice(index, 1);
    //     if (confirm('Sure to delete')) {
    //         this.work = this.work.filter((item) => item.id != selData.id)
    //         this.$toast.open({
    //             message: "Deleted Successfully",
    //             type: "warning",
    //             duration: 5000,
    //             dismissible: true
    //         })
    //     }
    //   },
    //   saveTimeSpend(id) {
    //     if(this.work) {
    //       let itemInTable = this.work.filter(item => item.id === id)
    //       itemInTable[0].hours.hh = this.hoursForTask.HH
    //       itemInTable[0].hours.mm = this.hoursForTask.mm
    //     }
    //   },
    // },
    // computed: {
    //   totalTime() {
    //     let totalTime = 0
    //     var timeInMinutes = ''

    //     let timeEntries = this.work.filter(item => {
    //       console.log('computed: ', item.hours)
    //     })

    //     let timeEntries = this.timeEntries;

    //     timeEntries.filter(item => {
    //       timeEntries = item.duration

    //       timeInMinutes = convertH2M(timeEntries);
    //     })

    //     function convertH2M(timeEntries){
    //       var timeParts = timeEntries.toString().split(":");
    //       return totalTime += Number(timeParts[0]) * 60 + Number(timeParts[1]);
    //     }

    //     return timeEntries;
    //   }
    // }
}
</script>

<style scoped>
/* https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html */

/* Left right section start */
.show-grid [class^=col-] {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #eee;
    background-color: rgba(86,61,124,.15);
    border: 1px solid #ddd;
    border: 1px solid rgba(86,61,124,.2);
}
/* Left right section end */


.tasks {
  list-style: none;
  padding: 0;
  width: 100%;
}

@media screen and (min-width: 768px) {
  .tasks {
    max-width: 80%;
  }
}

@media screen and (min-width: 991px) {
  .tasks {
    max-width: 60%;
  }
}

.tasks li {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
  overflow:hidden;
}

.tasks li h2 {
  font-size: 1.125rem;
  color: #4A4A4A;
}

@media screen and (min-width: 768px) {
  .tasks li h2 {
    font-size: 1.313rem;
    margin-right: auto;
  }
}

@media screen and (min-width: 768px) {
  .tasks li {
    padding: 25px;
    flex-direction: row;
    justify-content: flex-end;
  }
}

.timer {
  text-align: center;
  color: #4A4A4A;
  margin-bottom: 20px;
}

@media screen and (min-width: 768px) {
  .timer {
    margin-bottom: 0;
    margin-right: 15px;
    transition: transform 0.5s;
    transform: translateX(50px);
  }
}

.timer-label {
  margin-bottom: 5px;
}

.timer-text {
  font-size: 1.5rem;
  font-weight: 700;
}

@media screen and (min-width: 768px) {
  .timer-text {
    font-size: 1.875rem;
  }
}

.btn {
  padding: 13px;
  width: 120px;
  border-radius: 60px;
  text-transform: uppercase;
  color: #fff;
  border-color: transparent;
  border-style: solid;
  border-width: 2px;
  font-weight: 700;
  font-size: 1.125rem;
  transition: background 0.3s, transform 0.5s;
}

.btn:hover {
  background: transparent;
}

@media screen and (min-width: 768px) {
  .btn {
    margin-right: 15px;
    transform: translateX(50px);
  }
}

.start {
  background: #21D324;
}

.stop {
    background: #d32721;
}

.start:hover {
  color: #21D324;
  border-color: #21D324;
  border-style: solid;
}
.stop:hover {
  color: #d32121;
  border-color: #d32121;
  border-style: solid;
}

.stop {
  background: #D00202;
}

.stop:hover {
  color: #D00202;
  border-color: #D00202;
  border-style: solid;
}

.delete-btn {
  background: #D00202;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  border: 2px solid #D00202;
  opacity: 1;
  position: absolute;
  bottom: 25px;
  right: 30px;
  color: #fff;
  /* display: flex; */
  justify-content: center;
  align-content: center;
  transition: background 0.3s, opacity 0.3s, transform 0.5s;
}

/* .delete-btn i {
  font-size: 1.5rem;
} */

.delete-btn:hover {
  color: #D00202;
  background: transparent;
}

@media screen and (min-width: 768px) {
  .delete-btn {
    opacity: 0;
    position: relative;
    bottom: inherit;
    right: inherit;
    transform: translateX(50px);
  }
}

.tasks li:hover .delete-btn,
.tasks li:hover .timer,
.tasks li:hover .btn {
  opacity: 1;
}

@media screen and (min-width: 768px) {
  .tasks li:hover .delete-btn,
  .tasks li:hover .timer,
  .tasks li:hover .btn {
    transform: translateX(0);
  }
}

.tasks input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1.125rem;
  color: #4A4A4A;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #a2a2a2;
}

@media screen and (min-width: 768px) {
  .tasks input {
    width: 50%;
    font-size: 1.313rem;
    margin-bottom: 0;
    margin-right: auto;
  }
}
</style>

