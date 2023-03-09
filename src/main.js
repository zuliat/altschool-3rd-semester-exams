import { createApp } from "vue";
import App from "./App.vue";
import store from "./components/store.js";
import Counter from "./components/Counter.vue";
import Home from "./components/Home.vue";
import PageNotFound from "./components/PageNotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/counter",
      name: "Counter",
      component: Counter,
    },
    {
      // this is a call to a wildcard route
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: PageNotFound,
    },
  ],
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");

//createApp(App).mount('#app')
