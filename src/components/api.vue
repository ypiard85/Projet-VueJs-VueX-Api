<template>
    <div class="container">
        <button v-if="!add" class="btn btn-primary mt-4 mb-4" @click="ajouter" >Ajouter un article</button>        
        <button v-else class="btn btn-primary mt-4 mb-4" @click="ajouterReset" >Annuler l'ajout</button>

        <div v-if="add" >
            <div class="form-row">
              <div class="col-md-1 mb-3" >
                <label for="validationDefault0">article </label>
                <div>
                    <input type="number" class="form-control" id="validationDefault0" v-model="id" >
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="validationDefault01">Title</label>
                <input type="text" class="form-control" id="validationDefault01" v-model="title" >
              </div>
              <div class="col-md-6 mb-3">
                <label for="validationDefault02">Body</label>
                <input type="text" class="form-control" id="validationDefault02" v-model="body">
              </div>
              <div class="col-md-1 mb-3">
                <label for="validationDefault03">userId</label>
                <input type="number" class="form-control" id="validationDefault03" v-model="userId">
              </div>
            </div>        
            <button class="btn btn-success mb-4 btn-sm" type="submit" @click="newPost">Ajouter</button>
            <p>{{message}}</p>
        </div>


        <div v-if="!add">
            <div v-for="(item,index) in items" :key="index" >
                    <a :href="'/api/posts/' + item.id + `/` + item.title + `/` + item.body + `/` + item.userId">
                        <div class="card">
                            <div class="card-body">
                            {{ item.id }} : {{ item.title }}
                            </div>
                        </div>
                        </a>  
                    </div>
            </div>
        </div>
        
</template>



<script>

import axios from 'axios'

    export default{
        name: "api",

        data(){
            return{
                add: false,
                ajout: null,
                items: [],
                id: '',
                title: '',
                body: '',
                userId: '',
                message: '',
                
            }
        },
        mounted(){
             axios.get('https://jsonplaceholder.typicode.com/posts').then(res => this.items = res.data)
        },

        methods:{
            ajouter(){
                this.add = true
            },
            ajouterReset(){
                this.add = false
            },
            newPost(){
                if(this.id === '' || this.title === '' ||this.body === '' || this.userId === '' ){
                    this.message = "ATTENTION PAS DE CHAMPS VIDE !"  
                }else{
                  axios.post('https://jsonplaceholder.typicode.com/posts/', {
                    id: this.id,
                    title: this.title,
                    body: this.body,
                    userId: this.userId
                }).then(res => console.log(res))               
                this.message = "Post ajouter avec succè, regarder la console !"               
                this.id = null,
                this.title = null,
                this.body = null
                this.ajout = 'success'
                }
                
            },
            menuUp(){
                
            }
        }
        
    }
</script>