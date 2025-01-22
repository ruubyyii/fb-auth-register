<template>
    <section class="flex flex-col justify-center items-center h-screen gap-8 shadow-inner">
        <div id="cont_form" class="flex flex-col justify-center items-center gap-10 bg-[whitesmoke] p-20 rounded-md">
            <h2 class="text-4xl tracking-wider font-bold drop-shadow-md">LOGIN</h2>
            <form @submit.prevent="LoginUser" class="flex flex-col gap-5">
                <div class="flex">
                    <label for="email" class="shadow-md p-2 px-3 bg-blue-600 text-white"><i class="fa-solid fa-envelope"></i></label>
                    <input class="shadow-md outline-none rounded-r-md ps-2" type="email" id="email" v-model="email" required placeholder="Correo Electrónico">
                </div>
                <div class="flex">
                    <label for="password" class="shadow-md p-2 px-3 bg-blue-600 text-white"><i class="fa-solid fa-lock"></i></label>
                    <input class="shadow-md outline-none rounded-r-md ps-2" type="password" id="password" v-model="password" required placeholder="Contraseña">
                </div>
                <button type="submit" class=" hover:scale-105 transition p-2 mt-4 bg-blue-900 shadow-lg text-white rounded-md font-bold">Iniciar sesion</button>
            </form>
            <p>No tienes cuenta? <router-link class="text-blue-800 underline" to="/">Registrarse</router-link></p>
        </div>
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

<style scoped>
section{
    background: #000428; /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #000428, #004e92); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #000428, #004e92); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
