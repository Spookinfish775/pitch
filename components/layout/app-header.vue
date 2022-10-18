<template>
  <div class="app-header">
    <v-app-bar color="#1165C7" dense dark fixed>
      <v-toolbar-title class="mr-4 pitch-title" @click="goToMain">
        Pitch testing marketplace
      </v-toolbar-title>
      <v-divider inset vertical />
      <div
        v-for="link in appNavigation"
        :key="link.id"
        class="link-wrapper ml-2"
      >
        <v-btn text :to="link.to">
          {{ link.text }}
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn text @click="logout">Выйти из профиля</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { navigation } from '~/infrastructure/navigation/navigation'

export default {
  name: 'AppHeader',
  computed: {
    appNavigation() {
      return navigation()
    },
  },
  methods: {
    goToMain() {
      this.$router.push('/')
    },
    logout() {
      this.$store.dispatch('logout')
    },
  },
}
</script>

<style lang="scss">
.app-header {
  margin: 0 0 80px 0;
  .pitch-title {
    cursor: pointer !important;
  }
}
</style>
