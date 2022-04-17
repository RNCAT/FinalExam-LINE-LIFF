<template>
  <div class="container">
    <h5 class="text-center">Computer Science</h5>
    <h6 class="text-center">Faculty of Science and Technology</h6>
    <b-img
      src="https://sci.skru.ac.th/science/download/formdownload/logo/SciLogoPNG.png"
      fluid
      alt="Sci - SKRU"
    ></b-img>
    <br /><br />
    <ul>
      <li>Computer Science</li>
      <li>Faculty of Science and Technology</li>
      <li>email: comsci@skru.ac.th</li>
      <li>Tel: 074-999999</li>
      <li>Web: http://cs.skru.ac.th</li>
    </ul>
    <div class="d-grid gap-2" v-if="isProduct">
      <b-button block variant="outline-primary" to="/products">BACK TO PRODUCTS</b-button>
    </div>
  </div>
</template>

<script>
import liff from '@line/liff'

export default {
  data() {
    return {
      liffID: null,
      isProduct: false,
    }
  },

  async mounted() {
    if (!liff.id) {
      await liff.init({
        liffId: import.meta.env.VITE_LIFF_CONTACT_ID,
        withLoginOnExternalBrowser: true,
      })
      this.liffID = import.meta.env.VITE_LIFF_CONTACT_ID
    } else {
      this.isProduct = true
    }
  },
}
</script>

<style scoped>
.container {
  margin-top: 10%;
}
</style>
