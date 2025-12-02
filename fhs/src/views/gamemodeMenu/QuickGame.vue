<template>

    <br> <br>
    <div class="row">
    <div class="col">
        <h1 class="display-4">Quick Game</h1>

    </div>
    </div>

<!-- Away -->
    <!-- Team selections -->
    <br> <br>
<div class="container text-center">
       <div class="row align-items-start">
        <form class="away col">
          <select class="teams" v-model="selectedAwayTeam">
            <option disabled value ="">Select a team </option>
            <option>Anaheim Ducks</option>
            <option>Arizona Coyotes</option>
            <option>Boston Bruins</option>
            <option>Buffalo Sabres</option>
            <option>Calgary Flames</option>
            <option>Carolina Hurricanes</option>
            <option>Chicago Blackhawks</option>
            <option>Colorado Avalanche</option>
            <option>Columbus Blue Jackets</option>
            <option>Dallas Stars</option>
            <option>Detroit Red Wings</option>
            <option>Edmonton Oilers</option>
            <option>Florida Panthers</option>
            <option>Los Angeles Kings</option>
            <option>Minnesota Wild</option>
            <option>Montreal Canadiens</option>
            <option>Nashville Predators</option>
            <option>New Jersey Devils</option>
            <option>New York Islanders</option>
            <option>New York Rangers</option>
            <option>Ottawa Senators</option>
            <option>Philadelphia Flyers</option>
            <option>Pittsburgh Penguins</option>
            <option>San Jose Sharks</option>
            <option>Seattle Kraken</option>
            <option>St Louis Blues</option>
            <option>Tampa Bay Lightning</option>
            <option>Toronto Maple Leafs</option>
            <option>Vancouver Canucks</option>
            <option>Vegas Golden Knights</option>
            <option>Washington Capitals</option>
            <option>Winnipeg Jets</option>
            
          </select>

          <!-- Year Options -->
          <select v-model="awayRosterDate">
            <option> Current Roster</option>
            <option>Past Roster</option>
          </select>
      
      <!-- League options -->
          <select class="league" v-model="leaguesAway">
            <option disabled value =""> Leagues </option>
            <option>NHL</option>
            <option>AHL</option>
            <option>CHL</option>
            <option>ECHL</option>
            <option>KHL</option>
          </select>
        </form>
        
        <p>Away: {{ selectedAwayTeam }} {{ leaguesAway }}</p>

        <!-- Home -->
        <form class="home col">
          <select class="teams" v-model="selectedHomeTeam">
            <option disabled value ="">Select a team </option>
            <option>Anaheim Ducks</option>
            <option>Arizona Coyotes</option>
            <option>Boston Bruins</option>
            <option>Buffalo Sabres</option>
            <option>Calgary Flames</option>
            <option>Carolina Hurricanes</option>
            <option>Chicago Blackhawks</option>
            <option>Colorado Avalanche</option>
            <option>Columbus Blue Jackets</option>
            <option>Dallas Stars</option>
            <option>Detroit Red Wings</option>
            <option>Edmonton Oilers</option>
            <option>Florida Panthers</option>
            <option>Los Angeles Kings</option>
            <option>Minnesota Wild</option>
            <option>Montreal Canadiens</option>
            <option>Nashville Predators</option>
            <option>New Jersey Devils</option>
            <option>New York Islanders</option>
            <option>New York Rangers</option>
            <option>Ottawa Senators</option>
            <option>Philadelphia Flyers</option>
            <option>Pittsburgh Penguins</option>
            <option>San Jose Sharks</option>
            <option>Seattle Kraken</option>
            <option>St Louis Blues</option>
            <option>Tampa Bay Lightning</option>
            <option>Toronto Maple Leafs</option>
            <option>Vancouver Canucks</option>
            <option>Vegas Golden Knights</option>
            <option>Washington Capitals</option>
            <option>Winnipeg Jets</option>
            
          </select>

          <!-- Year Options -->
        
          <select v-model="homeRosterDate">
            <option> Current Roster</option>
            <option>Past Roster</option>
          </select>
       
  <!-- League options -->
  <select class="league" v-model="leaguesHome">
            <option disabled value =""> Leagues </option>
            <option>NHL</option>
            <option>AHL</option>
            <option>CHL</option>
            <option>ECHL</option>
            <option>KHL</option>
          </select>
        </form>

        <p>Home: {{ selectedHomeTeam }} {{ leaguesHome }}</p>
</div>
</div>
    
         <div class="menu">
          
          <router-link :to="'/GameMode/' + Menu">
          </router-link>
    
          <br> <br>
       
<button>Start</button>
<br> <br>
          <router-link :to="'/GameMode/'">
          <button :to="'/GameMode/'">Back</button>
          </router-link>
    </div>
  </template>
  
  <script>
export default{
  data: function(){
    return{
      selectedAwayTeam: "",
      selectedHomeTeam: "",
      homeRosterDate: "",
      awayRosterDate: "",
      pastYearHome: "",
      pastYearAway: "",
      leaguesHome: "",
      leaguesAway: ""
    }
  }
}

if (leaguesHome = "AHL"){
text = ' <p>Aeeeee</p>';
}

  </script>
  
  <style>
    
  </style>