<template>
  <div>
      <div class="container pt-3">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-lg-8">
            <p
              data-aos="zoom-in"
              class="fs-1 text-start text-lg-left  text-shadow"
            >
              <strong class="text-Tradtion">New Coupon</strong>
            </p>
            <p
              data-aos="zoom-in"
              class="text-center fs-1 text-shadow"
            >
              <strong class="text-Tradtion">Get your discount 20% OFF</strong>
              <button
                class="
                  btn btn-outline-info btn-lg
                  px-6
                  ms-lg-3
                  mt-3 mt-lg-0
                  rounded-pill
                "
                type="button"
                @click="this.$refs.getCouponModal.openModal()"
              >
              Coupon
              </button>
            </p>
          </div>
        </div>
      </div>
    <GetCouponModal ref='getCouponModal'></GetCouponModal>
  </div>
</template>

<script>
import GetCouponModal from './GetCouponModal.vue';

export default {
  components: {
    GetCouponModal,
  },
};
</script>
