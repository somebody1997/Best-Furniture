<template>
  <Loading :isLoading="isLoading" />
  <div class="container pt-5">
      <div class="pt-5 pb-3">
        <h2 class="fw-bold">Order Confirmed </h2>
      </div>
    </div>
    <div class="container pt-3 pb-5 mt-sm-12">
    <div class="row bg-info rounded p-5">
      <div class="container bg-primary rounded p-4">
      <h3 class="text-center text-light mb-3">Thank you for purchasing </h3>
      <p class="text-center mb-4">Below is your Checkout List</p>
      <div class="d-flex w-100 w-md-40 mx-auto">
        <router-link :to="`/`" class="w-50 btn btn-outline-light shadow-sm me-6">
          Back Home
        </router-link>
        <router-link
          :to="`/Products`"
          class="w-50 btn btn-secondary shadow-sm text-white secondary-hover">
          To Products
        </router-link>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Loading from '../../components/Loading.vue';

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
};
</script>
