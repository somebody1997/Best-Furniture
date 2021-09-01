<template>
  <section>
    <Loading :is-loading="isLoading" />
    <div class="container pt-5">
      <div class="pt-5 pb-3">
        <h2 class="fw-bold">Check Order</h2>
      </div>
    </div>
    <div class="container pt-2">
      <div class="row">
        <!--Order Checkout-->
        <div class="col pb-3">
          <div class="bg-info rounded-3">
            <h3 class="fw-bold text-light p-3">Checkout List</h3>
              <div
                class="
                  row
                  g-0
                  p-4
                  rounded-3
                  border border-primary
                  text-light
                  bg-primary
                  pb-5
                "
              >
                <div class="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                  <div class="row mb-3 gx-1 gx-sm-5">
                    <p class="col-4 fw-bold mb-3 pb-3 border-bottom">
                      Order Date：
                    </p>
                    <p class="col-8 mb-3 pb-3 border-bottom">{{ orderDate }}</p>
                    <p class="col-4 fw-bold mb-3 pb-3 border-bottom">
                      Tracking Number：
                    </p>
                    <p class="col-8 mb-3 pb-3 border-bottom text-break">
                      {{ order.id }}
                    </p>
                    <p class="col-4 fw-bold mb-3 pb-3 border-bottom">Name：</p>
                    <p class="col-8 mb-3 pb-3 border-bottom">{{ user.name }}</p>
                    <p class="col-4 fw-bold mb-3 pb-3 border-bottom">Phone：</p>
                    <p class="col-8 mb-3 pb-3 border-bottom">{{ user.tel }}</p>
                    <p class="col-3 fw-bold mb-3 pb-3 border-bottom">Email：</p>
                    <p class="col-9 mb-3 pb-3 border-bottom">
                      {{ user.email }}
                    </p>
                    <p class="col-4 fw-bold mb-3 pb-3 border-bottom">
                      Address：
                    </p>
                    <p class="col-8 mb-3 pb-3 border-bottom">
                      {{ user.address }}
                    </p>
                    <p  v-if="order.message" class="col-4 fw-bold mb-3 pb-3 border-bottom">Note：</p>
                    <p  v-if="order.message" class="col-8 mb-3 pb-3 border-bottom">
                      {{ order.message }}
                    </p>
                    <p class="col-4 fw-bold mb-4 pb-4 border-bottom">Total：</p>
                    <p
                      class="
                        col-8
                        mb-4
                        pb-4
                        border-bottom
                        d-flex
                        align-items-center
                        justify-content-between
                      "
                    >
                      NT${{ $toCurrency(order.total) }}
                    </p>
                  </div>
                  <button
                    type="button"
                    @click="pay(orderID)"
                    class="w-100 text-white btn btn-lg btn-secondary"
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
            <div class="container mt-4 mt-lg-12 pb-3 mb-3 ">
        <div class="row row-cols-1 row-cols-lg-2 flex-column-reverse flex-lg-row gx-5 d-flex
        justify-content-center">
          <div class="col bg-pampas rounded-top rounded-bottom">
            <h3 class="text-xl p-3 text-Tradtion fw-bold">Checkout List</h3>
            <div class="bg-pampas px-4 text-dark fw-bold">
                      <p class="fw-bold mb-4">Products List :</p>
                      <div class="row align-items-center mb-4">
                        <div class="col-6">
                          <p>Product</p>
                        </div>
                        <div class="col-2">
                          <p>Qty</p>
                        </div>
                        <div class="col-4">
                          <p>SubTotal</p>
                        </div>
                      </div>
                      <div v-for="item in order.products" :key="item.id"
                      class="row align-items-center mb-5">
                        <div class="col-6">
                          <div class="d-flex align-items-center">
                            <img class="w-40 "
                            :src="item.product.imageUrl" :alt="item.product.title" />
                            <p>{{ item.product.title }}</p>
                          </div>
                        </div>
                        <div class="col-2">
                          <p>{{ item.qty }}</p>
                        </div>
                        <div class="col-4">
                          <p>NT${{ $toCurrency(item.final_total) }}</p>
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
import Loading from '@/components/Loading.vue';

export default {
  data() {
    return {
      orderDate: '',
      orderID: '',
      order: {},
      user: {},
      isLoading: false,
    };
  },
  components: {
    Loading,
  },
  methods: {
    getOrder(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
            const date = new Date(res.data.order.create_at * 1000).toISOString().split('T');
            [this.orderDate] = date;
            this.user = res.data.order.user;
            this.isLoading = false;
          } else {
            this.isLoading = false;
          }
        })
        .catch(() => {
          this.$moshaToast({
            title: 'ERRORgetOrder',
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
    pay(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${id}`;
      this.$http
        .post(url)
        .then((res) => {
          if (res.data.success) {
            this.$router.push({ name: 'finalConfirm', params: { order: this.orderID } });
            this.isLoading = false;
          } else {
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
            this.isLoading = false;
          }
        })
        .catch(() => {
          this.$moshaToast({
            title: 'ERROR open',
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
    this.orderID = this.$route.params.order;
    this.getOrder(this.orderID);
  },
};
</script>
