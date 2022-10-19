<template>
  <div class="wrap">
    <div class="grouped-list-wrapper">
      <ProductCard
        v-for="(product, index) in productsCurrent"
        :key="index"
        :product-data="product"
      />
    </div>
    <div class="loading">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <observer @on-change="onChange" />
  </div>
</template>

<script>
export default {
  name: 'ProductGroupedList',
  components: {
    ProductCard: () => import('~/components/product/card/index.vue'),
    Observer: () => import('vue-intersection-observer'),
  },
  props: {
    productList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      productsCurrent: [...this.productList],
      getParams: {
        'filters[limit]': 50,
        'filters[offset]': 50,
      },
    }
  },
  methods: {
    async onChange(entry) {
      if (entry.isIntersecting) {
        const {
          data: {
            data: { products },
          },
        } = await this.$axios.get(this.$dataApi.products, {
          params: this.getParams,
        })

        this.getParams = {
          'filters[limit]': 50,
          'filters[offset]': this.productsCurrent.length,
        }
        this.productsCurrent.push(...products)
      }
    },
  },
}
</script>

<style lang="scss">
.wrap {
  position: relative;
  .grouped-list-wrapper {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .card-wrapper {
      width: 180px;
      margin: 10px;
    }
  }
  .loading {
    height: 100px;
    width: 100px;
    position: absolute;
    bottom: -100px;
    right: 46%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
