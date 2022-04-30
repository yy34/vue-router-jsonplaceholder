import { createApp } from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import UserProfile from "./components/UserProfile.vue";
import UserPosts from "./components/UserPosts.vue";
const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/user/:id", component: UserProfile, name: "user" },
  { path: "/user/:userId/posts", component: UserPosts, name: "user-posts" },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
