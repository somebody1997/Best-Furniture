<template>
  <section class="container">
    <div class="pt-5">
      <Loading :is-loading="isLoading"></Loading>
      <nav aria-label="breadcrumb">
        <!--Breadcrumb-->
        <ol class="breadcrumb pt-5">
          <li class="breadcrumb-item">
            <a href="#" class="link-primary text-decoration-none">Home</a>
          </li>
          <li class="breadcrumb-item">
            <router-link
              to="/products"
              class="link-primary d-inline text-decoration-none"
              >Products</router-link
            >
          </li>
          <li class="breadcrumb-item">
            <router-link
              :to = "{
                name: 'productcategory',
                query: {category: product.category}
               }"
              class="link-primary d-inline text-decoration-none"
              >{{ product.category }}</router-link
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ product.title }}
          </li>
        </ol>
      </nav>
      <div class="row mb-3">
        <div class="col-lg-7">
          <div class="w-70 w-md-auto px-lg-8 px-xl-9">
         <img
            class="card-img rounded"
            :src="product.imageUrl"
            :alt="product.title"
          />
          </div>
        </div>
        <div class="col-lg-5 mt-4 mt-lg-0">
          <div class="d-flex align-items-center mb-3">
            <h3 class="text-primary fw-bold mb-0">
              {{ product.title }}
            </h3>
          </div>
          <h5 class="d-inline fw-bold card-text text-danger fs-5">
            NT$ {{ $toCurrency(product.price) }}
          </h5>
          <del class="ms-2 text-muted h6"> NT$ {{ $toCurrency(product.origin_price) }} </del>
           <p class="pt-3 w-75">{{ product.description }}</p>
           <div class="pt">
            <div class="d-flex align-items-center justify-content-between mt-5">
            <div class="input-group w-lg-50">
              <button
                class="btn btn-outline-primary border link opacity-80 "
                type="button"
                @click="changeQty('minus')"
                :class="{ disabled: qty <= 1 }"
              >
                <span class="material-icons">remove</span>
              </button>
              <input
                type="number"
                min="1"
                class="form-control qty-input text-center"
                disabled
                v-model.number="qty"
              />
              <button
                class="btn btn-outline-primary"
                type="button"
                @click="changeQty('add')"
              >
                <span class="material-icons">add</span>
              </button>
            </div>
              <div class="favorite-icon ms-3"><!--Favorite-->
              <a
                href="#"
                class="btn btn-sm waves-effect text-primary"
                @click.prevent="addmyFavorite(product)"
              >
                <span
                  class="material-icons clickFavorite"
                  v-if="favorites.includes(product.id)"
                  >favorite</span
                >
                <span class="material-icons" v-else>favorite_border</span>
              </a>
            </div>
          </div>
           <button type="button"
              class="  mt-3 py-1  btn-rounded
                btn btn-primary
                btn-lg
                fs-5
                w-100
                text-white
              "
              style="text-transform:capitalize;"
              @click.prevent="addToCart"
            >
              Add to cart
              </button>
           </div>
        </div>
      </div>
    </div>
    <div class="row align-items-center  mb-7 bg-warning">
      <div class="col-lg-4 col-md-6 offset-lg-1">
          <h2 class="h3 mb-4 pb-2">Product details</h2>
          <h6 class="fs-base">Materials & Dimensions </h6>
          <h6 class="fs-base mb-3">{{ product.content }}</h6>
      </div>
      <div class="col-lg-5 col-md-6 offset-lg-1">
         <img
            class="card-img d-block rounded-3"
            src='@/assets/images/PIC/productdetail.jpg'
            :alt="product.title"
          />
      </div>
    </div>
     <div class="row align-items-center py-2 mb-7 ">
       <div class="col-lg-5 col-md-6 offset-lg-1">
         <img
            class="card-img d-block rounded-3"
            src='@/assets/images/PIC/delivery.png'
            :alt="product.title"
          />
      </div>
      <div class="col-lg-4 col-md-6 offset-lg-1">
          <h2 class="h3 mb-3 pt-3 text-muted">Lead Time</h2>
          <h6 class="fs-base text-muted">Fastest lead time will be 4 weeks </h6>
          <h6 class="fs-base mb-3 text-muted">
            Lead times are provided as a rough guide to what is typical for this product.
            <br/>
            Standard time will be at 4-6 weeks.
            <br/>
            With the current pandemic these may take more times than usual</h6>
           <small class="text-warning">Illustration by <a href="https://icons8.com/illustrations/author/5d99891e7dca3d0016cd4e34"
           class="text-warning">Julia</a>
          from <a href="https://icons8.com/illustrations" class="text-warning">Ouch!</a></small>
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
      product: { imagesUrl: {} },
      products: [],
      filterProducts: [],
      isLoading: false,
      favorites: favoriteMethods.get() || [],
      qty: 1,
    };
  },
  components: {
    Loading,
  },
  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.$route.params.id}`;
      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
            this.isLoading = false;
            this.getProducts();
          } else if (res.data.message === '找不到產品') {
            this.$router.push('/products');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.isLoading = false;
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
        });
    },
    addToCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      const cart = {
        data: {
          product_id: this.product.id,
          qty: this.qty,
        },
      };
      this.$http
        .post(url, cart)
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
            this.qty = 1;
            emitter.emit('update-cart');
          }
        })
        .catch((error) => {
          if (error) {
            this.isLoading = false;
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
        });
    },
    changeQty(value) {
      if (value === 'add') {
        this.qty += 1;
      } else if (value === 'minus') {
        this.qty -= 1;
      }
    },
    addmyFavorite(item) {
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
    goToCategory(category) {
      this.$router.push({ name: 'productcategory', query: { category } });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style lang="scss">
@import "@/assets/stylesheets/all";

.btn-rounded {
  border-radius: .5rem;
}
</style>
