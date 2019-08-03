<template>
    <div>
        {{message}}
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Login extends Vue{
message:string="I am Login";
}
</script>


<style>

</style>
