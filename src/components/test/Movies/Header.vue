<template>
    <div class="movies-header">
        <!-- Header -->
        <header role="banner">
            <h1>Daily Schedule</h1>
            <form class="task-form" @submit.prevent="submitProject">
                <input type="text" v-model="addedNewTask" name="task" placeholder="Enter task name">
                <input type="submit" value="Submit">
            </form>
        </header>
        <!-- End header -->
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                tasks: [],
                counter: 1,
            }
        },
        methods: {
            submitProject() {
                this.tasks.push({id: this.counter++ , workFor: this.addedNewTask, hours: {hh: '00', mm: '00'} })
                this.$emit('clicked', this.tasks)
            }
        }
    }
</script>

<style scoped>
*:focus{
  outline:none;
}
body {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

p {
  margin: 0;
}
button{
  cursor:pointer;
}

button > * {
  pointer-events: none;
}

main {
  padding: 40px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 768px) {
  main {
    padding: 80px 30px;
  }
}

header {
  background: #4A00E0;
  background: linear-gradient(to top, #4A00E0 0%, #e22d9a 100%);
  padding: 40px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 768px) {
  header {
    padding: 80px 30px;
  }
}

header h1 {
  color: #fff;
  font-weight: 300;
  font-size: 2rem;
  margin: 0 0 60px 0;
  text-transform:uppercase;
  letter-spacing:2px;
}

@media screen and (min-width: 768px) {
  header h1 {
    font-size: 2.25rem;
  }
}

form {
  text-align:right;
  position:relative;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 768px) {
  form {
    max-width: 650px;
    flex-direction: row;
  }
}

input[type="text"] {
  position:absolute;
  width: 100%;
  border-color: transparent;
  padding: 15px 20px;
  border-radius: 30px;
  margin-bottom: 20px;
}

@media screen and (min-width: 768px) {
  input[type="text"] {
    margin-bottom: 0;
    margin-right: 20px;
    padding: 20px 30px;
  }
}

input[type="submit"] {
  position:absolute;
  right:-35px;
  z-index:1;
  border-color: transparent;
  border-style: solid;
  border-width: 2px;
  width: 120px;
  background: #00C1D9;
  color: #fff;
  border-radius: 30px;
  padding: 15px;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 0.3s;
  cursor:pointer;
  border-color: #fff;
}

input[type="submit"]:hover {
  background: #4A00E0;
  border-color: #fff;
}

@media screen and (min-width: 768px) {
  input[type="submit"] {
    width: 150px;
    padding: 20px;
  }
}
</style>