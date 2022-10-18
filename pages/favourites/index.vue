<template>
  <div>
    <AppContainer>
      <FavouriteGroupedList :product-list="productsFavourites" />
    </AppContainer>
  </div>
</template>

<script>
import { dataApi } from '~/static/data-api'
export default {
  name: 'FavouritesPage',
  components: {
    AppContainer: () => import('~/components/layout/app-container.vue'),
    FavouriteGroupedList: () =>
      import('~/components/product/favourites-list/index.vue'),
  },
  middleware: ['auth'],

  async asyncData({ $axios }) {
    const params = {
      'filters[limit]': 50,
    }
    const {
      data: {
        data: { productsFavourites },
      },
    } = await $axios.get(dataApi.productToFavourites, { params })

    return { productsFavourites }
  },
}
</script>

<style lang="scss"></style>
