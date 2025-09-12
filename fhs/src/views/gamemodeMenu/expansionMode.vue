<template>
       <br> <br>
    <div class="row">
    <div class="col">
        <h1 class="display-4">Expansion Mode</h1>

    </div>
    </div>

    <div>
        <div>
            <label for="teamName">Team Name</label>
            <br>
              <input type="text">
        </div>
        <br>
         <div>
            <label for="teamAbbreviation">Team Abbreviation</label>
            <br>
              <input type="text">
        </div>
<br>
        <form class="location">
            <label for="location">Location</label>
            <br>
            <select name="city" id="city">
                <option value="">Atlanta</option>
            </select>

            <br> <br>
                 <label for="country">Country</label>
            <br>
            <select name="city" id="city">
                <option value="">Canada</option>
            </select>
        </form>
        <br>
           <div>
            <label for="arenaName">Arena Name</label>
            <br>
              <input type="text">
        </div>
    </div>
    <br> <br>
          <router-link :to="'/GameMode/'">
          <button :to="'/GameMode/'">Back</button>
          </router-link>
</template>

<style>
div{
    text-align: center;
 
}

</style>