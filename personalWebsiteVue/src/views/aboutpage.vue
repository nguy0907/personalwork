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
            <router-link :to="'/contact'">
                <a id="pageLink">Contact</a>
            </router-link>
        </div>

    </div>

    
<div>
    <h2>About</h2>

    <p>I recently completed the Computer Programming course at Algonquin College.
        My previous program was Interactive Media Design. </p>

        <p>Coding has always been my interest. I started getting into the coding field in 2017. That
            was when I took my first programming class in high school.
        </p>

  <section class="goal">  
    <h2> Goal </h2>
    <ul class= "goal-list">
        <li class= "goals"> To become a freelancer </li>     
        <li class= "goals"> Enjoy my moment in college, have fun and learn something new. </li>
        <li class= "goals"> Live the best life I can ever live. Every moment should be enjoyable. </li>
    </ul>
   
</section>

<section class="skill">
    <h2> Skills </h2>
    <ul class= "skill-list">
        <li class= "skill"> Coding using html and css. </li>     
        <li class= "skill"> Always working hard and willing to learn. </li>
        <li class= "skill"> Designing arts using various Adobe Programs, such as Illustrator, Photoshop... </li>
        <li class= "skill">Excellent with Java.</li>
        <li class= "skill">Experiences with SQL, Python, and COBOL.</li>
        <li class= "skill">Experiences with Android Studio.</li>
   </ul>
  
</section>

        <p>I am opened to learning different language :D</p>

        <img src="https://picsum.photos/200/300?random=1">
</div>

<footer>
&copy; RichRealDeal 2025    
</footer>
</template>

<script></script>

<style>
img{
    text-align: center;
}
a{
    text-decoration: none;
       color: black;
}

ul li{
    text-align: left;
 
}
li{
       list-style:outside;
       margin-bottom:1rem;
        line-height: normal; 
}

section{
    margin-left:2rem;
}
p{
 text-align: left;    
 
}

.goal{
    width: auto;
 
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
}
</style>