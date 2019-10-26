//配置路由的页面
import VueResource from 'vue-resource'
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import Login from '@/components/Login'
import Test2 from '@/components/Test2'
import Test3 from '@/components/Test3'
import Test4 from '@/components/Test4'  //交互添加

import Update from '@/components/Update'  //修改评论
import Test5 from '@/components/Test5'  //动画练习
import Test6 from '@/components/Test6'  

import Content from '@/components/Content'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  //去掉#
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld   /* 注册HelloWorld组件 */
    },
    {
      path:'/test1',
      name:'List',
      component:List
    },
    {
      path:'/test2',
      name:'Test2',
      component:Test2
    },
    {
      path:'/test3',
      name:'Test3',
      component:Test3
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/static/:userId',
      name:'Content',
      component:Content
    },
    {
      path:'/test4',
      name:'Test4',
      component:Test4
    },
    {
      path:'/update/:object',
      name:'Update',
      component:Update
    },
    {
      path:'/test5',
      name:'Test5',
      component:Test5
    },
    {
      path:'/test6',
      name:'Test6',
      component:Test6
    },
  ]
  
})
