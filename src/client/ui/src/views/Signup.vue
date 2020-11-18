<template>
  <div class="container">
    <h4 style="color: red" v-if="submitStatus">{{ submitStatus }}</h4>
    <form @submit.prevent="signup">
      <input type="text" placeholder="Ime"  v-model.lazy.trim="name" />
      <input type="text" placeholder="Email"  v-model.lazy.trim="email" />
      <input type="password" placeholder="Lozinka" v-model.lazy.trim="password" />
      <input type="text" placeholder="Telefon"  v-model.lazy.trim="phone" />
      <input type="text" placeholder="Adresa"  v-model.lazy.trim="address" />
      <input type="text" placeholder="Poštanski broj"  v-model.lazy.trim="zipCode" />
      <button type="submit" class="submit-button">Registracija</button>
    </form>
  </div>
</template>

<script lang="js">
import { mapActions} from "vuex";
import { required, minLength, email, numeric } from 'vuelidate/lib/validators'

export default {
  name: "SignupPage",
  data() {
    return {
      email: "",
      password: "",
      name: "",
      address: "",
      phone: "",
      zipCode: "",
      submitStatus: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },
    phone: {
      required,
      numeric
    },
    address: {
      required
    },
    zipCode: {
      required,
      numeric
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  methods: {
    ...mapActions(["signupUser"]),
    signup() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = null;
        this.signupUser({ email: this.email, password: this.password, name: this.name, address: this.address, zipCode: this.zipCode, phone: this.phone })
      }
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}

.submit-button {
  width: 100%;
}
</style>