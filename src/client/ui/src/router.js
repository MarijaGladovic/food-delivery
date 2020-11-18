import {
  CartPage,
  CategoryPage,
  HomePage,
  LoginPage,
  SignupPage,
  OrdersPage,
} from "@/views";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/category/:ID",
    component: CategoryPage,
  },
  {
    path: "/cart",
    component: CartPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/signup",
    component: SignupPage,
  },
  {
    path: "/orders",
    component: OrdersPage,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
