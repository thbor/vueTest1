<template>
<!-- 动画练习 -->
    <div>
       <button @click="show = !show">Toggle</button>
       <transition name="fade">
           <p v-if="show">hello</p>
       </transition>

    </div>
</template>
<script>
export default {
    data(){
        return{
            show:true
        }
    },
    methods:{
        
    }
}
</script>
<style>
    .fade-enter-active, .fade-leave-active{
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave{
        opacity: 0;
    }
</style