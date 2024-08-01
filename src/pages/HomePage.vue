<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

import Header from '../components/Header.vue'
import CardContainer from '../components/CardContainer.vue'
import Paginator from '../components/Pagination.vue'
import Footer from '../components/Footer.vue'

const items = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('https://c0e2800687b70486.mokky.dev/movies?page=1&limit=30')
    items.value = data.items
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <CardContainer :items="items" />
    <Paginator />
    <Footer />
  </div>
</template>
