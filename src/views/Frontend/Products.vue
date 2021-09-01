<template>
  <section class="container">
    <Loading :is-loading="isLoading"></Loading>
    <div class=" py-3">
      <div class="px-2 pt-3 pb-3">
        <h2 class="">All Products</h2>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-6 pt-2">
          <div class="card border-0 bg-warning">
            <a
              class="text-decoration-none text-dark d-block text-center pt-2"
              href=""
              @click.prevent="goToCategory('Chairs')"
              >
            <img src="@/assets/images/PIC/chairs.jpeg" class="card-img-top" />
              <h6 class="fw-bold">Chairs</h6></a
            >
          </div>
        </div>
        <div class="col-md-3 col-sm-6 pt-2">
          <div class="card border-0 bg-warning">
             <a
              class="text-decoration-none text-dark d-block text-center pt-2"
              href=""
              @click.prevent="goToCategory('Sofas')"
            >
            <img src="@/assets/images/PIC/sofapic.png" class="card-img-top" />
              <h6 class="fw-bold">Sofas</h6></a
            >
          </div>
        </div>
        <div class="col-md-3 col-sm-6 pt-2">
          <div class="card border-0 bg-warning">
            <a
              class="text-decoration-none text-dark d-block text-center pt-2"
              href=""
              @click.prevent="goToCategory('Tables')"
            >
            <img src="@/assets/images/PIC/worktable.png" class="card-img-top" />
              <h6 class="fw-bold">Tables</h6></a
            >
          </div>
        </div>
        <div class="col-md-3 col-sm-6 pt-2">
          <div class="card border-0 bg-warning">
            <a
              class="text-decoration-none text-dark d-block text-center pt-2"
              href=""
              @click.prevent="goToCategory('Storage')"
            >
            <img src="@/assets/images/PIC/storage.png" class="card-img-top" />
              <h6 class="fw-bold">Storage</h6></a
            >
          </div>
        </div>
      </div>
    </div>
  <div class="row pt-3">
    <div class="col">
      <h5 class="text-center">From living room to dining room</h5>
      <p class="text-center">All kinds of best products provided from us. <br>
      Stylish furnishing to fit every home.</p>
      <hr class="mt-2 mb-3" />
    </div>
  </div>
  <div class="d-flex justify-content-end mt-3">
        <div class="input-group w-lg-25">
          <input
            type="text"
            class="form-control ps-5 bg-pampas text-dark"
            placeholder="Search"
            v-model="search"
          />
        </div>
  </div>
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
  </section>
</template>

<script>
import favoriteMethods from '@/assets/javascript/favoriteStorage';

import Loading from '@/components/Loading.vue';

// import Pagination from '../../components/Pagination.vue';

import emitter from '../../methods/mitt';

export default {
  data() {
    return {
      products: [],
      allProductsData: [],
      selectCategory: '',
      isLoading: false,
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
            this.products = res.data.products;
            this.isLoading = false;
          } else {
            console.log('get-error');
          }
          // emitter.emit('isLoading', this.isLoading = false);
        })
        .catch(() => {
          this.isLoading = false;
          this.$refs.toast.showToast('Data missing", "error');
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
      this.isLoading = true;
      if (this.favorites.includes(item.id)) {
        this.favorites.splice(this.favorites.indexOf(item.id), 1);
        this.isLoading = false;
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
        this.isLoading = false;
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
    goToCategory(category) {
      this.$router.push({ name: 'productcategory', query: { category } });
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
    // emitter.emit('isLoading', this.isLoading = true);
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/stylesheets/all";

.card {
  border-radius: 4px;
  background: #fff;
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
</style>
