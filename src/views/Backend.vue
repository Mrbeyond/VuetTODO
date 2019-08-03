<template>
    <div>
        {{test}} {{error}}
    </div>
</template>

<script lang="ts">
import{Component, Vue} from 'vue-property-decorator';
import { AxiosResponse } from 'axios';
import axios from 'axios';
// import  Service from 'views/Service'


@Component
export default class Backend extends Vue {

    public test: string = '';
    public error: string = '';
   
   
    public created() {
        /*this.$http*/axios.post('http://localhost/visual/product/welcome.php').then((response: AxiosResponse) => {
        this.test = response.data;
            }).catch((err) => {
                err = " problem with backend";
                this.error = err;
        });
    }
}
</script>


<style>

</style>


