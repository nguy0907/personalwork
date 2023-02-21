<template>

    <br> <br>
    <div class="row">
    
    <div class="col">
        <h1 class="display-4">FHS</h1>
    </div>
    
    </div>
    
    <br> <br>
    
         <div class="menu">
          
          <router-link :to="'/GameMode/' + Menu">
          </router-link>
    
          <br> <br>
          <button>Controls</button>
          <br> <br>
          <button>Audio</button>
          <br> <br>
          <button>Graphics</button>
          <br> <br>
          <router-link :to="'/'">
          <button :to="'/'" >Back</button>
          </router-link>
    </div>
    
    </template>
    
    <script></script>
    
    <style> </style>