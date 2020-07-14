<template>
    <div >        
            <li class="list-group-item" :class="{buy: course.acheter}" ><span @click="produitAcheter">{{ course.article }} </span> 
                <button class="btn btn-danger float-right" @click="deleteArticle" >Delete</button>
                <div style="clear: both;"></div>
            </li>          
    </div>
</template>


<script>

    export default{
        props: ['course'],

        methods:{
            deleteArticle(){
                this.$store.dispatch('delete_article', this.course)
            },

            produitAcheter(){
                this.$store.dispatch('status_change', this.course)
            }
        }
    }

</script>

<style scoped>
    .buy{
        text-decoration: line-through;
        background-color: rgba(0, 0, 0, 0.178);
    }

    li{
        cursor: pointer;
    }
</style>