
<template>
<!-- 交互添加案例 -->
    <div>

<el-container>
  <el-header>请发表对Vue的评论</el-header>
  <el-container>
    <el-aside width="500px">
           <!-- 左边 -->
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
                        <el-button type="primary" @click="add">提交</el-button>
                        </div>
                    </el-col>
                </el-row> 
            </div>
    </el-aside>
    <el-main>
        <el-row >
            <el-col >
                <span>评论回复：</span><br>
                    <h2 v-show="content.length === 0">暂无评论,点击左侧添加评论</h2>
                    <div class="grid-content bg-purple-dark">
                        <tr v-for="(c,index) in content" :key="c.comment">
                                {{c.username}}--{{c.comment}}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <router-link :to="{name:'Update',params:{object:c}}">
                                        <button type="button" class="el-button el-button--primary is-circle" @click="update(c)">
                                            <i class=" el-icon-edit"></i>
                                        </button>
                                     </router-link>
                                <button type="button" class="el-button el-button--danger is-circle" @click="del(index)">
                                    <i class="el-icon-delete"></i>
                                </button>
                             </tr>
                        </div>
                        
            </el-col>
        </el-row>
    </el-main>
  </el-container>
</el-container>

        <!-- 过滤器学习 -->
            <div id="test">
                <h2>显示格式化日期</h2>
                <p>{{date}}</p>
                <!-- <p>年月日{{date | dateString('YYYY-MM-DD')}}</p>
                <p>时分秒{{date | dateString('HH:mm:ss')}}</p> -->
            </div>
           

        <!-- 过滤器学习 --end -->
        <!--ref学习  引用this.$refs.refStudy.innerHTML-->
            <div ref="refStudy">ref学习</div>
            <button @click="hint">提示</button>
            <p>{{testMsg}}</p>
        <!--ref学习 --end-->
        <!--v-clock学习 :防止闪现-->
            <p v-cloak>{{vCloakStudy}}</p>
        <!--v-clock学习 --end-->
        <!--自制指令 1.全局指令  2.局部指令-->


        <!--自制指令 1.全局指令  2.局部指令/-->
        
    </div>
</template>
<script>
export default {
    // props:{
    //     addContent:{
    //         type:Function,
    //         required:true
    //     },
    // },
    data(){
        return{
            vCloakStudy:'cloak学习',
            testMsg:'ref学习2',
            username:'',
            comment:'',
            content:[
                {username:"bobo",comment:'还不错'},
                {username:"Tom",comment:'非常好'},
                {username:"lily",comment:'感觉很差'}


            ],
            date:new Date()

        }
    },
    methods:{
        hint(){
            console.log(this.$refs.refStudy.textContent);
            console.log(this.$refs.refStudy.innerHTML)
        },
        add(){
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
            //添加到最上面
            this.content.unshift(content)
            //添加到下面
            //  this.content.push(content)
            this.username="",
            this.comment=""
            }

            
        },
        del(index){
            console.log(index)
           console.log(this.content)
           this.content.splice(index,1)
       
        },
        update(c){
            console.log(c)
            this.username=c.username,
            this.comment=c.comment
            //1.获取index对应的object
            //2.修改对应的属性
        }
    },
    computed:{
        // dateString(value,format){
        //      return moment(value).format(format );
        // }
    }
   
}
</script>
<style>
/* 知道有v-cloak的标签，在指定属性解析前对其赋值 */
    [v-cloak]{
        display: none;
    }
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