<template>

    <br> <br>
    <div class="row">
    
    <div class="col">
        <h1 class="display-4">FHS</h1>
    </div>
    
    </div>
    
    
         <div class="menu">
          
          <router-link :to="'/GameMode/' + Menu">
          </router-link>
    
          <br> <br>
          <router-link :to="'/Gamemode/QuickGame'">
      <button>Quick Game</button>
      </router-link>
          <br> <br>
          <router-link :to="'/Gamemode/expansionMode'">
           <button>Expansion Mode</button> 
          </router-link> 
          <br> <br>
          <button>Custom Games</button>
          <br> <br>
          <button>Historical Games</button>
          <br> <br>
          <router-link :to="'/'">
          <button :to="'/'" >Back</button>
          </router-link>
    </div>
    
    </template>
    
    <script></script>
    
    <style> </style>