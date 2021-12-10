<template>
    <div class="home">
        <div class="my-name">{{greet}} {{name}}</div>

        <div class="grid-container">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
          </div>

        <!-- Binding text -->
        <div v-text="directiveText"></div>
        <!-- <div v-text="name">OverRide</div> -->          <!-- Gets error as v-text will override element children -->

        <!-- Binding Html -->
        <div v-html="bold"></div>
        <div v-html="hack"></div>

        <!-- Binding attributes -->
        <div v-bind:id="bindId">Heading</div>
        <button v-bind:disabled="isDisabled">Yes it is disabled</button>

        <!-- Binding classes -->
        <h2 class="underline">This is class binding</h2>
        <h2 class="underline" v-bind:class="status">Status with static underline class and status bind class</h2>

        <!-- Logical and operator to conditionnaly apply the promoted class only isPromoted is true -->
        <h2 v-bind:class="isPromoted && 'promotedMovie'">Promoted Movies</h2>
        <h2 v-bind:class="isSoldOut ? 'sold-out-movie' : 'new-movie'">Soldout? Movie</h2>
        
        <!-- Bind classes uses arrays or objects -->
        <!-- Bind using array -->
        <h2 v-bind:class="['new-movie', 'promotedMovie']">Newly Prometed Movie</h2>
        <h2 v-bind:class="[isPromoted &&  'promotedMovie', isSoldOut ? 'sold-out-movie' : 'new']">Array conditional movie - isPromoted and isSoldOut Movie</h2>

        <!-- Bind using Object -->
        <h2 v-bind:class="{
            promotedMovie: isPromoted,
            new: !isSoldOut,
            'sold-out-movie': isSoldOut
        }">Object conditional movie - isPromoted and isSoldOut Movie</h2>

        <!-- Bind Inline styles using Object syntax-->
        <h2 v-bind:style="{
            color: highlightColor
        }">Object conditional movie</h2>

    </div>
  </template>
  
  <script>
      
  export default {
    name: 'Home',
    data() {
        return {
            greet: 'Welcome',
            name: 'today!',
            directiveText: 'Horray',
            bold: 'This is bold text',
            hack: `<a href="#" onclick="alert('You have been haked')">Win a prize</a>`,
            bindId: 'heading',
            isDisabled: true,
            status: 'danger',
            isPromoted: true,
            isSoldOut: true
        }
    }
  }
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  .underline {
      text-decoration: underline;
  }

  .promotedMovie {
      font-style: italic;
  }

  .new-movie {
      color: olivedrab;
  }

  .sold-out-movie {
      color: red;
  }

  .highlightColor {
      color: orange;
  }
  </style>
  