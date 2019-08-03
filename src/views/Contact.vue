<template>
    <div>
        {{msg}}
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
@Component
export default class Contact extends Vue{
   msg: string = "I am Contact";
 /*   private created() {
		console.log('The app is created!');
	}

	private mounted() {
		console.log('The app is mounted!');
    }*/
}
</script>


<style>

</style>
