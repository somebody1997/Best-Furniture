<template>
  <!--navbar-->
  <div class="navbar navbar-expand-lg  bg-light fixed-top pb-2">
      <div class="container">
        <router-link to="/" class="logo">
          <div class="d-flex position-relative h-80 h-md-auto">
            <img
              class="logo__6 py-3"
              src="@/assets/images/logos/logo2.png"
              data-cursor="cursor"
            />
          </div>
        </router-link>
        <div class="navbar-nav" >
          <div class="d-flex">
           <router-link to="/products" class="link mx-3">
            <span class="material-icons" style="font-size: 32px">
               store
            </span>
          </router-link>
          <div class="popup">
          <router-link to="/wishlist" class="position-relative link pr-2 pt-3">
            <span
              class="material-icons"
              data-cursor="cursor"
              style="font-size: 30px"
            >
              favorite
            </span>
            <span class=" nav-num2" v-if="favorites"
            >
              {{ favorites.length }}
            </span>
          </router-link>
          </div>
          <div class="popup">
          <router-link to="/shippingcart" class="position-relative link px-3">
            <span v-if="cart.carts" class="nav-num">
               {{ cart.carts.length }}
            </span>
            <span class="material-icons text-3xl"
            style="font-size: 30px"> shopping_cart
            </span>
          </router-link>
          </div>
          </div>
       </div>
      </div>
  </div>
  <router-view></router-view>
  <!--footer-->
  <footer class="bg-info">
    <div class="container py-5">
      <div class="row py-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <img src="img/logo.png" alt="" width="180" class="mb-3" />
          <p class="font-italic text-muted">
           Store Location
           <br>
           99 Amazing Grace Road
           <br>
           Victoria ParkLondon E12 7LD
           <br>
          </p>
          <p class="font-italic text-muted">
           Monday–Saturday
           11:00am–6:00pm
           Sunday
           11:00am–5:00pm
          </p>
          <ul class="list-inline mt-4">
            <li class="list-inline-item">
              <a href="#" target="_blank" title="instagram"
                ><span class="material-icons"  style="font-size: 28px">
                  facebook
                </span></a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase fw-bolder mb-4">About</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2">
              <a href="#" class="text-white text-light textho">Contact</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase fw-bolder mb-4">Services</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2">
              <a href="#" class="text-muted text-light
              textho">Delivery Service</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-muted text-light textho">Furnishing Advice</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-lg-0">
          <h6 class="text-uppercase fw-bolder mb-4">Best Furniture</h6>
          <p class="text-muted mb-4">
           Furniture you will fall for.
           <br/>
          Harmonious, Comfort, Elegant.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-info py-4">
      <div class="container text-center">
        <p class="text-muted mb-0 py-2">
          © 2021 Best servered. 作品僅供練習使用 無商業用途
        </p>
      </div>
    </div>
  </footer>
  <!-- sidebar -->
</template>

<script>
import favoriteMethods from '@/assets/javascript/favoriteStorage';

import emitter from '../methods/mitt';

export default {
  data() {
    return {
      cart: {},
      favorites: favoriteMethods.get() || [],
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.cart = res.data.data;
        })
        .catch((err) => {
          this.$moshaToast({
            title: err,
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
  },
  mounted() {
    this.getCart();
    emitter.on('product-cart', () => { this.getCart(); });
    emitter.on('favorite', () => {
      this.favorites = favoriteMethods.get();
    });
  },
  unmounted() {
    emitter.off('product-cart', () => { this.getCart(); });
    emitter.off('favorite', () => {
      this.favorites = favoriteMethods.get();
    });
  },
};
</script>

<style scape lang="scss">
@import "@/assets/stylesheets/all";

.nav-num {
  position: absolute;
  top: -15px;
  left: 34px;
  width: 18px;
  height: 18px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: $secondary;
  color: #fff;
  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.5);
}
.nav-num2 {
  position: absolute;
  top: 3px;
  left: 18px;
  width: 18px;
  height: 18px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: $secondary;
  color: #fff;
  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.5);
}
</style>
