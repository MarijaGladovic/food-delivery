<template>
  <Card class="product">
      <img :src="image" :alt="title" class="image"/>
      <div class="data">
        <div>
          <h3>{{ title }}</h3>
          <p>{{ price }}RSD</p>
        </div>

        <button class="button" @click="addProductToCard({ id, title, price })" v-if="!presentational">Kupi</button>
      </div>
  </Card>
</template>

<script lang="js">
import { mapActions } from "vuex"
import Card from "@/components/Card";

export default {
  name: "Product",
  props: {
    title: String,
    image: String,
    price: Number,
    id: String,
    presentational: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Card
  },
  methods: {
    ...mapActions(["addProductToCard"])
  }
}
</script>

<style lang="css">
.image {
  width: 100%;
}

.data {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
}
</style>