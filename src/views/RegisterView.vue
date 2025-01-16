<template>
    <section>
        <h2>Registro de Usuario</h2>
        <form @submit.prevent="registerUser">
            <div>
                <label for="email">Correo Electrónico</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div>
                <label for="password">Contraseña</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Registrarse</button>
        </form>
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
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
                const user = userCredential.user
                console.log('Usuario creado:', user)
                this.$router.push({name: 'perfil'})
            }catch (error){
                console.log(error)
                alert(error.message)
            }
        }
    }
}
</script>
