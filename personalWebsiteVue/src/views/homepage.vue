<template>


    <div id="Menu">
        <div id="option">
            <router-link :to="'/aboutpage'" >
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



    <h2>Welcome</h2>

    <p>Welcome to my website! My name is Rich, and I am a programmer. If you would like to know more
        about me, then go to the about page and learn more. </p>

        <p>On this website, you will learn who I am, what work I provide for you, and how you can contact me.</p>

    <img src="https://picsum.photos/200/300?random=1">

    <p>If you like my content, feel free to subscribe to get notified!</p>
    
    <button>Subscribe</button>
        <br><br>
    <p>Hope you enjoy your stay! </p>

    <br>

    <footer>
        &copy; RichRealDeal 2025
    </footer>
</template>

<style>

    h2{
    font-size: larger;
    text-align: center;
    margin-top:1rem;
    margin-bottom: 1rem;
    }

    p{
    margin-bottom: 1rem;    
    }

    p, h2{
     font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
     line-height: normal;   
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