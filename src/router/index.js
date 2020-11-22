import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from '@/pages/goodsDetail'
import Upload from '@/pages/upload'
// import Mds from '@/components/Md/index.md'
Vue.use(VueRouter)
//封装方法，直接传入路径，然后按需加载每个模块
function getComs(path){
  return resolve => require([`@/components/${path}`],resolve)
}

//获取子路由然后按需加载每个模块
function getComsChild(path){
  return resolve => require([`@/components/choice/${path}`],resolve)
}


const routes = [
  {
    path: '/home',
    component: (resolve) => require(['../pages/home'],resolve),
    meta: {
      title:'home'
    }
  },
  {
    path: '/msg',
    component: getComs('msg'),
    meta: {
      title:'msg'
    }
  },
  {
    path: '/navs',
    component: getComs('navs'),
    meta: {
      title:'navs'
    }
  },
   {
    path: '/vuexfn',
    component: getComs('vuexfn'),
    meta: {
      title:'vuexFn'
    }
  },
  {
    path: '/zz',
    component: getComs('zz'),
    meta: {
      title:'zz'
    }
  },
  {
    path: '/mock',
    component: getComs('mock'),
    meta: {
      title:'mock'
    }
  },
  {
    path: '/com',
    component: getComs('com'),
    meta: {
      title:'com'
    },
    children: [
      {
          path:'/tabs',
          component: getComs('tabs')
      }
    ]
  },
  {
    path: '/mixin',
    component: getComs('mix'),
    meta: {
      title:'mixin'
    }
  },
  {
    path: '/md',
    component: getComs('md'),
    meta: {
      title:'md'
    }
  },
   {
    path: '/render',
    component: getComs('ren'),
    meta: {
      title:'ren'
    }
  },
  {
    path: '/upload1',
    component: getComs('upload1')
  },
  {
    path: '/vuex',
    component: getComs('vuex'),
    meta: {
      title:'vuex'
    }
  },
   {
    path: '/scss',
    component: getComs('sass'),
    meta: {
      title:'sass'
    }
  },
  {
    path: '/pug',
    component: getComs('pug'),
    meta: {
      title:'pug'
    }
  },
  {
    path: '/slo',
    component: getComs('slo'),
    meta: {
      title:'slo'
    }
  },
  {
    path: '/uploads',
    component: getComs('uploads')
  },
  {
    path: '/fun',
    component: getComs('fun'),
    meta: {
      title:'fun'
    }
  },
  {
    path: '/lodash',
    component: getComs('lodashFn'),
    meta: {
      title:'lodash'
    }
  },
  {
    path: '/routers',
    component: getComs('routers'),
    meta: {
      title:'routers'
    }
    // //子路由的组件为  --->  component:getComsChild('choice2') 不是components
    // children: [...childs] //子路由
  },
  {
    path: '/upload',
    component: Upload,
    meta: {
      title:'vue-simple-upload'
    }
  },
  {
    path: '/detail/:id',
    component: Detail,
    children: [
      {
          path:'msg',
          component: getComs('msg')
      }
    ],
    meta: {
      title:'detail'
    }
  },
  { path: '*',                      //这里是路由重定向，比如页面加载时候进入首页
    redirect: '/home',
    meta: {
      title:'home'
    }                //   （比如给路由一个选中后的样式为红色  那么这里就能用到了---.router-link-active{样式}）
  },
  { path: '/',                      //这里是路由重定向，比如页面加载时候进入首页
    redirect: '/home',
    meta: {
      title:'home'
    }                //   （比如给路由一个选中后的样式为红色  那么这里就能用到了---.router-link-active{样式}）
  }
]

const rout = new VueRouter({
  // mode: 'history', //去除url路由中的#号，看着更漂亮
  routes
})

rout.beforeEach((to,from,next) => {
  document.title = to.meta.title //路由元信息绑定title，根据路由的切换来指定document.title
  next()
})
export default rout 
