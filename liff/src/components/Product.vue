<template>
  <b-card :header="product.header" header-tag="header" class="mb-2">
    <h1 class="text-center">{{ product.price }}</h1>
    <p class="text-center">{{ product.priceDesc }}</p>
    <ul>
      <li v-for="desc in product.descriptions" :key="desc.id">{{ desc.text }}</li>
    </ul>

    <div class="d-grid gap-2">
      <b-button block variant="primary" @click="selectPackage(product)"
        >SELECT THIS PACKAGE</b-button
      >
    </div>
  </b-card>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    selectPackage(product) {
      this.$emit('select:product', product.name)
    },
  },
}
</script>

<style>
h1 {
  margin: 20px;
  color: rgb(58, 151, 183);
}

p {
  color: gray;
}
</style>
