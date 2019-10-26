
<template>
  <div>
   <div id="example">
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
        <!-- <p>Reversed message: "{{ reversedMessage() }}"</p> -->
    </div>
    <div id="name">
      <p>{{firstName}}</p>
      <p>{{lastName}}</p>
      <p>{{fullName}}</p>
    </div>
    <div id="bind1">
        <div class = "static" v-bind:class="{active:isActive,'text-danger':hasError}">
              v-bind测试样式,后面的样式会覆盖前面的样式
        </div>
    </div>
        <div id="bind2">
          <div  v-bind:class="classObj">
              v-bind测试样式2,绑定的数据对象
          </div>
    </div>
          <div id="bind3">
            <div  v-bind:class="classObj2">
              v-bind测试样式3, 绑定一个返回对象的计算属性
            </div>
    </div>
        <div id="bind4">
          <div  v-bind:class="[isActive?activeClass:'green',errorClass]">
              v-bind测试样式4, 根据条件切换列表中的 class，可以用三元表达式
          </div>
        </div>
        <div id="bind5">
          <!--这里改变了isActive2的值为true，为什么没有引用到active2的class-->
          <div v-bind:class="[{active2:isActive2},errorClass2]">
              v-bind测试样式5, 在数组语法中也可以使用对象语法
          </div>
        </div>
          <div id="styleBind">
          <div v-bind:style="styleObj">
              v-bind测试样式6, styleBind绑定
          </div>
        </div>
           <div id="vif">
          <p v-if="yes">yes</p>
          <p v-else>no</p>
        </div>

        <template v-if="loginType === 'username'">
          <label>Username</label>
          <input placeholder="Enter your username">
        </template>
        <template v-else>
          <label>Email</label>
          <input placeholder="Enter your email address">
        </template>
        <button v-on:click="change">toggleLogginType</button>
        <h5 v-show="ok">注意，v-show 不支持 template 元素，也不支持 v-else</h5>
        <ul>
           <!-- <li v-for="i in items"> -->
          <li v-for="i of items">
            {{i.data}}
          </li>
           <li v-for="i of items">
            {{i}}
          </li>
        </ul>
        <button @click="reverse">reverse</button>
        <!-- 选择过滤 -->
        <div>
            <ul>
              <li v-for="d in numbers">
                 {{d}}
              </li>
            </ul>
        </div>

        <!-- <div id="addForm">
            <label>Add a todo</label>
            <input type="text" placeholder="E.g. Feed the cat">
            <button @click="Add">Add</button><br>
            <ul>
                <li v-for="n in addList">
                  {{n.data}}
                </li>

            </ul>
        </div> -->
          <button v-on:click="counter += 1">counter</button>
          <span>点击了{{counter}}次</span>
           <button @click="warn(textMsg,$event)">取消</button>


          <!-- 表单练习 -->
          <form action="/xxx?" @submit.prevent="handleSubmit">
          <div><h1 v-bind:style="loginStyle">表单练习</h1></div>
           <label>用户名</label>
          <input type="text" placeholder="用户名" v-model.lazy="username">{{username}}<br>
          <span>用户名是:{{username}}</span><br>
          <label>性别</label>
          <input type="radio" id="man" value="man" v-model="picked">
          <label for="man">Man</label>
           <input type="radio" id="woman" value="woman" v-model="picked">
          <label for="woman">WoMan</label><br>
          <span>picked:{{picked}}</span>
          <div id="checkbox">
          <label id="hobby">爱好</label><br>
          <input type="checkbox" id="basketball" value="basketball" v-model="checkedName" true-value="basketball" falseValue="">
          <label for="basketball">篮球</label>
          <input type="checkbox" id="soccer" value="soccer" v-model="checkedName" true-value="soccer" falseValue="">
          <label for="soccer">足球</label>
          <input type="checkbox" id="swim" value="swim" v-model="checkedName" true-value="swim" falseValue="">
          <label for="swim">游泳</label>
          <br>
          <span>checkbox选中的有:{{checkedName}}</span><br>
          </div>
          <select id="country" v-model="selected">
            <!-- <option disabled value="">请选择</option> -->
            <!-- <option disabled value="">请选择</option>
            <option>中国</option>
            <option>美国</option> -->
            <option v-for="country in countrys" v-bind:value="country.value" :key="country.text">
              {{country.text}}
            </option>
          </select>
          <span>Seleted:{{selected}}</span><br>
          <button @click="login">login</button>
          <!-- <button @click="register">register</button> -->
          </form>
          

    </div> 
  </template>
        


