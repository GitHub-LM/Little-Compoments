import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../Home.vue'
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "/",
    component: () => import("../views/FloatBall.vue")
  },
  // {
  //   path: "/FloatBall",
  //   name: "悬浮球",
  //   component: () => import("../views/FloatBall.vue")
  // },
  // {
  //   path: "/VueDraggable",
  //   name: "绘制框",
  //   component: () => import("../views/VueDraggable.vue")
  // },
  // {
  //   path: "/WaterMarker",
  //   name: "水印",
  //   component: () => import("../views/WaterMarker.vue")
  // },
  {
    path: '/cmps',
    name: '组件合集',
    component: Home,
    redirect: '/cmps/WaterMarker',
    meta: {
      title: '组件合集',
      icon: 'md-home'
    },
    children: [{
        path: '/cmps/WaterMarker',
        name: "WaterMarker",
        meta: {
          title: '水印',
          icon: 'md-home'
        },
        component: () => import("../views/WaterMarker.vue")
      }, {
        path: '/cmps/FloatBall',
        name: "FloatBall",
        meta: {
          title: '悬浮球',
          icon: 'md-home'
        },
        component: () => import("../views/FloatBall.vue")
      },
      {
        path: '/cmps/VueDraggable',
        name: "VueDraggable",
        meta: {
          title: 'canvas截图框',
          icon: 'md-home'
        },
        component: () => import("../views/VueDraggable.vue")
      }
    ]
  },
  {
    path: "/Functions",
    name: "函数",
    component: () => import("../views/Functions.vue")
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router