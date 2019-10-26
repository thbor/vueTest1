
<template>
<!-- 交互添加案例 -->
    <div>

<el-container>
  <el-header>修改对应的属性</el-header>
  <el-container>
    
    <el-main>
       <div>
                <el-row >
                    <el-col ><div class="grid-content bg-purple-dark">
                        <label for="username">用户名</label><br>            
                        <el-input id="username" v-model="username" placeholder="用户名"></el-input><br>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col ><div class="grid-content bg-purple-dark">
                        <label for="comment">评论内容</label><br> 
                        <el-input type="textarea" placeholder="评论内容" id="comment" v-model="comment" ></el-input><br>              
                        <el-button type="primary" @click="updateData">提交</el-button>
                        </div>
                    </el-col>
                </el-row> 
            </div>
    </el-main>
  </el-container>
</el-container>




        
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            //TODO 对象传过来的信息
            username:'',
            comment:'',
        }
    },
    methods:{
        //修改
        updateData(){
            //1.检查输入合法
            const username = this.username.trim();
            const comment = this.comment.trim();
            if(!username || !comment){
                alert("用户名或评论内容不能为空")
            }else{
            //2.根据输入数据，封装comment对象
            const content ={username,comment};
            //3.添加到comments中
            // this.content.unshift(content)
            console.log(content)
            //TODO 将原有信息替换成现在修改的信息
            // 将 str 中的 a 替换为 A
            // var str = 'abcabcabc';
            // var result = str.replace('a', 'A');
            // console.log('result:' + result);  
            // this.content.replace(content)
            //跳转回去页面
            }
            
        },
      
        update(index){
            
        
            //1.获取index对应的object
            //2.修改对应的属性
        }
    },
   
}
</script>
<style>
    .el-header{
        color: #333;
        background-color:#B3C0D1;
        text-align: center;
        line-height: 60px
    }
    .el-main{
        color: #333;;
        background-color: #E9EEF3;
    }
    .el-aside{
        color: #333;;
        background-color: #E9EEF3;
    }
</style>