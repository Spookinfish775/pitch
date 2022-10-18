<template>
  <div class="auth-page">
    <LoginForm />
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  components: {
    LoginForm: () => import('~/components/login/form.vue'),
  },
  layout: 'login',
}
</script>

<style lang="scss" scoped>
.auth-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
