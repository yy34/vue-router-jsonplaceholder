import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import UserProfile from './components/UserProfile.vue'
import UserPosts from './components/UserPosts.vue'
const routes = [
  { path: "/", component: Home },
  { path: "/user/:id", component: UserProfile },
  { path: "/user/:userId/posts", component: UserPosts },
 
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

