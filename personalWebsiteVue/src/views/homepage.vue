<template>

    <div id="Menu">
        <div>
            <router-link :to="'/aboutpage'">
                <a>About</a>
            </router-link>
        </div>
        <div>
            <a href="/">Service</a>
        </div>

        <div>
            <a href="/">Contact</a>
        </div>

    </div>



    <h2>Welcome</h2>

    <p>Welcome to my website! My name is Rich, and I am a programmer. </p>

    <img src="https://picsum.photos/200/300?random=1">

    <p>Hope you enjoy your stay! </p>

    <br>

    <footer>
        &copy; RichRealDeal 2025
    </footer>
</template>

<style>
    a {
        text-decoration: none;
        color: black;
    }


</style>