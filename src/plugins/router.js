import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//import 编译前加载
import Home from '../pages/Home'
import Login from '../pages/Login'
import User from '../pages/User'
import Reg from '../pages/Reg'
import BdMap from '../pages/BdMap'
import Detail from '../components/Detail'
import Column from '../components/Column'
import ErrorPage from '../pages/ErrorPage'

//配置路由
let routes=[
    {path:'/home',component:Home},
    {path:'/column',component:Column},
    // {path:'/follow',component:Follow},
    {path:'/user',component:User},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    {path:'/map',component:BdMap},
    {path:'/detail/:id',component:Detail,props:true},
    {path:'/errorPage',component:ErrorPage},
    {path:'/',redirect:'/home'},
    {path:'*',component:ErrorPage},
];

//创建路由
export default new VueRouter({
    modes:'hash',
    routes
})