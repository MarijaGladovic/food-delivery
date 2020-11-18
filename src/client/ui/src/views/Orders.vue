<template>
  <div>
    <h1 class="title">Moje porudžbine</h1>
    <div v-for="order in orders" :key="order.id">
        <Card class="order">
          <div class="products">
            <div v-for="product in order.products" :key="product.id" class="product">
              <h3>Naziv: {{ product.title }}</h3>
              <p>Količina: {{ product.quantity }}</p>
            </div>
          </div>
          <div class="canceled">{{ order.status === "canceled" ? "OTKAZANO" : ""}}</div>
          <div class="info">
            <p>Datum: {{ new Date(order.createdAt).toLocaleDateString() }}</p>
            <p>Adresa: {{ order.address}}</p>
          </div>
          <button v-if="orderCancelable(order)" class="cancel" @click="cancel(order._id)" >Otkaži</button>
        </Card>
      </div>
    </div>
</template>

<script lang="js">
import { mapActions, mapGetters } from "vuex"
import {isAuth} from "@/utils/helpers";
import Card from "@/components/Card";

export default {
  name: "Orders",
  components: {Card},
  methods: {
    ...mapActions(["getOrders", "cancelOrder"]),
    orderCancelable({ createdAt, status}) {
      if((Date.now() - new Date(createdAt).getTime()) <= 300000 && status === "active") {
        return true;
      }
      return false;
    },
    cancel(id) {
      this.cancelOrder(id);
      this.getOrders();
    }
  },
  computed: {
    ...mapGetters(["orders"])
  },
  mounted() {
    if(!isAuth()) {
      this.$router.replace("/")
    }

    this.getOrders();
  }

}
</script>

<style lang="css" scoped>
.order {
  margin-bottom: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.products {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: auto;
}

.product {
  display: flex;
  justify-content: space-between;
}

.product:not(:last-child) {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
}

.info {
  flex: 3;
  text-align: right;
}

.title {
  margin-bottom: 3rem;
}

.cancel {
  margin-left: 3rem;
}

.canceled {
  font-weight: bold;
  flex: 1;
  text-align: center;
}
</style>