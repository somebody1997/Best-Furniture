 <template>
  <section>
    <Loading :is-loading="isLoading"></Loading>
    <!-- 購物車列表 -->
    <div class="col-lg-9 mx-auto">
      <div class="container pt-15">
  <div v-if="cart.length <= 0" class="p-4 border border-white border-bottom-0 bg-table text-dark">
    <p class="text-center text-xl mb-6">購物車目前沒有商品</p>
    <div class="d-block w-25 mx-auto btn btn-secondary text-white secondary-hover mb-5">
      <router-link class="white-hover" :to="`/products`"> 前往商店</router-link>
    </div>
  </div>
  <table v-else>
    <tr
      class="d-none d-md-flex row g-0 p-4 border border-white
     border-bottom-0 bg-table text-dark">
      <td class="col-4">Name</td>
      <td class="col-2">單件價格</td>
      <td class="col-3">Quantity</td>
      <td class="col-2">Price</td>
      <td class="col-1"></td>
    </tr>

      <tr
        v-for="(item, index) in cart"
        :key="item.id"
        class="row g-0 p-4 border border-white align-items-center
        bg-table text-dark border-bottom-0">
        <td class="col-11 col-md-4 mb-5 mb-md-0">
          <div class="d-flex align-items-center">
            <img class="w-40 me-4" :src="item.product.imageUrl" :alt="item.product.title" />
            <h3 class="text-base">{{ item.product.title }}</h3>
          </div>
        </td>
        <td class="col-6 col-md-2 order-4 order-md-0">
          <div class="d-flex d-md-block align-items-end">
            <p class="me-3 me-md-0">NT${{ item.product.price }}</p>
            <p
              v-if="item.product.price !== item.product.origin_price"
              class="text-dark opacity-5 text-sm text-decoration-line-through">
              NT${{ item.product.origin_price }}
            </p>
          </div>
        </td>
        <td class="col-12 col-md-3 order-3 order-md-0 mb-5 mb-md-0">
          <div class="d-flex w-100 w-md-75 position-relative">
            <button
              :disabled="item.qty <= 1"
              class="quantity-btn cart-remove text-dark border-dark"
              type="button"
              @click="minusCartQty(index)">
              -
            </button>
            <input
              class="text-center quantity w-100 border-start-0
              border-end-0 border-dark bg-transparent"
              type="number"
              v-model.number="item.qty"
              min="1"
              @change="updateCart(index, item.id, item.qty)"/>
            <button
              type="button"
              class="quantity-btn plus text-dark border-dark"
              @click="addCartQty(index)">
              +
            </button>
            <button
              v-if="updateLoading"
              type="button"
              class=" btn d-flex justify-content-center align-items-center
              position-absolute no-allow
              w-100 h-100 top-0 start-0 bg-light">
              <div class="spinner-border spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
          </div>
        </td>
        <td class="col-6 col-md-2 order-4 order-md-0 text-end text-md-start">
          <span class="d-inline d-md-none">小計：</span>
          NT${{ item.total }}
        </td>
        <td class="col-1 order-2 order-md-0">
          <a @click.prevent="openModal(item.id)" href="#" class="text-dark scale-hover">
            <span class="material-icons"> delete_forever </span>
          </a>
        </td>
      </tr>

    <tr
      class="d-flex
       justify-content-between align-items-end align-items-sm-center
       rounded-bottom bg-table border border-white p-6">
      <td><a @click.prevent="openModal()" class="btn btn-outline-dark">清空購物車</a></td>
      <td class="d-flex flex-column flex-sm-row align-items-center">
        <p class="text-dark text-base text-md-xl mb-5 mb-sm-0 me-sm-5 ">
          總計：NT${{ total }}
        </p>
        <router-link :to="`/shop`" class="btn btn-dark btn-hover px-7">
          <span>繼續購物</span>
        </router-link>
      </td>
    </tr>
  </table>
</div>
    </div>
    <div class="col-md-4">
      <!--送出區塊-->
      <div class="container py-3">
        <div class="mb-4">
          <div class="mb-4">
            <p><strong>訂單資訊</strong></p>
          </div>
          <!--訂單小結-->
          <div class="pt-2">
            <button
              type="button"
              class="btn btn-outline-danger btn-pay ml-auto"
            >
              <span>下一步</span>
              <i class="bi bi-arrow-right-circle"></i>
            </button>
          </div>
        </div>
      </div>
      <Toast ref="toast"></Toast>
    </div>
  </section>
</template>
<script>
import emitter from '@/methods/mitt';

import Loading from '@/components/Loading.vue';

export default {
  data() {
    return {
      carts: {},
      isLoading: false,
    };
  },
  components: {
    Loading,
  },
  props: ['cartList'],
  methods: {
    getCarts() {
      this.isLoading = true;
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(Url)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.carts = res.data.data;
          }
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
    editCart(item, qty) {
      this.isLoading = true;
      const data = {
        data: {
          product_id: item.product.id,
          qty,
        },
      };
      const Url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http
        .put(Url, data)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            emitter.emit('product-cart');
            this.emit('getCarts');
          }
        })
        .catch((err) => {
          if (err) {
            this.isLoading = false;
            console.log(err);
          }
        });
    },
    deleteCart(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .delete(url)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$emit('grtCarts');
            emitter.emit('product-cart');
          }
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
  },
  watch: {
    cartsList() {
      this.carts = this.cartsList;
    },
  },
};
</script>
