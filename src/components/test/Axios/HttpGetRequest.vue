<template>
    <div class="http-get-request">
        <h4>Axios Call - Http GET Request</h4>
        <button @click="getPosts">Load Posts</button>
        <p>A responsive table with scrolling and a footer.</p>
        <div class="error-message">
            <h3 v-if="errorMsg" class="text-danger">{{errorMsg}}</h3>
        </div>
        <div id="constrainer">
            <div class="theader">
                <table>
                    <thead>
                        <th width="10%" align="center">UserId</th>
                        <th width="20%" align="center">ID</th>
                        <th width="30%" align="center">Title</th>
                        <th width="20%" align="center">body</th>
                    </thead>
                </table>
            </div>
            <div class="tableContent">
                <table>
                    <tbody>
                        <tr>
                            <div v-for="post in posts" :key="post.id">
                                <td width="10%" align="center">{{post.userId}}</td>
                                <td width="20%" align="center">{{post.id}}</td>
                                <td width="30%" align="left">{{post.title}}</td>
                                <td width="20%" align="center">{{post.body}}</td>
                            </div>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="tfooter">
                <table>
                    <tfoot>
                        <tr>
                            <td align="center" colspan="5">Scroll down for more data</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'HttpGetRequest',
        data() {
            return {
                posts: [],
                errorMsg: ''
            }
        },

        methods: {
            getPosts() {
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then((response) => {
                        // console.log(response.data)
                        this.posts = response.data
                    })
                    .catch(error => {
                        console.log('Error =>', error)
                        this.errorMsg = 'Error retriving data'
                    })
            }
        }
    }
</script>

<style scoped>
    body{
        font-family: Arial;
    }

    thead{
        color:#ffffff;
        background-color:#567fff;
        width:100%;
        }
    tfoot{
        color:#ffffff;
        background-color:#567fff;
        }
    tr:nth-child(even) {
        background-color: #f8f8ff;
        }

    .theader{
        width:100%;
        color:#ffffff;
        background-color:#567fff;
        display:inline-table;
        }

    /* Function */
    #constrainer {
        width:100%;
        margin:auto;

    }
    .tableContent {
        height:200px !important;
        overflow-x: scroll;
    }
    #constrainer table {
        width:100%;
    }
</style>