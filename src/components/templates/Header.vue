<template>
    <div class="header">
      <h1>Header {{name}}</h1>
      <div></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        name: 'Hello Bappa'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  