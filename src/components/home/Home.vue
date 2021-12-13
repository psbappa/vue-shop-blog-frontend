<template>
    <div class="home">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/about">About</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        <h1>Home title - {{ backgroundColor }}</h1>
        <div class="container1">
            <div class="row">
                <div class="col-sm-6">
                    <Test @changeBackgroundColor="updatebackgroundColor($event)" appname="Passed from parent to child!" />
                </div>
                <div class="col-sm-6">
                    <Test1 />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Test from '../test/Test.vue'
import Test1 from '../test/Test1.vue'

export default {
    name: 'Home',
    components: {
        Test,
        Test1
    },
    data() {
        return {
            backgroundColor: 'default'
        }
    },
    methods: {
        updatebackgroundColor(backgroundColor) {
            this.backgroundColor = backgroundColor
        }
    }
}
</script>