<template>
    <div>
        <div >{{msg}}</div>
        <span v-html="msg"></span>
    </div>
</template>>
<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
    export default{
       data(){
           return{
               msg:'123'
           }
       },
       

    }
</script>
<style>

</style>