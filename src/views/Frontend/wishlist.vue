<template>
  <section>
    <a href="#" @click.prevent="goTop" v-if="showTop">
      <span
        class="material-icons goToTop p-3 rounded-circle"
        style="font-size: 32px"
        >arrow_upward</span
      >
    </a>
    <Loading :is-loading="isLoading"></Loading>
    <div class="container py-5">
      <h3 class="text-center my-5 text-primary">
        <strong
          data-aos="flip-up"
          class="border-bottom border-primary d-inline-block border-4 pb-2"
          >Wish list</strong
        >
      </h3>
      <button
        v-if="favoriteList && favoriteList.length >= 2"
        class="btn btn-outline-danger border-0 d-flex align-items-center mb-3"
        @click.prevent="deleteAllFavorite"
      >
        <i class="material-icons me-2">delete</i>Clear wishlist
      </button>
      <div
        class="row mt-3 d-flex-center"
        v-if="favoriteList && favoriteList.length !== 0"
      >
        <div
          class="col-lg-4 col-xl-3 mb-4"
          v-for="favorite in favoriteList"
          :key="favorite.id"
        >
          <div class="card h-100 shadow border-0">
            <div class=" position-relative">
                <img
                class="card-img-top rounded-0"
                :src="favorite.imageUrl"

              />
            </div>
            <div class="card-body bg-pinky">
              <div class="d-flex justify-content-between align-items-center">
                <div class="content">
                  <h5 class="card-title">
                     <router-link
                  :to="{ path: `/product/${favorite.id}` }"
                  class="text  textho"
                  >
                  <strong class="text-dark">{{ favorite.title }}</strong>
                  </router-link
                >
                  </h5>
                  <del class="me-2">NT${{ $toCurrency(favorite.origin_price) }} </del>
                  <p class="fw-bold card-text text-pampas fs-5">
                    NT${{ $toCurrency(favorite.price) }}
                  </p>
                </div>
                <div class="product-icons d-flex align-tiems-center">
                  <button
                    href="#"
                    class="btn addFavoriteBtn"
                    @click.prevent="removeMyFavorite(favorite)"
                  >
                    <span
                      class="material-icons clickFavorite"
                      style="font-size: 32px"
                      v-if="favorites.includes(favorite.id)"
                      >favorite</span
                    >
                    <span class="material-icons" style="font-size: 32px" v-else>
                      favorite_border</span>
                  </button>
                  <a
                    href="#"
                    class="btn addCartBtn"
                    @click.prevent="addToCart(favorite.id)"
                  >
                   <span class="material-icons" style="font-size: 30px"> add_circle </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="d-flex-center flex-column align-items-center mb-3 py-3 shadow-sm "
      >
        <p class="text-center">This list seems empty</p>
        <router-link to="/products" class="btn btn-primary px-5 text-light"
          >Create list</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import favoriteMethods from '@/assets/javascript/favoriteStorage';

import emitter from '@/methods/mitt';

import Loading from '../../components/Loading.vue';

export default {
  data() {
    return {
      favoriteList: [],
      isLoading: false,
      products: [],
      favorites: favoriteMethods.get() || [],
      showTop: false,
    };
  },
  components: {
    Loading,
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.products = res.data.products;
            this.getFavorites();
          }
        })
        .catch((err) => {
          if (err) {
            this.isLoading = false;
            this.$swal({
              toast: true,
              icon: 'error',
              timer: 1500,
              showConfirmButton: false,
              position: 'top',
            });
          }
        });
    },
    getFavorites() {
      this.favoriteList = [];
      this.favorites.forEach((favorite) => {
        this.products.forEach((product) => {
          if (product.id === favorite) {
            this.favoriteList.push(product);
          }
        });
      });
    },
    removeMyFavorite(item) {
      this.favorites.splice(this.favorites.indexOf(item.id), 1);
      favoriteMethods.save(this.favorites);
      emitter.emit('favorite');
      this.$moshaToast({
        title: 'Product was removed from wishlist',
      },
      {
        showIcon: true,
        showCloseButton: true,
        timeout: 3000,
        swipeClose: true,
        toastBackgroundColor: '#58c0ff',
        transition: 'slide',
      });
      this.getFavorites();
    },
    addToCart(id, qty = 1) {
      this.isLoading = true;
      const data = {
        data: {
          product_id: id,
          qty,
        },
      };
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .post(url, data)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$moshaToast({
              title: 'Product was addd to the shopping cart',
            },
            {
              showIcon: true,
              showCloseButton: true,
              timeout: 3000,
              swipeClose: true,
              type: 'success',
              transition: 'slide',
            });
            emitter.emit('product-cart');
          }
        })
        .catch((err) => {
          if (err) {
            this.isLoading = false;
          }
        });
    },
    deleteAllFavorite() {
      this.favorites = [];
      favoriteMethods.save(this.favorites);
      emitter.emit('favorite');
      this.getFavorites();
      this.$moshaToast({
        title: 'Wish list is empty',
      },
      {
        showIcon: true,
        showCloseButton: true,
        timeout: 3000,
        swipeClose: true,
        type: 'danger',
        transition: 'slide',
      });
    },
  },
  mounted() {
    this.getProducts();
    window.addEventListener('scroll', this.scrollTop);
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollTop);
  },
};
</script>
