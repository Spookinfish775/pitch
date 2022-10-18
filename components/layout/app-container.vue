<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppContainer',
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 20px;
  height: 100%;
}
</style>
