<template>
    <section>
        <h2 class=" text-red-600 text-xl">Register</h2>
        <form @submit.prevent="registerUser">
            <div>
                <label for="email">Correo Electrónico</label>
                <input type="email" id="email" v-model="email" required placeholder="Correo Electrónico">
            </div>
            <div>
                <label for="password">Contraseña</label>
                <input type="password" id="password" v-model="password" required placeholder="Contraseña">
            </div>
            <button type="submit">Registrarse</button>
        </form>
        <p>Ya tienes cuenta? <router-link to="/login">Inicia Sesion</router-link></p>
    </section>
</template>

<script>
import { auth } from '@/db/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
export default {
    name: 'RegisterView',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        async registerUser(){
            try {
                await createUserWithEmailAndPassword(auth, this.email, this.password)
                console.log('Usuario creado:')
                this.$router.push({name: 'perfil'})
            }catch (error){
                console.log(error)
                alert(error.message)
            }
        }
    }
}
</script>
