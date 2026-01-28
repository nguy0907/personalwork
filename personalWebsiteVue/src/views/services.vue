<template>
     <div id="Menu">
           <div id="option">
            <router-link :to="'/homepage'">
                <a id="pageLink">Home</a>
            </router-link>
        </div>
        <br>
        <div id="option">
            <router-link :to="'/aboutpage'">
                <a id="pageLink">About</a>
            </router-link>
        </div>
        <br>
        <div id="option">
              <router-link :to="'/services'">
                <a id="pageLink">Service</a>
            </router-link>
        </div>
             <br>
             <div id="option">
            <router-link :to="'/portfolio'">
                <a id="pageLink">Portfolio</a>
            </router-link>
        </div>
        <br>
        <div id="option">
            <router-link :to="'/contact'">
                <a id="pageLink">Contact</a>
            </router-link>
        </div>

    </div>


    
         <h2>Services</h2>
<div id="cards">
         <div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/200/300?random=1" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Web designing using HTML, CSS, and JavaScript. Will also use Vue as the main framework.</p>
  </div>
</div>

         <div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/200/300?random=1" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Coding applications using Java as my main language. Will consider using Python
   , because it is a language that I learned on my own.  </p>
  </div>
</div>


         <div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/200/300?random=1" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text3" >Create applications using Android Studio. A software where you design and testing it 
        through different phone screens.
    </p>

  </div>
</div>

    </div>

    <button>Click to view more</button>

    
 <footer>
&copy; RichRealDeal 2025    
</footer>   
</template>

<script></script>

<style>
p{
    line-height: normal; 
}

button{
    margin-bottom:5rem;
}
@media screen and (min-width: 768px) {
    p{
        text-align: center;
    }

    #Menu{
display: flex;
text-align: center;
    }
    #option{
        margin: auto;
    }

    #cards{
        display: flex;
     
    }

    #card-text3{
        margin-bottom: 0;
    }
}
</style>