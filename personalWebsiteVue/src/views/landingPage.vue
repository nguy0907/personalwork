<template>
   
   
    <h1>Welcome to the RichRealDeal Website!</h1>

<div id="container">
  
<router-link :to="'/homepage/' ">
<button id="startButton">Click here to start!</button>
</router-link>

</div>

</template>

<script>
</script>
<style>

h1{
  margin-top:-20rem;
  margin-bottom: 3rem;


}

#container{
  text-align: center;
width: auto;
margin: auto;
}

button{
  font-size: 20px;

}
</style>