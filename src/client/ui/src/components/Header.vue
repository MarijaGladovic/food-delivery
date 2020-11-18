<template>
  <header class="header">
    <img src="../assets/logo.png" alt="" class="logo" @click="$router.push('/')"/>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/cart">Cart <span style="color: orangered">{{ cartProducts.length }}</span></router-link>
      <router-link to="/orders" v-if="orders.length !== 0">Orders</router-link>
      <a href="/" @click="logout" v-if="auth">Logout</a>
      <router-link to="/login" v-else>Login</router-link>

    </div>
  </header>
</template>

<script lang="js">
import { mapGetters, mapActions } from "vuex";
import { isAuth } from "@/utils/helpers";

export default {
  name: "Header",
  data() {
    return {
      auth: isAuth()
    }
  },
  computed: {
    ...mapGetters(["cartProducts", "orders"]),
  },
  methods: {
    ...mapActions(["logout"])
  }
}
</script>

<style lang="css" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid lightgrey;
}

.logo {
  height: 2.5rem;
  cursor: pointer;
}
</style>