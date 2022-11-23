import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/table",
    name: "table",
    component: () => import("@/views/table/index.vue"),
  },
  {
    path: "/form",
    name: "form",
    component: () => import("@/views/form/index.vue"),
  },
  {
    path: "/form/validation",
    name: "form-validation",
    component: () => import("@/views/form/validation/index.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
