<template>
  <div id="app">
     <nav class="navbar navbar-expand-sm ">
       <a class="navbar-brand" href="#"><span class="fas fa-car fa-spin fa-2x"></span></a>
       <button class="navbar-toggler" data-toggle="collapse" data-target="#Items" ><span class="fas fa-bars text-primary"></span></button>
       <div class=" collapse navbar-collapse d-md-flex justify-content-end" id="Items">
           <ul class="navbar-nav  shadow font-weight-bolder  shadow" id="ull">
               <li class="navbar-item px-3 rounded shadow-lg pt-3 mx-2 my-2" ><router-link class="text-white" to="/">Home</router-link></li>
               <li class="navbar-item px-3 rounded shadow-lg pt-3 mx-2 my-2" ><router-link class="text-white" to="/About">About</router-link></li>
               <li class="navbar-item px-3 rounded shadow-lg pt-3 mx-2 my-2" ><router-link class="text-white" to="/Contact">Contact</router-link></li>
               <li class="navbar-item px-3 rounded shadow-lg pt-3 mx-2 my-2" ><router-link class="text-white" to="/Login">Login</router-link></li>
           </ul>
       </div>

   </nav>
    <router-view/> 
  </div>
</template>

<style>
#app {
  font-family: century gothic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  #ull>li{
				height:60px;
        color: white;
				background-color:#33b5e5;
			}
/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
} */

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
