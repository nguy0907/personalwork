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

    <div>
        <h2>Portfolio</h2>

        <p>Here are some of my best work! Some of my work are personal work or past assignments that I
            am proud of.
        </p>

        <div class="card" style="width: 18rem;">
            <img src="/images/landingPage.PNG" class="card-img-top" alt="...">
            <div class="card-body">
                <h3>Landing Page Recreation</h3>
                <br>
                <p class="card-text">This was an assignment where I had to recreate the landing page
                    with the exact detail from structure to decoration. </p>
            </div>
        </div>
        <br>
        <div class="card" style="width: 18rem;">
            <img src="/images/oldwebsite.PNG" class="card-img-top" alt="...">
            <div class="card-body">
                <h3>2021 Website from Interactive Media Design</h3>
                <br>
                <p class="card-text">This was an assignment where I had to recreate the landing page
                    with the exact detail from structure to decoration. </p>
            </div>
        </div>
        <br>
        <div class="card" style="width: 18rem;">
            <img src="/images/python.PNG" class="card-img-top" alt="...">
            <div class="card-body">
                <h3>Python Self-Learn Project</h3>
                <br>
                <p class="card-text">A mini project where I learned Python from scratch for 
                    my programming language research class. 
                </p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
    img {
        object-fit: fill;
        width: 100%;
        min-width: auto;
    }
</style>