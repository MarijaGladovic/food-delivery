<template>
  <footer class="footer">
    <div>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/cart" class="link">Cart</router-link>
      <router-link to="/login" class="link">Login</router-link>
    </div>

    <p>&copy; {{ new Date().getFullYear() }} Food Delivery</p>
  </footer>
</template>

<script lang="js">
export default {
  name: "Footer"
}
</script>

<style lang="css" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-top: 3px solid lightgrey;
  background-color: orangered;
  margin-top: 3rem;
}


.link {
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  margin-right: 1rem;
}
</style>