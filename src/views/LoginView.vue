<template>
    <section>
            <h2>Inicio de sesion</h2>
            <form @submit.prevent="LoginUser">
                <div>
                    <label for="email">Correo Electrónico</label>
                    <input type="email" id="email" v-model="email" required placeholder="Correo Electrónico">
                </div>
                <div>
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" v-model="password" required placeholder="Contraseña">
                </div>
                <button type="submit">Iniciar sesion</button>
            </form>
            <p>No tienes cuenta? <router-link to="/">Registrarse</router-link></p>
    </section>
</template>

<script>
import { auth } from '@/db/firebase' 
import { signInWithEmailAndPassword } from 'firebase/auth'
export default {
    name: 'LoginView',
    data(){
        return{
            email: '',
            password: '',
        }
    },
    methods:{
        async LoginUser(){
            try{
                await signInWithEmailAndPassword(auth, this.email, this.password)
                console.log('Usuario logueado')
                this.$router.push({name: 'perfil'})
            }catch(error){
                console.log(error)
                alert(error.message)
            }
        }
    }
}
</script>

<style>

</style>