<script>
// import Vue from 'vue'
export default {
    
    data() {
      return {
        message:'hello World',
        firstName:"bobo",
        lastName:"tan",
        isActive:true,
        hasError:true,
        classObj:{
          active:true,
          hasError:false
        },
        textMsg:'取消',
        errorClass:'errorClass',
        isActive2:'',
        active2:'activeClass',
        activeClass:'activeClass',
        errorClass2:'errorClass',
        styleObj:{
          color:'red',
          fontSize:'5px'
        },
        //yes有值为yes，无值为no
        yes:'yes1',
        loginType:'username',
        //ok为null,''时无值，不能为undifined否则页面报错，ok有值时显示信息
        ok:1,
        items:[
          { data:'data1'},
          { data:'data2'}
        ],
        numbers1:[
          1,2,3,4
        ],
        // addList:[
        //   {id:1,data:'Do the dishes'},
        //   {id:2,data:'Take out the trash'},
        //   {id:3,data:'Mow the lawn'}
        // ]，
        counter: 0,
        loginStyle:{
          color:'red',
          fontSize:'20px'
        },
        selected:'',
        countrys:[
          {text:'四川',value:'sc'},
          {text:'重庆',value:'cq'},
          {text:'山西',value:'sx'}
        ],
        username:'',
        picked:'',
      checkedName:'',
        
        
       
      }
      
    },
    
  computed: {
    numbers:function () {
      return this.numbers1.filter(function (numbers1) {
        return numbers1%2 == 0;
      })
    },
    reversedMessage: function () {
      //这里如果是字符串反转的话必须要先将字符串转换成字符串数组，因为reverse()只能对数进行转换。之后在加上join链接字符串
      return this.message.split('').reverse().join('')
      
    },
    // fullName:function () {
    //   //组合属性需要用到computed，将需要的属性得到，然后计算
    //   return this.firstName+this.lastName;
    // }
    fullName:{
      get:function () {
         return this.firstName+this.lastName;
      },
      set:function (newValue) {
        var names = newValue.split('');
        this.firstName = names[0];
        this.lastName = names[names.length-1];

      }
    },
    classObj2:function () {
        return{
          active:this.isActive && !this.error,
          //TODO 这里的'fatal'是什么意思
          hasError:this.error && this.error.type === 'fatal'
        }
    }

    
  },


    // computed:(['123'])

    // methods:{
    //   reversedMessage:function () {
    //       return this.message.reverse.join('');
    //   }
    // }
    methods:{
      change:function(){
        if(this.loginType==='username'){
           this.loginType = 'Email';
        }else{
          this.loginType = 'username';
        }
      },
      reverse:function () {
        // this.items.reverse().join('');
        var test = this.message.split('').reverse().join('')
        console.log(test);
        return test;
      },
         warn:function(msg,event){
        
         if (event) event.preventDefault()
            alert(msg);
         
          
        },
      // add:function () {
      //   this.addList.push({
      //     this.addList.id++;

      //   })
      // }
      login:function(){
          console.log("登录")
      },
      register:function(){
          console.log("注册")
      },
      handleSubmit(){
        console.log(this.username)
      }
    }
}
</script>

<style>
  .static{
    color: aqua
  }
  .active{
    color:green
  }
  .text-danger{
    color: red
  }
  .errorClass{
    color: blueviolet
  }
  .activeClass{
    color: aquamarine
  }
  .loginStyle{
  color: aquamarine
  }
</style>
