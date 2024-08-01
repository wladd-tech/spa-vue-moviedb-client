<script setup>
import Card from './Card.vue'

defineProps({
  items: Array
})


</script>

<template>
  <main class="w-2/3 m-auto grid grid-cols-6 gap-4 mt-14">
    <Card
      v-for="item in items"
      :key="item.film_id"
      :film_id="item.film_id"
      :imageURL="item.imageURL"
    />
  </main>
</template>
