<!-- eslint-disable vue/multi-word-component-names -->

<script setup>

defineProps({
  film_id: String,
  imageURL: String
})

</script>

<template>
  <div class="rounded-2xl shadow-xl hover:-translate-y-1 cursor-pointer">
    <img class="rounded-2xl" :src="imageURL" alt="poster" />
  </div>
</template>
