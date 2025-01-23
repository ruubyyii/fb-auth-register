<template>
    <section class="flex flex-col justify-center items-center h-full bg-cover">
        <h1 class="font-bold text-white text-4xl my-8 drop-shadow-md shadow-white">PROFILE</h1>
        <form @submit.prevent="saveProfile" class="flex flex-col justify-center gap-5 bg-[whitesmoke] p-10 rounded-md">
            <div id="pos_img" class="flex flex-col justify-center items-center gap-2">
                <h3 class="font-bold">URL img</h3>
                <div id="cont_img" class="flex items-center justify-center w-40">
                    <img :src="profile.image" class="w-full rounded-full">
                </div>
            </div>
            <input type="text" class="shadow-md outline-none rounded-md ps-5 p-2" v-model="profile.image" placeholder="Introduce la url de tu imagen">
            <div id="cont_campos" class="flex flex-row gap-5">
                <div id="obligatorios" class="flex flex-col gap-5">
                    <h3 class="font-bold">Campos obligatiorios</h3>
                    <input type="text" class="shadow-md outline-none rounded-md ps-5 p-2" v-model="profile.fullName" placeholder="Introduce tu nombre" required>
                    <input type="text" class="shadow-md outline-none rounded-md ps-5 p-2" v-model="profile.age" placeholder="Dinos tu edad" required>
                    <input type="text" class="shadow-md outline-none rounded-md ps-5 p-2" v-model="profile.profession" placeholder="¿En que trabajas?" required>
                </div>
                <div id="opcionales" class="flex flex-col gap-5">
                    <h3 class="font-bold">Campos opcionales</h3>
                    <input type="text" v-model="profile.currentCity" placeholder="¿En que ciudad vives?" class="shadow-md outline-none rounded-md ps-5 p-2">
                    <input type="text" v-model="profile.company" placeholder="¿Cual es tu empresa?" class="shadow-md outline-none rounded-md ps-5 p-2">
                    <textarea v-model="profile.bio" placeholder="Cuenta un poco sobre ti" class="shadow-md outline-none rounded-md ps-5 p-2 resize-none py-6"></textarea>
                </div>
            </div>
            <!-- MOTIVACIONES / MOTIVATIONS -->
            <h3 class="text-black font-bold">Motivaciones</h3>
            <div v-for="(motivacion, index) in profile.motivations" :key="index">
                <input class="shadow-md outline-none rounded-md ps-5 p-2 w-full" type="text" v-model="profile.motivations[index]" placeholder="Añade una motivacion">
            </div>
            <button class='bg-blue-600 text-white p-2 shadow-lg rounded-lg transition hover:scale-105' @click.prevent="addMotivation">Añadir motivaion</button>
            <!-- OBJETIVOS / GOALS -->
            <h3 class="text-black font-bold">Objetivos</h3>
            <div v-for="(goal, index) in profile.goals" :key="index">
                <input class="shadow-md outline-none rounded-lg ps-5 p-2 w-full" type="text" v-model="profile.goals[index]" placeholder="Añade una motivacion">
            </div>
            <button class='bg-blue-600 text-white p-2 shadow-lg rounded-md transition hover:scale-105' @click.prevent="addGoal">Añadir objetivo</button>
            <!-- PREOCUPACIONES / CONCERNS -->
            <h3 class="text-black font-bold">Preocupaciones</h3>
            <div v-for="(concern, index) in profile.concerns" :key="index">
                <input class="shadow-md outline-none rounded-md ps-5 p-2 w-full" type="text" v-model="profile.concerns[index]" placeholder="Añade una motivacion">
            </div>
            <button class='bg-blue-600 text-white p-2 shadow-lg rounded-md transition hover:scale-105' @click.prevent="addConcern">Añadir preocupacion</button>
            <button class='bg-green-600 text-white p-2 shadow-lg rounded-md transition hover:scale-105' type="sumbit">Actualizar Perfil</button>
        </form>
        <button class=" hover:scale-105 transition p-2 mt-4 bg-red-600 shadow-lg text-white rounded-md font-bold" @click="logout">Cerrar sesion</button>
    </section>
</template>

<script>
import { auth, db } from '@/db/firebase'
import { signOut } from 'firebase/auth'
import { doc, getDoc, setDoc} from 'firebase/firestore'
export default {
    name: 'PerfilView',
    data() {
        return {
            user:{
                user: null
            },
            profile:{
                fullName: '',
                profession: '',
                age: 0,
                currentCity: '',
                company: '',
                bio: '',
                image: '',
                motivations: [],
                goals: [],
                concerns: [],
            }
        }
    },
    mounted(){
            this.user = auth.currentUser
            this.handleAuthStateChange()
    },
    methods:{
        async logout(){
            try{
                await signOut(auth);
                this.$router.push({name: 'login'})
            }catch(error){
                console.error('Error al cerrar sesion.')
                
            }
        },
        async fetchProfile(){
            if (!this.user) return 
            try{
                const docRef = doc(db, 'users', this.user.uid)
                const docSnap = await getDoc(docRef)
                if(docSnap.exists()){
                    this.profile = {...docSnap.data()}
                }
            } catch(error){
                console.warn('No se encontro el perfil.', error);
            }
        },
        async saveProfile(){
            if (!this.user) return 
            try {
                const docRef = doc(db, "users", this.user.uid)
            await setDoc(docRef, this.profile)
            alert('Perfil guardado correctamente!😍❤️')
            } catch (error) {
                alert('Hubo un problema al guardar el perfil!😭💔')
            }
        },
        addMotivation(){
            this.profile.motivations.push('')
        },
        addGoal(){
            this.profile.goals.push('')
        },
        addConcern(){
            this.profile.concerns.push('')
        },
        handleAuthStateChange(){
            auth.onAuthStateChanged( (user) =>{
                if (user){
                    this.fetchProfile()
                }
            })
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