<template>
  <div class="container">
    <h4 style="color: red" v-if="submitStatus">{{ submitStatus }}</h4>
    <form @submit.prevent="login">
      <input type="text" placeholder="Email"  v-model.lazy.trim="email" />
      <input type="password" placeholder="Password" v-model.lazy.trim="password" />
      <button type="submit" class="submit-button">Login</button>
    </form>

    <div class="signup">
      <p>Nemate nalog? <span><router-link to="/signup">Registrujte se</router-link></span></p>
    </div>
  </div>
</template>

<script lang="js">
import { mapActions, mapGetters } from "vuex"
import { required, minLength, email } from 'vuelidate/lib/validators'
import { isAuth} from "@/utils/helpers";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      submitStatus: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    ...mapActions(["loginUser"]),
    login() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = null;
        this.loginUser({ email: this.email, password: this.password })
      }
    }
  },
  mounted() {
    if(isAuth()) {
      this.$router.replace("/")
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.submit-button {
  width: 100%;
}

.signup {
  margin-top: 3rem;
}
</style>