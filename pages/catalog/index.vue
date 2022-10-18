<template>
  <div>
    <AppContainer>
      <ProductGroupedList :product-list="products" />
    </AppContainer>
  </div>
</template>

<script>
import { dataApi } from '~/static/data-api'
export default {
  name: 'CatalogPage',
  components: {
    AppContainer: () => import('~/components/layout/app-container.vue'),
    ProductGroupedList: () =>
      import('~/components/product/grouped-list/index.vue'),
  },
  middleware: ['auth'],

  async asyncData({ $axios }) {
    const params = {
      'filters[limit]': 50,
    }
    const {
      data: {
        data: { products },
      },
    } = await $axios.get(dataApi.products, { params })

    return { products }
  },
}
</script>
