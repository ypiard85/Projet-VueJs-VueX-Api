<template>
    <div class="container">
        <div class="card">
            <div class="card-header" >
              {{ $route.params.title }}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                  {{ $route.params.body }}
              </li>
              <li class="list-group-item">
                Article n° : {{  $route.params.id }}
              </li>
              <li class="list-group-item">
                userID : {{  $route.params.userId }}
              </li>
            </ul>
          </div>
            <a href="/api"><button class="btn btn-primary mt-4">Revenir aux articles</button></a>
    </div>
</template>


<script>

    export default{
        name:'apiChild',
    }
</script>


