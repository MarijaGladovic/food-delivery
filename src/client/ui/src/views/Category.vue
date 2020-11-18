<template>
  <div class="container">
    <div class="sidebar">
        <router-link class="link" v-for="category in categories" :key="category.id" :to="/category/ + category._id" >{{ category.name }}</router-link>
    </div>
    <div class="content">
      <div class="title">
        <h1>{{ activeCategory.name }}</h1>
        <p>{{ activeCategory.description }}</p>
      </div>

      <div class="products">
        <Product v-for="product in activeCategory.products" :key="product.id" :title="product.name" :image="product.image" :price="product.price" :id="product._id" />
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { mapActions, mapGetters } from "vuex"
import Product from "@/components/Product";

export default {
  name: "CategoryPage",
  components: {
    Product
  },
  methods: {
    ...mapActions(["getCategory", "getCategories"]),
    getData() {
      const categoryID = this.$route.params["ID"];
      this.getCategory(categoryID);
      this.getCategories();
    }
  },
  computed: {
    ...mapGetters(["activeCategory", "categories"])
  },
  mounted() {
    this.getData();
  },
  watch: {
    '$route.params.ID': function () {
      this.getData();
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.sidebar .link {
  text-decoration: none;
  text-transform: uppercase;
  color: #333;
  font-weight: 700;
  margin-bottom: 1rem;
}

.content {
  flex: 5
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 1rem;
}

.title {
  margin-bottom: 5rem;
}

.title h1 {
  margin-bottom: 2rem;
}

@media only screen and (max-width: 600px) {
  .content {
    flex: 0 0 100%;
  }
}
</style>