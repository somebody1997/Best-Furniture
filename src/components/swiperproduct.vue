<template>
  <Swiper
    :loop="false"
    :spaceBetween="10"
    :navigation="false"
    :thumbs="{ swiper: thumbsSwiper }"
    class="mySwiper2"
  >
    <SwiperSlide
      ><img :src="product.imageUrl" :alt="product.title"
    /></SwiperSlide>
    <SwiperSlide v-for="(img, index) in product.imagesUrl" :key="index">
      <img :src="product.imagesUrl[index]" :alt="product.title" />
    </SwiperSlide>
  </Swiper>
  <Swiper
    @swiper="setThumbsSwiper"
    :loop="false"
    :spaceBetween="10"
    :slidesPerView="6"
    :freeMode="true"
    :watchSlidesVisibility="true"
    :watchSlidesProgress="true"
    class="mySwiper"
  >
    <SwiperSlide
      ><img :src="product.imageUrl" :alt="product.title"
    /></SwiperSlide>
    <SwiperSlide v-for="(img, index) in product.imagesUrl" :key="index">
      <img :src="product.imagesUrl[index]" :alt="product.title" />
    </SwiperSlide>
  </Swiper>
</template>

<script>
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';

// import emitter from '@/methods/mitt';

// import favoriteMethods from '@/assets/javascript/favoriteStorage';

SwiperCore.use([Navigation, Thumbs]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products: [],
      relatedProductsData: [],
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.isLoading = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getrelatedProducts() {
      this.relatedProductsData = [];
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style lang="scss">
@import "@/assets/stylesheets/all";
</style>
