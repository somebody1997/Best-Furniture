import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Front',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/Frontend/Index.vue'),
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/Frontend/Products.vue'),
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/Frontend/Product.vue'),
      },
      {
        path: 'productcategory',
        name: 'productcategory',
        component: () => import('../views/Frontend/productcategory.vue'),
      },
      {
        path: 'shippingcart',
        component: () => import('../views/Frontend/shippingcart.vue'),
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('../views/Frontend/checkout.vue'),
      },
      {
        path: 'check/:order',
        name: 'check',
        component: () => import('../views/Frontend/check.vue'),
      },
      {
        path: 'finalConfirm/:order',
        name: 'finalConfirm',
        component: () => import('../views/Frontend/finalConfirm.vue'),
      },
      {
        path: 'wishlist',
        name: 'wishlist',
        component: () => import('../views/Frontend/wishlist.vue'),
      },
    ],
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('../views/Backend/Dashboard.vue'),
    children: [
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/Backend/Coupons.vue'),
      },
      {
        path: 'productList',
        name: 'ProductList',
        component: () => import('../views/Backend/ProductList.vue'),
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/Backend/Orders.vue'),

      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/Tools/Oops.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
