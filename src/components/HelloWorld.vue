<template>
  <div >
    <div class="card shadow shadow-bg">
        <div class="card-header bg-primary text-white">
            <h3>TODOLIST</h3>  
        </div>
        <div class="card-body">            
          <table class="table table-hover">
            <thead>
              <tr>
                <th><strong>S/N</strong> </th>
                <th><strong>INDEX</strong> </th> 
                <th><strong>ITEM</strong></th>
                <th><strong>PRICE</strong></th>
                <th><strong></strong>QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(Item, index) in Items" :key="Item.id">
                <td>{{Item.id}}</td>
                <td>{{index}} </td>
                <td>{{Item.item}}</td>
                <td>{{Item.price}}</td>
                <td>{{Item.quantity}} <span @click="deleter(Item.id)" class="ml-3 badge badge-danger">&times;</span> </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  </div>
   
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import Interface from 'views/Interface'
@Component

  export default class HelloWorld extends Vue {
    @Prop() private Items!:Interface[] ; 

    // deleter(e:number){
    //   this.$emit("Del", e)
    // }
     deleter(e:number){
      this.$emit("Del", e)
    }
  }
</script>

<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
