<template>
<swiper
:slidesPerView="3"
:spaceBetween="20"
:slidesPerGroup="3"
:loopFillGroupWithBlank="true"
:freeMode="true"
 :breakpoints="{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }"
:pagination='{
  "clickable": true
}'
class="mySwiper">
    <swiper-slide>
      <div class="card rounded-3" style="width: 18rem">
        <img
          class="card-img-top"
           src="@/assets/images/PIC/woodtable.png"
          alt="Card image cap"
        />
        <div class="card-body bg-success">
          <h5 class="card-title">Harmonious</h5>
          <p class="card-text text-green">
           Harmonious and elegant wood table in a modern form language
           would be the best choise for every family.
          </p>
          <a href="#" class="btn btn-dark" @click.prevent="goToCategory('Tables')">See More</a>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card rounded-3" style="width: 18rem">
        <img
          class="card-img-top"
          src="@/assets/images/PIC/sofablock.png"
          alt="Card image cap"
        />
        <div class="card-body bg-yeoow">
          <h5 class="card-title">Comfort</h5>
          <p class="card-text">
           A living room is hardly a living room without a sofa,
            our sofa can make your living room always cosy for relaxing.
          </p>
          <a href="#" class="btn btn-dark" @click.prevent="goToCategory('Sofas')">See More</a>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card rounded-3" style="width: 18rem">
        <img
          class="card-img-top"
          src="@/assets/images/PIC/woodchairs.png"
          alt="Card image cap"
        />
        <div class="card-body bg-secprimary">
          <h5 class="card-title"> Elegant </h5>
          <p class="card-text">
           Take a look at our Elegant chairs! Comfortable for placing your dining room
           and your home.
          </p>
          <a href="#" class="btn btn-dark" @click.prevent="goToCategory('Chairs')">See More</a>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide><div class="card rounded-3" style="width: 18rem">
        <img
          class="card-img-top"
          src="@/assets/images/PIC/blackchairs.jpeg"
          alt="Card image cap"
        />
        <div class="card-body bg-success">
          <p class="card-text">
           A new and innovative solution for gathering the seat with the legs has been developed.
           The molded plastic seat are naturally integrated with the seat using unique cup system.
          </p>
          <a href="#" class="btn btn-dark" @click.prevent="goToCategory('Chairs')">See More</a>
        </div>
      </div>
      </swiper-slide>
       <swiper-slide>
      <div class="card rounded-3" style="width: 18rem">
        <img
          class="card-img-top"
          src="@/assets/images/PIC/graysofa.jpg"
          alt="Card image cap"
        />
        <div class="card-body bg-secprimary">
          <h5 class="card-title">Sofa planners</h5>
          <p class="card-text">
            Have a look at our sofas. What kind of sofa do you need?
           To design your sofa solution yourself, see our sofa products.
          </p>
          <a href="#" class="btn btn-dark" @click.prevent="goToCategory('Sofas')">See More</a>
        </div>
      </div>
    </swiper-slide>
     <swiper-slide>
      <div class="card rounded-3" style="width: 18rem">
        <img
          class="card-img-top"
          src="@/assets/images/PIC/metaltable.png"
          alt="Card image cap"
        />
        <div class="card-body bg-yeoow">
          <p class="card-text">
            Our tables always give you comfort and durability in a big choice of styles.
            Nicely to share good food and laughter with family and friends..
          </p>
          <a href="#" class="btn btn-dark" @click.prevent="goToCategory('Tables')">
           See More</a>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import SwiperCore, {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';

import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
    goToCategory(category) {
      this.$router.push({ name: 'productcategory', query: { category } });
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/stylesheets/all";

</style>
