<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="js">
export default {
  name: "Card"
}
</script>

<style lang="css" scoped>
.card {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.25);
}
</style>