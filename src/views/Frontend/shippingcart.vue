<template>
  <section>
    <Loading :is-loading="isLoading"/>
    <div class="container pt-5">
      <div class="pt-5 pb-3">
        <h2 class="fw-bold">Shopping Cart</h2>
      </div>
    </div>
    <div class="container pt-15">
      <div class="row">
      <div class="col-lg-8">
      <div
        v-if="cart.length <= 0"
        class="p-4 border border-white border-bottom-0 bg-table text-dark"
      >
        <p class="text-center text-xl mb-6">Shopping Cart is empty</p>
        <div
          class="
            d-block
            w-25
            mx-auto
            btn btn-secondary
            text-white
            secondary-hover
            mb-5
          "
        >
          <router-link class="white-hover" :to="`/products`">
            Go to shop</router-link
          >
        </div>
      </div>
      <table v-else>
        <tr
          class="
            d-none d-md-flex
            row
            g-0
            p-4
            border border-white border-bottom-0
            bg-table
            text-dark
          "
        >
          <td class="col-1"></td>
          <td class="col-3">Product</td>
          <td class="col-2">Price</td>
          <td class="col-3">Quantity</td>
          <td class="col-2">SubTotal</td>
          <td class="col-1"></td>
        </tr>
        <hr/>
        <tr
          v-for="(item, index) in cart"
          :key="item.id"
          class="
            row
            g-0
            p-4
            border border-white
            align-items-center
            bg-table
            text-dark
            border-bottom-0
            rounded-3
            shadow-sm
            mb-2
          "
        >
          <td class="col-11 col-md-4 mb-5 mb-md-0">
            <div class="d-flex align-items-center">
              <img
                class="w-40 me-4"
                :src="item.product.imageUrl"
                :alt="item.product.title"
              />
                <router-link
                :to="`/product/${item.id}`"
                class="
                  products d-block position-relative
                  textho
                "
                >
                <p class="text-base">{{ item.product.title }}</p>
                </router-link>
            </div>
          </td>
          <td class="col-6 col-md-2 order-4 order-md-0">
            <div class="d-flex d-md-block align-items-end">
              <p class="me-3 me-md-0 mb-0 text-danger">
                ${{  $toCurrency(item.product.price) }}
              </p>
              <p
                v-if="item.product.price !== item.product.origin_price"
                class="text-dark opacity-5 fw-lighter text-decoration-line-through"
              >
                ${{ $toCurrency(item.product.origin_price) }}
              </p>
            </div>
          </td>
          <td class="col-12 col-md-3 order-3 order-md-0 mb-5 mb-md-0">
            <div class="d-flex w-100 w-md-75 position-relative">
              <button
                :disabled="item.qty <= 1"
                class="quantity-btn cart-remove border-0 fw-bold rounded-3"
                type="button"
                @click="minQty(index)"
              >
                -
              </button>
              <input
                class="
                  text-center
                  quantity
                  w-100
                  border-warning
                  bg-transparent
                  rounded-3
                "
                type="number"
                v-model.number="item.qty"
                min="1"
                @change="updateCart(index, item.id, item.qty)"
              />
              <button
                type="button"
                class="quantity-btn plus fw-bold"
                @click="addQty(index)"
              >
                +
              </button>
              <button
                v-if="updateLoading"
                type="button"
                class="
                  btn
                  d-flex
                  justify-content-center
                  align-items-center
                  position-absolute
                  no-allow
                  w-100
                  h-100
                  top-0
                  start-0
                  bg-light
                "
              >
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </button>
            </div>
          </td>
          <td class="col-6 col-md-2 order-4 order-md-0 text-end text-md-start">
            <span class="d-inline d-md-none text-info"></span>
            <p class="fw-bold">NT${{ $toCurrency(item.total) }}</p>
          </td>
          <td class="col-1 order-2 order-md-0">
            <a
              @click.prevent="deleteCart(item)"
              href="#"
              class="text-dark scale-hover text-center"
            >
              <span class="material-icons"> delete_forever </span>
            </a>
          </td>
        </tr>

        <tr
          class="
            d-flex
            justify-content-between
            align-items-end align-items-sm-center
            rounded-bottom
            bg-table
            border border-white
            p-4
          "
        >
          <td>
            <a @click.prevent="deleteAllCart" class="btn btn-outline-info"
              >Clear All</a
            >
          </td>
          <td class="d-flex flex-column flex-sm-row align-items-center">
            <router-link :to="`/products`" class="btn btn-info btn-hover px-7">
              <span>Keep Shopping</span>
            </router-link>
          </td>
        </tr>
      </table>
      </div>
      <div class="col-lg-4 pb-3">
        <div class="bg-info rounded-3">
         <h3 class="text-xl rounded-top fw-bold text-light p-3">Details</h3>
        <div class="row g-0 p-4 rounded-3 border border-primary bg-table text-light bg-primary">
          <div class="col-8 mb-4">
            <p class="text-light">Total products：</p>
          </div>
          <div class="col-4 mb-4 text-end">
            <p> {{ allQty }} </p>
          </div>
          <div class="col-4 mb-4 ">
            <p>SubTotal：</p>
          </div>
          <div class="col-8 mb-4 text-end">
            <p>NT${{  $toCurrency(total) }}</p>
          </div>
          <div v-if="!showCoupon" class="col-12 mb-4 ">
            <a class="text-success fw-bold underline" href="#" @click.prevent="showCoupon = true">
              Coupon
            </a>
          </div>
          <div v-if="showCoupon" class="col-8 mb-4 pe-2">
            <input
              id="coupon"
              name="coupon"
              type="text"
              class="form-control "
              placeholder="use coupon"
              v-model="couponCode"
            />
          </div>
          <div v-if="showCoupon" class="col-4 mb-4">
            <div class="position-relative">
              <button
                type="button"
                class="btn btn-secondary secondary-hover text-white w-100"
                :class="{ 'use-disable ': couponCode === '' }"
                @click.prevent="getCoupon">
                use
              </button>
            </div>
          </div>
          <div v-if="useCoupon" class="col-4 mb-6">
            <p class="text-secondary fw-bold">Discount：</p>
          </div>
          <div v-if="useCoupon" class="col-8 mb-6 text-end">
            <p class="text-secondary fw-bold">
              -NT${{ $toCurrency(total - final_total) }}
            </p>
          </div>
          <div class="col-12 mb-6">
            <div class="border-bottom border-white"></div>
          </div>
          <div class="col-4 mb-4">
            <p class="fw-bold">Total：</p>
          </div>
          <div class="col-8 mb-4 text-end">
            <p class="fw-bold">NT${{  $toCurrency(final_total) }}</p>
          </div>
          <div class="col-12">
          <button class="btn btn-secondary w-100 fw-bold text-white"
            @click="goTOpay"
            :class="{ disabled: cart.length === 0}">
            Checkout
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
import Loading from '@/components/Loading.vue';

