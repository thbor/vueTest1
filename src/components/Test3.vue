<template>
    <div class="postList">
        <!-- <router-link :to="{name:'user',params:{userId:123}}">user</router-link> -->
        <!-- 跳转到在router中定义的路径 -->
        <!-- <router-link :to="{name:'Test2'}" >跳转到test2</router-link>
        <router-link :to="{name:'List',params:{userId:123}}" >跳转到test1,路径后面加id</router-link> -->
     
       
        <div>
            <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                   <div v-if="loading">
            loading...
        </div>
          <!-- <img src="../assets/2.jpg" :title="fj1"> 风景1 -->
        <div v-else>
           <!-- <div v-for="view in views">
                {{view.img}}
            </div> -->
            <ul>
                <!-- <span>统一跳转到一个页面，给每个页面不同的地址参数</span> -->
                <li v-for="view in views" :key="view.title">
                    <router-link :to="{name:'Content',params:{userId:view.name}}" :title="view.name">
                        <!-- <img :src="view.img" /> 风景1  路径为:{{view.img}} -->
                        <img :src="view.img" v-bind:style="imgStyle">
                        {{view.description}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
        </el-col>
            <el-col :span="18">
                <div class="grid-content bg-purple">
                    <div>
                        <Test4/>
                        <!-- <Comments :content="content"/> -->
                        <!-- <Test4 :content="content"/> -->
                    </div>  
                </div>
            </el-col>
        </el-row>
        </div>
    </div>

    
</template>
<script>
import axios from 'axios'
//1.引入组件
import Test4 from '../components/Test4'
// import Comments from '../components/Comments'
export default {
    data(){
        return{
            views:{},
            imgStyle:{
                width:"30px",
                height:'30px'
            },
            loading:false,
    
        }
    },
    mounted(){
        const url = "../static/start.json/";
        let ttt = axios.get(url).then(Response=>{
           
                this.views = Response.data.start;
                return Response.data.start;
        });
        // console.log(ttt.then(data=>console.log(data)));
       
       
    },
    methods:{
        //添加评论
        // addContent(content){
        //     this.content.unshift(content)
        // },
        
    },
    //2.映射组件
    components:{
        Test4,
        // Comments
    }
   
}
</script>
<style>

</style>