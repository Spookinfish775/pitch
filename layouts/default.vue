<template>
  <v-app>
    <AppHeader />
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    AppHeader: () => import('~/components/layout/app-header.vue'),
  },
  data() {
    return {}
  },
}
</script>
