<template>
     <div id="Menu">
           <div>
            <router-link :to="'/homepage'">
                <a id="pageLink">Home</a>
            </router-link>
        </div>
        <br>
        <div>
            <router-link :to="'/aboutpage'">
                <a id="pageLink">About</a>
            </router-link>
        </div>
        <br>
        <div>
              <router-link :to="'/services'">
                <a id="pageLink">Service</a>
            </router-link>
        </div>
        <br>
        <div>
            <router-link :to="'/contact'">
                <a id="pageLink">Contact</a>
            </router-link>
        </div>

    </div>


    <div>
         <h2>Services</h2>

         <div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/200/300?random=1" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Web designing using HTML, CSS, and JavaScript. Will also use Vue as the main framework.</p>
  </div>
</div>

         <div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/200/300?random=1" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Coding applications using Java as my main language. Will also consider using Python
   , because it is a language that I learned on my own.  </p>
  </div>
</div>


         <div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/200/300?random=1" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Create applications using Android Studio. A software where you design and testing it 
        through different phone screens.
    </p>
  </div>
</div>

<footer>
&copy; RichRealDeal 2025    
</footer>
    </div>
</template>

<script></script>

<style>
p{
    line-height: normal; 
}
</style>