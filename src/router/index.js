import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import home from '@/components/home'
// import about from '@/components/about'
// import cooperation from '@/components/cooperation'
// import news from '@/components/news'
// import newslist from '@/components/news-list'
// //测试vue
// import testvue from '@/components/test/testvue'
// import test1 from '@/components/test/test1'
// import test2 from '@/components/test/test2'
// import testhome from '@/components/test/testhome'

//测试vue
// import testvue from '@/components/test/testvue'
// import test1 from '@/components/test/test1'
// import test2 from '@/components/test/test2'
// import testhome from '@/components/test/testhome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
        name:'home',
      alias:'/home',
      component: () => import(/* webpackChunkName: "home" */ '@/components/home'),
        // 是否开启导航
        meta: {
            // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
            index: 0,
            showCommons: true
        }
    },
      {
          path: '/about',
          name:'about',
          component: () => import(/* webpackChunkName: "about" */ '@/components/about'),
          // 是否开启导航
          meta: {
              // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
              index: 0,
              showCommons: true
          }
      },
      {
          path: '/cooperation',
          name:'cooperation',
          component: () => import(/* webpackChunkName: "cooperation" */ '@/components/cooperation'),
          // 是否开启导航
          meta: {
              // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
              index: 0,
              showCommons: true
          }
      },
      {
          path: '/news',
          name: 'news',
          component: () => import(/* webpackChunkName: "news" */ '@/components/news'),
          // 是否开启导航
          meta: {
              // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
              index: 0,
              showCommons: true
          }
      },
      {
          path: '/newslist',
          name: 'newslist',
          component: () => import(/* webpackChunkName: "newslist" */ '@/components/news-list'),
          // 是否开启导航
          meta: {
              // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
              index: 1,
              showCommons: false
          }
      },
      // {
      //     path: '/testvue/:id',
      //     component: testvue,
      //     // 是否开启导航
      //     meta: {
      //         // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
      //         index: 1,
      //         showCommons: false
      //     },
      //     children:[
      //         {
      //             path: '',
      //             component: testhome,
      //             // 是否开启导航
      //             meta: {
      //                 // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
      //                 index: 1,
      //                 showCommons: false
      //             }
      //         },
      //         {
      //             path: 'test1',
      //             component: test1,
      //             // 是否开启导航
      //             meta: {
      //                 // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
      //                 index: 1,
      //                 showCommons: false
      //             }
      //         },
      //         {
      //             path: 'test2',
      //             component: test2,
      //             // 是否开启导航
      //             meta: {
      //                 // 路由层级，数值越大层级越深，以此决定转场动画的前进和后退 大于前进，小于后退
      //                 index: 1,
      //                 showCommons: false
      //             }
      //         },
      //     ]
      // },

  ],
    // mode: 'history',
})
