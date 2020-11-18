<template>
 <div>
   <img src="../assets/homeimage.jpg" alt="food_image" class="image" />
   <h1 class="title">Kategorije</h1>
   <div class="cards">
     <Card v-for="category in categories" :key="category.id" class="category">
       <span>{{ category.name }}</span>
       <router-link :to="/category/ + category._id" style="text-decoration: none">&#8594;</router-link>
     </Card>
   </div>
 </div>
</template>

<script lang="js">
import { mapGetters, mapActions } from "vuex";
import { Card } from "@/components";

export default {
  name: "HomePage",
  components: {
    Card
  },
  computed: {
    ...mapGetters(["categories"]),
  },
  methods: {
    ...mapActions(["getCategories", "getOrders"]),
  },
  mounted() {
    this.getCategories();
    this.getOrders()
  }
}
</script>

<style lang="css" scoped>
.image {
  width: 100%;
  margin-bottom: 5rem;
}

.title {
  text-transform: uppercase;
  margin-bottom: 3rem;
}

.cards {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
}

.cards:not(:last-child) {
  margin-right: 1rem;
}

.cards > * {
  flex: 0 0 45%;
  padding: 2rem 0;
  margin-bottom: 1rem;
  cursor: pointer;
}

.category {
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
}
</style>