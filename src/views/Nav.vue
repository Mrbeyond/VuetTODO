<template>
   <nav class="navbar navbar-expand-sm ">
       <a class="navbar-brand" href="#"><span class="fas fa-car fa-spin fa-2x"></span></a>
       <button class="navbar-toggler" data-toggle="collapse" data-target="#Items" ><span class="fas fa-bars"></span></button>
       <div class=" collapse navbar-collapse d-md-flex justify-content-end" id="Items">
           <ul class="navbar-nav  shadow font-weight-bolder " id="ull">
               <li class="navbar-item px-3 rounded shadow-lg pt-3 mx-2 my-2" ><router-link to="/">Home</router-link></li>
               <li class="navbar-item px-3 rounded shadow-lg pt-3 mx-2 my-2" ><router-link to="/About">About</router-link></li>
               <li class="navbar-item px-3 rounded shadow-lg pt-3 mx-2 my-2" ><router-link to="/Contact">contact</router-link></li>
               <li class="navbar-item px-3 rounded shadow-lg pt-3 mx-2 my-2" ><router-link to="/Login">Login</router-link></li>
           </ul>
       </div>

   </nav>

</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class Nav extends Vue{


}    
</script>


<style>
    *{font-family: century gothic;}
			
</style>
