import { createWebHistory, createRouter } from "vue-router";

import Home from "@/pages/Home.vue";
import Articles from "@/pages/Articles.vue";
import Article from "@/pages/Article.vue";
import Gallery from "@/pages/Gallery.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles,
  },
  {
    path: "/articles/:id",
    name: "article",
    component: Article,
    props: true,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
];

const router = createRouter({
  // history: createMemoryHistory(),

  // history: createWebHashHistory(),

  // mode: 'history',
  history: createWebHistory(),
  routes,
});

export default router;