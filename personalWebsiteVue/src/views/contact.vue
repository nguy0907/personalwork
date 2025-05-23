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
      <h2>Contact</h2>

<p>If you have any questions or concerns, or even want to start a project, feel free to reach out!</p>
<!-- Form -->
<div id="form">
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">First Name</label>
  <br> <br> 
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="John">
</div>
<br>
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Last Name</label>
  <br><br> 
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Doe">
</div>
<br>
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email Address</label>
  <br><br> 
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<br>
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <br><br> 
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="6136196969">
</div>
<br>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
  <br><br> 
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<br>
<button>Submit</button>
</div>
     <br>
<footer>
&copy; RichRealDeal 2025    
</footer>
</div>

</template>

<script></script>

<style>
label{
    font-size:15px;
}
</style>