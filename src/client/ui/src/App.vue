<template>
  <div id="app">
    <Header />
    <main class="content">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import { Header, Footer } from "@/components";

export default {
  name: 'App',

  // U objekat components se stavljaju eksterne komponente koje se koriste
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="css" scoped>
@import "assets/index.css";

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  margin: 3rem auto;
  max-width: 1600px;
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
