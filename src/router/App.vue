<template>
    <div>
        <header class="App">
        <ul>            
            <li><router-link to="/" >Image</router-link></li>
            <li><router-link to="/api" >API</router-link>  </li>
            <li><router-link to="/vuex" >VueX</router-link>  </li>
        </ul>
    </header>
    <router-view></router-view>
    </div>
    

</template>



<script>
    export default{
        
    }

</script>

<style scoped>
    header{
        background-color: aquamarine;
    }
    .App li{
        display: inline;
        
    }

    .App ul{
        padding: 20px;
    }
    .App{
        text-align: center;
    }

    .App a{
        margin: 0 20px;
        font-size: 22px;
    }

</style>