<template>
    <section class="flex flex-col justify-center items-center h-screen">
        <div class="flex flex-col justify-center items-center gap-10 bg-[whitesmoke] p-20 rounded-md">
            <h1 class="text-3xl">Bienvenido {{  user.email }}</h1>
        </div>
        <button class=" hover:scale-105 transition p-2 mt-4 bg-red-600 shadow-lg text-white rounded-md font-bold" @click="logout">Cerrar sesion</button>
    </section>
</template>

<script>
import { auth } from '@/db/firebase'
import { signOut } from 'firebase/auth'
export default {
    name: 'PerfilView',
    data() {
        return {
            user:{
                user: null
            }
        }
    },
    mounted(){
            this.user = auth.currentUser
    },
    methods:{
        async logout(){
            try{
                await signOut(auth);
                this.$router.push({name: 'login'})
            }catch(error){
                console.error('Error al cerrar sesion.')
                
            }
        }
    }
}
</script>

<style scoped>
section{
    background: #000000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #070606, #000000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>