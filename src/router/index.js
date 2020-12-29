import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "/",
    component: () => import("../views/FloatBall.vue")
  },
  {
    path: "/FloatBall",
    name: "悬浮球",
    component: () => import("../views/FloatBall.vue")
  },
  {
    path: "/VueDraggable",
    name: "绘制框",
    component: () => import("../views/VueDraggable.vue")
  },
  {
    path: "/WaterMarker",
    name: "水印",
    component: () => import("../views/WaterMarker.vue")
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router