<template>
<div>
    <div class="card shadow">
        <div class="card-header bg-primary text-white">
            <h3>AddTodo Here</h3>  
        </div>
        <div class="card-body">
            <form @submit.prevent="Addtodo">
                <div class="form-group">
                    <label for="Item">Item's Name</label>
                    <input type="text" placeholder="Item" id="Item" v-model="item" class="form-control" >
                </div>
                <div class="form-group">
                    <label for="Price"> Price</label>
                    <input type="text" placeholder="Price" id="Price" v-model="price" class="form-control" >
                </div>
                <div class="form-group">
                    <label for="Quantity"> Quantity</label>
                    <input type="text" placeholder="Quantity" id="Quantity" v-model="quantity" class="form-control" >
                </div>
                <div class="form-group d-flex justify-content-center">
                <input type="submit" name="submit" value="Add to List">
                </div>
            </form>
            <div class="alert alert-danger" v-if="invalidForm"> Please fill all the forms</div>
        </div>
    </div>
</div>
    
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Interface from 'views/Interface';
    import axios from 'axios';
    import {AxiosResponse} from 'axios';

    @Component
    export default class AddTodo extends Vue{
        @Prop() Items!: Interface[];
        price: string = "";
        item: string = "";
        quantity: string = "";
        invalidForm: boolean = false;
        
        addTodo() {
            if(this.price!="" && this.item!="" && this.quantity!="" ){
                this.$emit('adder', {item: this.item, price: Number(this.price), quantity: Number(this.quantity), id: this.Items.length+1 } )
                console.log(this.Items);
                this.invalidForm = false;
            }else{
                this.invalidForm=true;
                setTimeout((()=>{return  this.invalidForm = false;}),3000)
              
            }
        };
        public Addtodo() {
            if(this.price!="" && this.item!="" && this.quantity!="" ){
                axios.post('http://localhost/visual/product/Adder_actualizer.php', {item: this.item, price: Number(this.price), quantity: Number(this.quantity)})
                .then((response: AxiosResponse) => {
                    console.log(response.data);
                })
                .catch((err) => {                       
                    console.log(err);
                });
            }else{
                this.invalidForm=true;
                setTimeout((()=>{return  this.invalidForm = false;}),3000);
            }
        }
        
}
</script>


<style>

</style>
