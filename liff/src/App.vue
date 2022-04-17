<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand">{{ navbarText }}</a>
      <div class="d-flex" v-if="isProductsPage">
        <b-button class="btn btn-success" to="/contact">Contact</b-button>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-sm-12 col-md-6">
        <router-view />
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isProductsPage() {
      return this.$route.path.startsWith('/products')
    },
    navbarText() {
      if (this.$route.path.startsWith('/products')) {
        return 'products'
      } else {
        return 'contact'
      }
    },
  },
}
</script>
