<template>
    <div class="container">
        <input :class="{bgerror: error }"  type="text" class="mb-2" v-model="newOne" />
        <button class="btn btn-info btn-sm" @click="newArticle" >Ajouter</button>

        <p>Produits acheter: {{ countAcheter }} </p>
        <p>Produits restant à acheter:  {{countPasAcheter}} </p>
        <ul class="list-group" align="center">
            <li class="list-group-item active" >Liste de course</li>

            <CourseList v-for="(course, index) in courses" :key="index" :course="course" />

        </ul>

    </div>
</template>




<script>
import { mapState, mapGetters } from 'vuex'
import CourseList from './courseList'

    export default{
        components:{
            CourseList
        },

        data(){
            return{
                newOne: ' ',
                error: false
            }

        },

        computed:{
            ...mapState({
                courses: 'courses'
            }),

            ...mapGetters({
                countAcheter: 'countAcheter',
                countPasAcheter: 'countPasAcheter'
            })
        },

        methods:{
            newArticle(){
                if(this.newOne != ' ' ){
                    this.$store.dispatch('add_article', this.newOne)
                    this.newOne = ''
                    this.error = false
                }else{
                     this.error = true
                }
                

            }
        }

  
    }
</script>

<style scoped>
    .bgerror{
        background-color: rgba(255, 0, 0, 0.329);
    }
</style>