import Vue from "vue";
import VueRouter from "vue-router";
import user from "../views/User.vue";
import home from "../views/Home.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/user",
      name: "user",
      component: user,
    },
  ],
});
