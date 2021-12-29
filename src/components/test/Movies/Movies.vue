<template>
    <div class="movies">
        <!-- Header -->
        <header role="banner">
            <h1>Daily Schedule</h1>
            <form class="project-form" @submit.prevent="submitProject">
                <input type="text" name="project" placeholder="Enter project name">
                <input type="submit" value="Submit">
            </form>
        </header>
        <!-- End header -->

        <!-- Main -->
        <main role="main">
            <ul class="projects">
                <li id="project-0">
                    <h2>Bappa</h2>
                    <div class="timer">
                        <p class="timer-label">Total Time Spent</p>
                        <p class="timer-text"><span class="hours">00</span>:<span class="minutes">00</span>:<span class="seconds">00</span></p>
                    </div>
                    <button v-if="isShowStart" @click="toggleIsStartBtn(false)" class="btn stop">Stop</button>
                    <button v-else @click="toggleIsStartBtn(true)" class="btn start">Start</button>
                    <!-- <button class="delete-btn"><i class="fa fa-times"></i></button> -->
                </li>
            </ul>
        </main>
        <!-- End main-->


    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Movies',
        data() {
            return {
                isShowStart: false
            }
        },
        mounted () {
            // this.bitCoinData();
            // this.utellyMovieApi();
            // this.spotifyApi();
        },
        methods: {
            toggleIsStartBtn(isShowStart) {
                this.isShowStart = isShowStart
            },
            submitProject() {
                console.log('Test...')
            },
            bitCoinData() {
                axios
                    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                    .then(response => (
                        console.log('Response: ', response.data.bpi)
                    ))
                    .catch(error => console.log(error))
            },
            utellyMovieApi() {
                axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

                var options = {
                    method: 'GET',
                    url: 'http://www.omdbapi.com/?i=tt3896198&apikey=952d00d0',
                    // params: {term: 'bojack', country: 'uk'},
                    headers: {
                        // 'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
                        // 'x-rapidapi-key': 'dc81d997dcmshe98c1d25b263992p1ea820jsn27e716468128'
                        
                        "Access-Control-Allow-Origin": "*",
                    }
                };

                axios.request(options).then(function (response) {
                    console.log('utellyMovieApi', response);
                }).catch(function (error) {
                    console.error('utellyMovieApi Error', error);
                });
            },
            spotifyApi() {
                var options = {
                    method: 'GET',
                    // url: 'https://spotifystefan-skliarovv1.p.rapidapi.com/listCategories',
                    url: 'http://localhost:8080/',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'x-rapidapi-host': 'Spotifystefan-skliarovV1.p.rapidapi.com',
                        'x-rapidapi-key': 'dc81d997dcmshe98c1d25b263992p1ea820jsn27e716468128'
                    },
                    data: {accessToken: '29946401b8b74433b52673e9a9fcc07a'}
                    };

                    axios.request(options).then(function (response) {
                        console.log(response.data);
                    }).catch(function (error) {
                        console.error(error);
                    });
            },
        }
    }
</script>

<style scoped>
/* https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html */
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

.projects {
  list-style: none;
  padding: 0;
  width: 100%;
}

@media screen and (min-width: 768px) {
  .projects {
    max-width: 80%;
  }
}

@media screen and (min-width: 991px) {
  .projects {
    max-width: 60%;
  }
}

.projects li {
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

.projects li h2 {
  font-size: 1.125rem;
  color: #4A4A4A;
}

@media screen and (min-width: 768px) {
  .projects li h2 {
    font-size: 1.313rem;
    margin-right: auto;
  }
}

@media screen and (min-width: 768px) {
  .projects li {
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
  display: flex;
  justify-content: center;
  align-content: center;
  transition: background 0.3s, opacity 0.3s, transform 0.5s;
}

.delete-btn i {
  font-size: 1.5rem;
}

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

.projects li:hover .delete-btn,
.projects li:hover .timer,
.projects li:hover .btn {
  opacity: 1;
}

@media screen and (min-width: 768px) {
  .projects li:hover .delete-btn,
  .projects li:hover .timer,
  .projects li:hover .btn {
    transform: translateX(0);
  }
}

.projects input {
  width: 100%;
  padding: 0.5rem;
  font-size: 1.125rem;
  color: #4A4A4A;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #a2a2a2;
}

@media screen and (min-width: 768px) {
  .projects input {
    width: 50%;
    font-size: 1.313rem;
    margin-bottom: 0;
    margin-right: auto;
  }
}
</style>

