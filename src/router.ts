import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "~/views/Home.vue";
import ProjectsList from "~/views/ProjectsList.vue";
import ProjectDetails from "~/views/ProjectDetails.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home Page",
    component: Home,
  },
  {
    path: "/projects/web",
    alias: "/projects/blockchain",
    name: "Projects List",
    component: ProjectsList,
  },
  {
    path: "/projects/web/:id",
    alias: "/projects/blockchain/:id",
    name: "Projects Details",
    component: ProjectDetails,
  },
  /* {
    path: "/projects/dev",
    alias: "/projects/design",
    name: "Projects List",
    component: ProjectsList,
  },
  {
    path: "/projects/dev/:id",
    alias: "/projects/design/:id",
    name: "Project Details",
    component: ProjectDetails,
  }, */
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

export default router;
