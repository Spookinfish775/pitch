<template>
  <div class="login-form-wrapper">
    <h3 class="form-title">Вход в систему</h3>
    <div class="form">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="login"
          label="Логин"
          outlined
          dense
          required
          :rules="loginRules"
        />
        <v-text-field
          v-model="password"
          type="password"
          label="Пароль"
          outlined
          dense
          required
          :rules="passwordRules"
        />
        <v-btn
          class="mt-6"
          dark
          width="100%"
          height="40px"
          depressed
          color="#1165C7"
          @click="validate"
        >
          Войти
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      valid: true,
      login: null,
      password: null,
      loginRules: [(v) => !!v || 'Поле обязательно к заполнению'],
      passwordRules: [(v) => !!v || 'Поле обязательно к заполнению'],
    }
  },
  methods: {
    validate() {
      const valid = this.$refs.form.validate()
      if (valid) {
        try {
          this.$store.dispatch('login', {
            username: this.login,
            project: 'develop.cloud-atlas.online',
            password: this.password,
          })
          // this.$router.push('/')
        } catch (error) {
          return error
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login-form-wrapper {
  min-width: 340px;
  min-height: 360px;
  background-color: $AlmostWhite;
  padding: 24px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .form {
    width: 100%;
  }
}
</style>
