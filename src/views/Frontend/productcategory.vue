<template>
  <section class="container">
    <Loading :is-loading="isLoading"></Loading>
  <div class="container pt-5">
          <div class=" py-3">
            <div class="row pt-4 pb-1">
              <div class="col-md-12 col-sm-12 pt-4">
                <div class="card border-0 bg-warning">
                  <img src='@/assets/images/PIC/categoryPIC.jpg' class="card-img-top" />
                </div>
              </div>
            </div>
          </div>
            </div>
    <div class="row ">
          <div class="col" >
            <h4 class="text-center">
              Product Categories
            </h4>
            <p class="text-center py-4">
              Our unique portfolio of furniture designs from present day
              <br/>
              includes interior objects by internationally acclaimed designers.
            </p>
          </div>
        <div class="d-flex justify-content-evenly ">
          <div
            class="
              list-group list-group-horizontal
              fw-bold
              fs-5
              flex-wrap
              justify-content-center
            "
          >
            <router-link to="/products"
              class="
                list-group-item
                border-0
                px-3
                py-2
                rounded-pill
                text-center
                me-lg-2 me-1
                mb-1
              "
              :class="{
                'bg-primary': selectCategory === '',
                'text-white': selectCategory === '',
              }"
            >
              All Products
            </router-link>
            <a
              href="#"
              v-for="list in categoryList"
              :key="list"
              class="
                list-group-item
                border-0
                px-3
                py-2
                rounded-pill
                text-center
                me-lg-2 me-1
                mb-1
              "
              @click.prevent="selectCategory = list"
              :class="{
                'bg-primary': selectCategory === list,
                'text-white': selectCategory === list,
              }"
            >
              {{ list }}
            </a>
          </div>
        </div>
      </div>
    <div class="container pb-6">
        <div class="container mt-md-5 mt-2 mb-7">
          <!--產品列表-->
          <div class="row">
            <div class="col-lg-3 col-md-4" v-for="product in filterProducts" :key="product.id">
              <div class="card border-0 mb-4 position-relative">
                     <!--產品名稱-->
                <img
                  :src="product.imageUrl"
                  class="card-img-top rounded-0"
                />

                <div class="card-body px-3 bg-warning">
                   <router-link
                      :to="`/product/${product.id}`"
                      class="
                        products d-block position-relative
                        textho
                      "
                      >
                       <h4 class="mb-0 mt-2">
                    {{ product.title }}
                  </h4>
                      </router-link>
                  <div
                    class="
                      d-flex
                      justify-content-between
                      align-items-center
                      my-2
                      pb-2
                    "
                  >
                  <div class="row">
                    <div class="">
                      <!-- 價格 -->
                    <div class="h6 text-muted mt-3" v-if="!product.price">
                      NT$ {{ $toCurrency(product.origin_price) }}
                    </div>
                    <del class="h6" v-if="product.price"
                      >NT$ {{ $toCurrency(product.origin_price) }}</del
                    >
                    <div class="h5" v-if="product.price">
                      NT$ {{ $toCurrency(product.price) }}
                    </div>
                    </div>
                  </div>
                  </div>
                   <div class="d-flex justify-content-end">
                       <a  class="addFavoriteBtn mt-2" @click.prevent="addMyFavorite(product)">
                          <span class="material-icons" style="font-size: 32px"
                          v-if="favorites.includes(product.id)">favorite</span>
                          <span class="material-icons" style="font-size: 32px"
                          v-else>favorite_border</span>
                        </a>
                        <!-- 購物車按鈕 -->
                      <button
                        type="button"
                        class="btn btn-link p-2 me-1"
                        @click.prevent="addtoCart(product.id)"
                      >
                        <span class="material-icons" style="font-size: 30px"> add_circle </span>
                      </button>
                     </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import favoriteMethods from '@/assets/javascript/favoriteStorage';

import Loading from '@/components/Loading.vue';

import emitter from '../../methods/mitt';

export default {
  data() {
    return {
      products: [],
      isLoading: false,
      selectCategory: '',
      categoryList: [],
      categoryTitle: '',
      showTop: false,
      search: '',
      favorites: favoriteMethods.get() || [],
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
            this.categories();
          }
        })
        .catch((err) => {
          if (err) {
            this.isLoading = false;
            this.$moshaToast(
              {
                title: 'ERROR',
              },
              {
                showIcon: true,
                showCloseButton: true,
                timeout: 3000,
                swipeClose: true,
                type: 'warning',
                transition: 'slide',
              },
            );
          }
        });
    },
    categories() {
      this.products.forEach((item) => {
        if (this.categoryList.indexOf(item.category) === -1) {
          this.categoryList.push(item.category);
        }
      });
    },
    addtoCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      const data = {
        data: {
          product_id: id,
          qty,
        },
      };
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
          } else {
            this.$moshaToast({
              title: 'ERROR',
            },
            {
              showIcon: true,
              showCloseButton: true,
              timeout: 3000,
              swipeClose: true,
              type: 'warning',
              transition: 'slide',
            });
          }
          emitter.emit('product-cart');
        })
        .catch(() => {
          this.$moshaToast({
            title: 'ERROR',
          },
          {
            showIcon: true,
            showCloseButton: true,
            timeout: 3000,
            swipeClose: true,
            type: 'warning',
            transition: 'slide',
          });
        });
    },
    addMyFavorite(item) {
      if (this.favorites.includes(item.id)) {
        this.favorites.splice(this.favorites.indexOf(item.id), 1);
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
      } else {
        this.favorites.push(item.id);
        this.$moshaToast({
          title: 'Product was added to wishlist',
        },
        {
          showIcon: true,
          showCloseButton: true,
          timeout: 3000,
          swipeClose: true,
          toastBackgroundColor: '#58c0ff',
          transition: 'slide',
        });
      }
      favoriteMethods.save(this.favorites);
      emitter.emit('favorite');
    },
  },
  watch: {
    $route() {
      this.selectCategory = this.$route.query.category || '';
    },
  },
  computed: {
    filterProducts() {
      if (this.search) {
        return this.products.filter((item) => item.title.match(this.search));
      }
      return this.products.filter((item) => item.category.match(this.selectCategory));
    },
  },
  mounted() {
    this.getProducts();
    this.selectCategory = this.$route.query.category || '';
  },
};
</script>
