<template>
  <div>
    <div class="wrapper" v-if="cartProducts.length !== 0">
      <div class="products">
        <Card v-for="product in cartProducts" :key="product.id" class="product">
          <div>
            <h3>{{ product.title }}</h3>
            <p>{{ product.price }}</p>
          </div>
          <h4>{{ product.quantity }}</h4>
          <button @click="deleteProductFromCart(product.id)">Obriši</button>
        </Card>
        <div class="aditionalInfo">
          <h2>Ukupno: {{ totalPrice }}</h2>
          <button class="cancel" @click="cancelCart">Odustani</button>
        </div>
      </div>
      <div class="order-form">
        <form @submit.prevent="makeOrder" class="form">
          <input type="text" placeholder="Ime" v-model.lazy.trim="name" required/>
          <input type="text" placeholder="Adresa" v-model.lazy.trim="address" required/>
          <input type="text" placeholder="Telefon" v-model.lazy.trim="phone" required/>
          <textarea placeholder="Dodatna poruka" v-model.lazy.trim="note" rows="5"/>
          <button>Naruči</button>
        </form>
      </div>
    </div>
    <h1 v-else>Trenutno nemate proizvoda u korpi.</h1>
  </div>
</template>

<script lang="js">
import { mapActions, mapGetters } from "vuex"
import Card from "@/components/Card";

export default {
  name: "CartPage",
  data() {
    return {
      name: "",
      address: "",
      phone: "",
      note: ""
    }
  },
  components: {
    Card
  },
  methods: {
    ...mapActions(["addProductToCard", "deleteProductFromCart", "createOrder", "cancelCart"]),
    makeOrder() {
      this.createOrder({ name: this.name, address: this.address, phone: this.phone, notes: this.note, price: this.totalPrice })
    }
  },
  computed: {
    ...mapGetters(["cartProducts", "user"]),
    totalPrice() {
      let price = 0;
      this.cartProducts.forEach(item => {
        price = price + (item.price * item.quantity)
      })

      return price;
    }
  },
  mounted() {
    console.log(this.cartProducts)
  }
}
</script>

<style lang="css" scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
}

.products  {
  flex: 1;
  margin-right: 2rem;
  padding-right: 2rem;
  border-right: 3px solid lightgrey;
}

.product {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin-bottom: 1rem;
}

.order-form {
  flex: 2;
}

.form {
  display: grid;
  row-gap: 1rem;
}

.aditionalInfo {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid lightgrey;
}

.cancel {
  background-color: darkred;
}
</style>