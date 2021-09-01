<template>
  <section>
    <Loading :is-loading="isLoading"/>
    <div class="container pt-5">
      <div class="pt-5 pb-3">
        <h2 class="fw-bold">Checkout</h2>
      </div>
    </div>
    <div class="container pt-2">
      <div class="row">
      <div class="col-lg-7">
        <Form/>
      </div>
      <!--Checkout List-->
      <div class="col-lg-5 pb-3">
        <div class="bg-info rounded-3">
         <h3 class="text-xl rounded-top fw-bold text-light p-3">Checkout List</h3>
        <div class="row g-0 p-4 rounded-3 border border-primary bg-table text-light bg-primary">
          <div class="col-8 mb-4">
            <p class="text-light">Products List：</p>
          </div>
          <div
            v-for="item in cart"
            :key="item.id"
            class="row py-4 align-items-center text-white border-bottom ">
            <div class="col-7">
              <div class="d-flex align-items-center">
                <img class="w-40 me-4" :src="item.product.imageUrl" :alt="item.product.title" />
                <p>{{ item.product.title }}</p>
              </div>
            </div>
            <div class="col-1">
              <p>{{ item.qty }}</p>
            </div>
            <div class="col-4">
              <p>NT${{ $toCurrency(item.total) }}</p>
            </div>
          </div>
          <div class="col-4 mb-2 pt-2">
            <p>SubTotal：</p>
          </div>
          <div class="col-8 mb-2 text-end pt-2">
            <p>NT${{  $toCurrency(total) }}</p>
          </div>
          <div class="col-4 mb-4">
            <p class="fw-bold">Total：</p>
          </div>
          <div class="col-8 mb-4 text-end">
            <p class="fw-bold">NT${{  $toCurrency(final_total) }}</p>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
  </section>
</template>

<script>
import Form from '../../components/Form.vue';

import Loading from '../../components/Loading.vue';

export default {
  data() {
    return {
      cart: [],
      final_total: 0,
      total: 0,
      isLoading: false,
      useCoupon: false,
    };
  },
  components: {
    Form,
    Loading,
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data.carts;
            this.final_total = Math.round(res.data.data.final_total);
            this.total = res.data.data.total;
            if (this.total !== this.final_total && this.final_total !== 0) {
              this.useCoupon = true;
            } else {
              this.useCoupon = false;
            }
            this.isLoading = false;
            if (this.cart.length <= 0) {
              this.$moshaToast({
                title: 'Order has been send! Connect to server for having problems',
              },
              {
                showIcon: true,
                showCloseButton: true,
                timeout: 3000,
                swipeClose: true,
                type: 'success',
                transition: 'slide',
              });
              this.$router.push('/products');
            }
          } else {
            this.isLoading = false;
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
    this.getCart();
  },
};
</script>
