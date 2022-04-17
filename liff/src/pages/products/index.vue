<template>
  <div class="container">
    <b-overlay :show="isShow" rounded="sm">
      <b-card>
        <b-tabs v-model="tabIndex" content-class="mt-3" justified>
          <b-tab title="BASIC">
            <Product :product="basic" v-on:select:product="selectProduct" />
          </b-tab>
          <b-tab title="PRO">
            <Product :product="pro" v-on:select:product="selectProduct" />
          </b-tab>
          <b-tab title="BUSINESS">
            <Product :product="business" v-on:select:product="selectProduct" />
          </b-tab>
        </b-tabs>
        <br />
      </b-card>
    </b-overlay>
  </div>
</template>

<script>
import liff from '@line/liff'
import Product from '../../components/Product.vue'
import { basic, pro, business } from '../../assets/products.json'

export default {
  components: {
    Product,
  },
  data() {
    return {
      isShow: true,
      tab: 'BASIC',
      tabIndex: 0,
      basic,
      pro,
      business,
    }
  },

  methods: {
    async selectProduct(name) {
      console.log(name)
      switch (name) {
        case 'basic':
          await liff.sendMessages([{ type: 'text', text: 'package basic' }])
          break
        case 'pro':
          await liff.sendMessages([{ type: 'text', text: 'package pro' }])
          break
        case 'business':
          await liff.sendMessages([{ type: 'text', text: 'package business' }])
          break
        default:
          break
      }

      liff.closeWindow()
    },
  },

  async mounted() {
    this.$route.query.tab !== undefined ? (this.tab = this.$route.query.tab) : (this.tab = 'BASIC')

    switch (this.tab) {
      case 'BASIC':
        this.tabIndex = 0
        break

      case 'PRO':
        this.tabIndex = 1
        break

      case 'BUSINESS':
        this.tabIndex = 2
        break
    }

    await liff.init({
      liffId: import.meta.env.VITE_LIFF_PRODUCTS_ID,
      withLoginOnExternalBrowser: true,
    })

    this.isShow = false
  },
}
</script>

<style scoped>
.container {
  margin-top: 10%;
}
</style>
