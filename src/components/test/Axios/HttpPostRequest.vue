<template>
    <div class="http-post-request">
        <h4>Axios Call - Http POST Request</h4>
        <form @submit.prevent="createPost">
            <div class="form-group">
                <label for="post-user-id">Post user ID</label>
                <input type="text" id="post-user-id" class="form-control" v-model="formData.userId">
            </div>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" class="form-control" v-model="formData.title">
            </div>
            <div class="form-group">
                <label for="body">Body</label>
                <input type="text" id="body" class="form-control" v-model="formData.body">
            </div>
            <button>Post</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'HttpPostrequest',
        data() {
            return {
                formData: {
                    userId: '',
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost() {
                axios.post('https://jsonplaceholder.typicode.com/posts', this.formData)
                    .then((response) => {
                        console.log(response.data)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped>

</style>