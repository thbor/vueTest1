<template>
    <div>
        <!-- 列表搜索和排序 -->
        <div id="search">
            <input type="text" placeholder="请输入用户名" v-model="searchName">
            <ul>
                <li v-for="(info,index) in filterPesons" v-bind:key="info.index">
                    {{index}}-{{info.name}}--{{info.age}}--{{info.sex}}
                </li>
            </ul>
            <button @click="setOrderType(1)">年龄升序</button>
            <button @click="setOrderType(2)">年龄降序</button>
            <button @click="setOrderType(0)">原顺序</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            searchName:'',
            orderType:0,
            persons:[
                {id:1,name:'boa',age:12,sex:'男'},
                {id:2,name:'lily',age:19,sex:'女'},
                {id:3,name:'rily',age:17,sex:'女'},
                {id:4,name:'Tom',age:25,sex:'男'},
            ]
        }
    },
    methods:{
        setOrderType(orderType){
            this.orderType = orderType;
        },
        
    },
    computed:{
        //数据过滤，需要用到计算属性
        filterPesons(){
            //取出相关数据(es6解耦 const:相当于常量  let:代码块 var:整个代码)
           const {persons,searchName,orderType} = this;
            //对persons数据过滤（将searchName与列表name不同的数据过滤掉）
           let fPersons;
           fPersons = this.persons.filter(info => info.name.indexOf(searchName)!==-1)
           //排序
        if(orderType!=0){
            fPersons.sort(function (p1,p2) { //负数:p1在前  p1-p2<0,升序
                //1：升序   2:降序
                if(orderType == 2){
                    return p2.age-p1.age;
                }else{
                    return p1.age-p2.age;
                }
            })
            // return fPersons;
        }
        return fPersons;
        }
         
    }
  
}
</script>

<style>

</style>