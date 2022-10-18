<template>
  <div class="grouped-list-wrapper">
    <ProductCard
      v-for="{ product } in receivedProducts"
      :key="product.id"
      :product-data="product"
      @productDeleted="deleteFromList"
    />
  </div>
</template>

<script>
export default {
  name: 'FavouriteGroupedList',
  components: {
    ProductCard: () => import('~/components/product/card/index.vue'),
  },
  props: {
    productList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      receivedProducts: [...this.productList],
    }
  },
  methods: {
    deleteFromList(id) {
      this.receivedProducts = this.receivedProducts.filter(
        (el) => el.product.id !== id
      )
    },
  },
}
</script>

<style lang="scss">
.grouped-list-wrapper {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .card-wrapper {
    width: 180px;
    margin: 10px;
  }
}
</style>
