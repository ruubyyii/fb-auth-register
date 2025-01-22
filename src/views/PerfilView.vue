<template>
    <section>
        <h1>Bienvenido {{  user.email }}</h1>
        <button @click="logout">Cerrar sesion</button>
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

<style>

</style>