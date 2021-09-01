<template>
 <Loading :is-loading="isLoading"/>
   <p class="text-primary pt-4">Customer Information</p>
  <Form v-slot="{ errors }" ref="form" @submit="onSubmit" class=" rounded-bottom pt-2 pb-4">
    <div class="form-floating form-downline mb-3">
      <Field
        id="name"
        name="name"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors['name'] }"
        placeholder="Please enter your name"
        rules="required"
        v-model="form.user.name"
      ></Field>
      <label for="name" class="form-label">NAME <sup>*</sup>：</label>
      <ErrorMessage name="name" class="invalid-feedback" />
    </div>
    <div class="form-floating form-downline mb-3">
      <Field
        id="email"
        name="email"
        type="email"
        class="form-control"
        :class="{ 'is-invalid': errors['email'] }"
        placeholder="Please enter your Email"
        rules="email|required"
        v-model="form.user.email"
      ></Field>
      <label for="email">Email <sup>*</sup>：</label>
      <ErrorMessage name="email" class="invalid-feedback" />
    </div>
    <div class="form-floating form-downline mb-3">
      <Field
        id="tel"
        name="Phone"
        type="tel"
        class="form-control"
        :class="{ 'is-invalid': errors['Phone'] }"
        placeholder="Please enter your Phone"
        :rules="isPhone"
        v-model="form.user.tel"
      ></Field>
      <label for="tel">Phone <sup>*</sup>：</label>
      <ErrorMessage name="Phone" class="invalid-feedback" />
    </div>
    <div class="form-floating form-downline mb-4">
     <Field
        id="address"
        name="address"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors['address'] }"
        placeholder="Please enter address"
        rules="required"
        v-model="form.user.address"
      ></Field>
      <label for="address">Address <sup>*</sup>：</label>
      <ErrorMessage name="address" class="invalid-feedback" />
    </div>
    <div class="mb-8">
      <label for="exampleFormControlTextarea1" class="form-label text-dark pt-1">NOTE：</label>
      <textarea
        class="form-control bg-transparent border-secondary"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="form.message"
      ></textarea>
    </div>
    <div class="form-check mb-3">
      <Field
        class="form-check-input"
        id="flexCheckChecked"
        name="check"
        type="checkbox"
        :class="{ 'is-invalid': errors['check'] }"
        value="checked"
        :rules="isChecked"
      ></Field>
      <label class="form-check-label text-dark" for="flexCheckChecked">
        I agree to the Trems of Service and Privacy Policy<sup>*</sup>
      </label>
      <ErrorMessage name="check" class="invalid-feedback" />
    </div>
    <button
      type="submit"
      class="w-100 btn-lg btn btn-secondary secondary-hover text-white shadow-sm mb-6"
    >
      Next Step
    </button>
  </Form>
</template>

<script>
import emitter from '../methods/mitt';

export default {
  data() {
    return {
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          Address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : 'Please enter in a valid phone number';
    },
    isChecked(value) {
      if (value && value.length) {
        return true;
      }
      return 'Please read and confirmed';
    },
    onSubmit() {
      const data = {
        data: this.form,
      };
      this.isLoading = true;
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`, data)
        .then((res) => {
          if (res.data.success) {
            emitter.emit('update-cart');
            this.$refs.form.resetForm();
            this.$router.push({ name: 'check', params: { order: res.data.orderId } });
            this.isLoading = false;
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
  },
};
</script>
