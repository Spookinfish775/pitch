<template>
  <div class="product-card-wrapper">
    <div class="image-wrapper">
      <img src="/product.png" alt="product photo" />
    </div>
    <div class="info-wrapper">
      <h6 class="product-name">{{ productData.title }}</h6>
    </div>
    <div class="favorite-wrapper">
      <v-btn
        text
        color="#1165C7"
        :ripple="false"
        plain
        height="20"
        @click="toFavorite"
      >
        <v-icon v-if="product.isInFavourites" color="#f44270">
          mdi-heart
        </v-icon>
        <v-icon v-else> mdi-heart-outline </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    productData: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      product: this.productData,
      isInFavourites: this.productData.isInFavourites,
    }
  },
  methods: {
    toFavorite() {
      if (!this.productData.isInFavourites) {
        this.$axios.post(this.$dataApi.productToFavourites, {
          product: this.productData.id,
        })
        this.product.isInFavourites = true
      } else {
        this.$axios.delete(
          `${this.$dataApi.products}/${this.productData.id}/favourites`
        )
        this.product.isInFavourites = false
        this.$emit('productDeleted', this.productData.id)
      }
    },
  },
}
</script>

<style lang="scss">
.product-card-wrapper {
  width: 180px;
  height: 200px;
  padding: 10px;
  margin: 7px;
  background-color: $AlmostWhite;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  position: relative;
  .image-wrapper {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
    }
  }
  .info-wrapper {
    margin: 30px 0 0 0;
    .product-name {
      text-align: center;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-word;
    }
  }
  .favorite-wrapper {
    position: absolute;
    top: 6px;
    right: -10px;
  }
  &:hover {
    background-color: rgba($color: $MainBlue, $alpha: 0.1);
    transform: scale(1.01);
  }
}
</style>
