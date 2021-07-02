import vue from "vue"
import vuerouter from "vue-router"
const home=() => import( '../pages/home/home')
const profile=()=> import('../pages/profile/profile')
//安装插件
vue.use(vuerouter)

//创建路由对象
const routes=[
  {
    path:'',
    direction:' /home'
  },
  {
    path: '/home',
    component:home
  },
  {
    path: '/profile',
    component:profile
  }
]
const router=new vuerouter({
  routes,
  //这个history模式，可以把浏览器的浏览地址的#去掉
  mode:'history'
  }
)
export default router
