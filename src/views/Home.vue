<template>
  <div class="mt-3">
    <div class="row containerfluid">
      <div class="col-md-8">
        <HelloWorld  :Items="Product" @Del="deleter" />
      </div>
      <div class="col-md-4">
        <AddTodo :Items="Product" @adder="addToProduct" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  import AddTodo from '@/views/AddTodo.vue';
  import Interface from 'views/Interface';
  import { AxiosResponse } from 'axios';
import axios from 'axios';

 

  @Component({
    components: {
      HelloWorld,
      AddTodo,
    },
  })

  export default class Home extends Vue {

    public test: string = '';
    public error: string = '';
    public cond_error: boolean = false;

      Product: Interface[] = [];
     

    addToProduct(param:Interface ){
      this.Product.push(param);
    }

    /* using index with splice*/
    // deleter(e:number){
    //   this.Product.splice(e, 1);
    // }

    public created() {
       axios.post('http://localhost/visual/product/Select_product.php').then((response: AxiosResponse) => {
         this.Product= response.data;
            console.log(this.Product);
          if(this.Product){
            }
         }) 
            .catch((err) => {
              err = " problem with backend";
                this.cond_error= true;
                this.error = err;
        });
    }

    /* using filter with product_Id*/
    deleter(e: number){
    this.Product=  this.Product.filter((tem)=>{return tem.id !== e })
    }
  }
  
  
  /* [
      {Item:"Spoon", Price: 2000, Quantity: 5, Id: 1},
      {Item:"Plate", Price: 300, Quantity: 10, Id: 2},
      {Item:"Pot", Price: 4500, Quantity: 20, Id: 3},
      {Item:"Bowl", Price: 5000, Quantity: 15, Id: 4},
      {Item:"Fork", Price: 2200, Quantity: 9, Id: 5},
      {Item:"Cup", Price: 8000, Quantity: 7, Id: 6}
    ]*/
        /*.map((app:Interface)=>{
          return {Item:app.item, Price: app.price, Quantity:app.quantity, id: app.id};
          })*/
</script>
<style>

</style>

