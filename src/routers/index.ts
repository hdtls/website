import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/blog",
    component: () => import("../views/blog/index.vue" /* webpackChunkName: "views/blog/index" */),
    name: "blog"
  },
  //   {
  //     path: "/pure-md-resume",
  //     component: () =>
  //       import("../views/pure-md-resume.ts" /* webpackChunkName: "views/pure-md-resume" */),
  //     name: "pure-md-resume"
  //   },
  {
    path: "/resume",
    component: () => import("../views/Resume.vue" /* webpackChunkName: "views/resume" */),
    name: "resume"
  },
  {
    path: "/blog/:id",
    component: () => import("../views/blog/_id.vue" /* webpackChunkName: "views/blog/_id" */),
    name: "blog-id"
  },
  {
    path: "/static/:id?",
    component: () => import("../views/static/_id.vue" /* webpackChunkName: "views/static/_id" */),
    name: "static-id"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router