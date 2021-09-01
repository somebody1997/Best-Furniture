<template>
  <!--banner-->
  <div class="container-fluid pt-5 py-3 px-5 mt-5">
    <ul class="list-unstyled">
      <li class="row flex-row-reverse align-items-center mb-5">
        <div
          class="
            col-md-4 col-sm-8
            d-flex
            flex-column
            justify-content-center
            align-items-center
          "
        >
          <h3>Best Furniture</h3>
          <p class="border-bottom pb-3 text-nowrap">
            Furniture you will fall for
          </p>
          <router-link to="/products" class="btn btn-primary text-light mb-2">
            See more
          </router-link>
        </div>
        <div class="col-md-8 col-sm-4">
          <img src="@/assets/images/PIC/BIG-front.jpg" class="w-100 rounded" />
        </div>
      </li>
    </ul>
  </div>
  <!-- swipper/collection card-->
  <div class="container py-2">
    <!--建議的卡片-->
    <h2>Best collocation</h2>
    <div class="row pt-2">
      <swiper> </swiper>
    </div>
  </div>

  <section class="py-4">
    <!--Featured Products-->
    <div class="container py-3">
      <div class="col-md-12">
        <h2 class="py-3">Featured Products</h2>
      </div>
      <div class="row text-center pt-2">
        <div class="col-lg-4 col-md-6 col-sm-4">
          <router-link :to="`/product/-McUF6MmYeL-MpfYgN3B`" class="h-100">
            <img
              src="@/assets/images/PIC/tableround.png"
              alt=""
              class="rounded-circle me-5"
              style="width: 300px; height: 300px; object-fit: cover"
            />
          </router-link>
          <div class="card-body">
            <h4>CPH 30 Table</h4>
            <div class="text-center w-lg-50 text-success">
              Top Featured
            </div>
            <div class="d-flex justify-content-center">
              <p class="show-price mt-3 px-2">NT$ 26,980</p>
              <router-link :to="`/product/-McUF6MmYeL-MpfYgN3B`"
                type="button"
                class="
                  mt-3
                  py-1
                  btn-rounded btn btn-primary
                  w-70
                  fs-7
                  text-white
                "
                style="text-transform: capitalize; height: 45px"

              >
                Go to product
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-4">
          <router-link :to="`/product/-Mar4XYP44djsIYhZO2Z`" class="h-100">
            <img
              src="@/assets/images/PIC/sofagray.png"
              alt=""
              class="rounded-circle me-5"
              style="width: 300px; height: 300px; object-fit: cover"
            />
          </router-link>
          <div class="card-body">
            <h4>CH164 Sofa</h4>
            <div class="text-center w-lg-50 text-info">
              Weekly best selling
            </div>
            <div class="d-flex justify-content-center">
              <p class="show-price mt-3 px-2">NT$ 164,530</p>
              <router-link :to="`/product/-Mar4XYP44djsIYhZO2Z`"
                type="button"
                class="
                  mt-3
                  py-1
                  btn-rounded btn btn-primary
                  w-70
                  fs-7
                  text-white
                "
                style="text-transform: capitalize; height: 45px"

              >
                Go to product
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-4">
          <router-link :to="`/product/-MfSo5Zl70oHkC-_vqpW`" class="h-100">
            <img
              src="@/assets/images/PIC/side.jpg"
              alt=""
              class="rounded-circle me-5"
              style="width: 300px; height: 300px; object-fit: cover"
            />
          </router-link>
          <div class="card-body">
            <h4>Slats Sideboard</h4>
            <div class="text-center w-lg-50 text-yeoow">
              New Arrival
            </div>
            <div class="d-flex justify-content-center">
              <p class="show-price mt-3 px-2">NT$ 38,402</p>
              <router-link :to="`/product/-MfSo5Zl70oHkC-_vqpW`"
                type="button"
                class="
                  mt-3
                  py-1
                  btn-rounded btn btn-primary
                  w-70
                  fs-7
                  text-white
                "
                style="text-transform: capitalize; height: 45px"

              >
                Go to product
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="my-2 d-flex justify-content-center">
        <CouponSection></CouponSection>
      </div>
    </div>
  </section>
  <section>
    <!--category-->
    <div class="container-fluid pb-5 bg-pampas pt-3">
      <div class="container">
      <h2>Discover By Category</h2>
      <p class="text-Tradtion">COMFORTABLE ZONE</p>
      <div class="row align-items-center ">
      <div
        class="
          col-lg-6 col-12
          position-relative
          d-flex
          flex-column flex-md-row
          d-lg-block
          ml-3
        "
      >
        <h3 class="w-80">Made for comfortable</h3>
        <p class="lh-lg letter-spacing-1">
          Explore different category of furnishings<br/>
          to assist your current and future home,<br/>
          from small apartment to luxury mansion,<br/>
          All fit to your dream house.
        </p>
      </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">
              <div class="picture-container">
                <a
                  href="#"
                  @click.prevent="goToCategory('Chairs')"
                  class=" bg-topic mb-7 textho"
                >
                    <img
                      class="w-100 top-0 rounded-3"
                      src="@/assets/images/PIC/greenchair.png"
                    />
                  <p class="position-absolute">Chairs</p>
                </a>
              </div>

              <div class="picture-container pt-2">
                <a
                  href="#"
                  @click.prevent="goToCategory('Sofas')"
                  class="bg-topic mb-7 textho"
                >
                    <img
                      class="w-100 top-0 rounded-3"
                      src="@/assets/images/PIC/graysofa.png"
                    />
                  <p class="position-absolute">Sofas</p>
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <!--右-->
              <div class="picture-container">
                <a
                  href="#"
                  @click.prevent="goToCategory('Tables')"
                  class="bg-topic mb-7 "
                >
                    <img
                      class="w-100 top-0 rounded-3"
                      src="@/assets/images/PIC/worktable.png"
                    />
                  <p class=" position-absolute">Tables</p>
                </a>
              </div>
              <div class="picture-container pt-2">
                <a
                  href="#"
                  @click.prevent="goToCategory('Storage')"
                  class="bg-topic mb-7 textho"
                >
                    <img
                      class="w-100 top-0 rounded-3"
                      src="@/assets/images/PIC/storage.png"
                    />
                  <p class="position-absolute">Storage</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  <div class="container py-5">
    <div
      class="
        wow
        animate__animated animate__lightSpeedInLeft
        d-flex
        align-items-center
        mb-2
      "
    >
      <h3 class="title text-3xl">About Us</h3>
    </div>
    <div
      class="
        row row-cols-2
        align-items-center
        flex-column-reverse flex-lg-row
        pb-10
        mb-10
        border-bottom border-light
      "
    >
      <div
        class="
          col-lg-5 col-12
          position-relative
          d-flex
          flex-column flex-md-row
          d-lg-block
          wow
          animate__animated animate__fadeInLeft
        "
      >
        <h1 class="text-primary font-design mb-10 w-50">Best Furniture</h1>
        <p class="lh-lg letter-spacing-1">
          True quality comes from far more than great design <br />
          and selecting excellent materials.<br />
          We believe that when you choose a piece made by us, a relationship
          begins.
        </p>
      </div>
      <div class="col-lg-7 col-12 wow animate__animated animate__fadeInRight">
        <img
          class="rounded-3 img-thumbnail"
          src="@/assets/images/PIC/home.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '../../methods/mitt';

import swiper from '../../components/swiper.vue';

import CouponSection from '../../components/Coupon.vue';

export default {
  data() {
    return {
      product: { imagesUrl: {} },
      products: [],
      filterProducts: [],
      isLoading: false,
      qty: 1,
    };
  },
  components: {
    swiper,
    CouponSection,
  },
  methods: {
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
          }
        })
        .catch((error) => {
          console.log(error);
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

.headcover {
  height: 790px;
}
</style>