import emitter from '../../methods/mitt';

export default {
  data() {
    return {
      cart: [],
      isLoading: false,
      total: 0,
      allQty: 0,
      allProduct: [],
      updateLoading: false,
      final_total: 0,
      showCoupon: false,
      useCoupon: false,
      couponCode: '',
    };
  },
  components: {
    Loading,
  },
  methods: {
    getCarts() {
      this.isLoading = true;
      const Url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(Url)
        .then((res) => {
          if (res.data.success) {
            this.allQty = 0;
            this.cart = res.data.data.carts;
            this.final_total = Math.round(res.data.data.final_total);
            this.total = res.data.data.total;
            this.cart.forEach((item) => {
              this.allQty += item.qty;
            });
            this.isLoading = false;
            emitter.emit('product-cart');
          } else {
            this.isLoading = false;
          }
        })
        .catch(() => {
          this.updateLoading = false;
          this.$moshaToast({
            title: 'Something went wrong',
          },
          {
            showIcon: 'true',
            showCloseButton: 'true',
            timeout: 3000,
            swipeClose: 'true',
            type: 'warning',
            transition: 'slide',
          });
        });
    },
    updateCart(item, id, qty) {
      if (this.cart[item].qty < 1) {
        this.cart[item].qty = 1;
        return;
      }
      const data = {
        data: {
          product_id: id,
          qty,
        },
      };
      this.updateLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .put(url, data)
        .then((res) => {
          if (res.data.success) {
            emitter.emit('update-cart');
            this.updateLoading = false;
            this.$moshaToast({
              title: 'update successfully',
            },
            {
              showIcon: true,
              showCloseButton: true,
              timeout: 3000,
              swipeClose: true,
              type: 'success',
              transition: 'slide',
            });
            this.getCarts();
          } else {
            this.updateLoading = false;
            this.$moshaToast({
              title: 'Something went wrong',
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
        })
        .catch(() => {
          this.updateLoading = false;
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
    deleteAllCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http
        .delete(url)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.getCarts();
            emitter.emit('update-cart');
            this.$moshaToast({
              title: 'ALL products was removed from your shopping cart ',
            },
            {
              showIcon: true,
              showCloseButton: true,
              timeout: 3000,
              swipeClose: true,
              type: 'danger',
              transition: 'slide',
            });
            this.getCarts();
          } else {
            this.isLoading = false;
            this.$moshaToast({
              title: 'Something went wrong',
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
    deleteCart(item) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http
        .delete(url)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.getCarts();
            this.$moshaToast({
              title: 'Product was removed from your shopping cart',
            },
            {
              showIcon: true,
              showCloseButton: true,
              timeout: 3000,
              swipeClose: true,
              type: 'danger',
              transition: 'slide',
            });
            emitter.emit('update-cart');
            this.getCarts();
          } else {
            this.isLoading = false;
            this.$moshaToast({
              title: 'Something went wrong',
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
        })
        .catch(() => {
          this.$moshaToast({
            title: 'error',
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
    addQty(item) {
      this.cart[item].qty += 1;
      this.updateCart(item, this.cart[item].id, this.cart[item].qty);
    },
    minQty(item) {
      this.cart[item].qty -= 1;
      this.updateCart(item, this.cart[item].id, this.cart[item].qty);
    },
    goTOpay() {
      if (this.cart.length === 0) {
        this.$moshaToast({
          title: 'Bag is empty',
        },
        {
          showIcon: true,
          showCloseButton: true,
          timeout: 3000,
          swipeClose: true,
          type: 'danger',
          transition: 'slide',
        });
        return;
      }
      this.$router.push('/checkout');
    },
    getCoupon() {
      const data = {
        data: {
          code: this.couponCode,
        },
      };
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`, data)
        .then((res) => {
          if (res.data.success) {
            this.couponCode = '';
            this.showCoupon = false;
            this.useCoupon = true;
            this.final_total = Math.round(res.data.data.final_total);
            this.$moshaToast({
              title: 'update successfully',
            },
            {
              showIcon: true,
              showCloseButton: true,
              timeout: 3000,
              swipeClose: true,
              type: 'success',
              transition: 'slide',
            });
          } else {
            this.couponCode = '';
            this.$moshaToast({
              title: 'Coupon was not found',
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
  },
  mounted() {
    this.getCarts();
    emitter.on('update-cart', () => {
      this.getCarts();
    });
  },
  unmounted() {
    emitter.off('update-cart', () => {
      this.getCarts();
    });
  },
};
</script>
