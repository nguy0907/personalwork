<template>

    <br> <br>
    <div class="row">
    <div class="col">
        <h1 class="display-4">Quick Game</h1>

    </div>
    </div>

    <!-- Team selections -->
    <br> <br>
<div class="container text-center">
       <div class="row align-items-start">
        <form class="away col">
          <select >
            <option>
              Anaheim Ducks
            </option>
          </select>
        </form>

        <form class="home col">
          <select >
            <option>
              Anaheim Ducks
            </option>
          </select>
        </form>
</div>
</div>
    
    <br> <br>
    
         <div class="menu">
          
          <router-link :to="'/GameMode/' + Menu">
          </router-link>
    
          <br> <br>
       
          <router-link :to="'/'">
          <button :to="'/'" >Back</button>
          </router-link>
    </div>
  </template>
  
  <script></script>
  
  <style></style>