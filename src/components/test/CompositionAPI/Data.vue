<template>
    <div class="composition-api">  
        <h4>Composition API</h4>
        <span>Options API - {{o_firstName}}</span><br>
        <span>Options API - {{o_firstName}} {{o_lastName}} a.k.a {{o_heroName}}</span><br>

        <span>Composition API - {{c_firstName}}</span><br>
        <span>Composition API - {{greet}}</span><br>

        <span>Composition API -{{c_firstName}} {{c_lastName}} a.k.a {{c_heroName}}</span><br>
        <span>Composition API - {{greetHero}}</span>

        <h5>Composition using reac</h5>
        <span>{{state.firsName}} {{state.lastName}} {{state.heroName}}</span><br>
        <span>{{reactiveGreetHero}}</span>
    </div>
</template>

<script>
    import { ref, reactive } from 'vue'

    export default {
        name: 'Data',
        setup() {
            const c_firstName = ref('Clark')
            const c_lastName = ref('Kent')
            const c_heroName = ref('SuperMan')

            // c_firstName.value = 'Diana'
            const greet = `Hello ${c_firstName.value}`
            const greetHero = `Hello ${c_firstName.value} ${c_lastName.value} a.k.a ${c_heroName.value}`
            // console.log('c_firstName', c_firstName)

            const state = reactive({
                firstName: 'Pricess',
                lastName: 'Diana',
                heroName: 'Wonder Person'
            })

            const reactiveGreetHero = `Hello - ${state.firstName} ${state.lastName} a.k.a ${state.heroName}`

            return {
                // c_firstName: c_firstName        //according to es6, if key and value are same make it single
                c_firstName,
                c_lastName,
                c_heroName,
                greet,
                greetHero,
                state,
                reactiveGreetHero
            }
        },
        data() {
            return {
                o_firstName: 'Bruce',
                o_lastName: 'Wayne',
                o_heroName: 'Batman',
            }
        }
    }
</script>

<style scoped>

</style>