<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

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
  <nav class="m-auto mt-10">
    <ul class="list-style-none mb-6 flex font-semibold gap-1">
      <li>
        <a
          class="pointer-events-none relative block rounded bg-transparent px-4 py-2 text-md text-surface/50 transition duration-300 dark:text-neutral-400"
          >Предыдущая</a
        >
      </li>

      <li aria-current="page">
        <a
          class="relative block rounded bg-danger-100 px-4 py-2 text-md font-medium text-danger-700 transition duration-300 focus:outline-none dark:bg-[#a23030] dark:text-danger-500"
          href="#!"
          >1
          <span
            class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
            >(current)</span
          >
        </a>
      </li>

      <li v-for="item in 5">
        <a
          class="relative block rounded bg-transparent px-4 py-2 text-md text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-danger-700 focus:outline-none active:bg-neutral-100 active:text-danger-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-danger-500 dark:active:bg-neutral-700 dark:active:text-danger-500"
          href="#!"
          >{{ item + 1 }}</a
        >
      </li>

      <li>
        <a
          class="relative block rounded bg-transparent px-4 py-2 text-md text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-danger-700 focus:outline-none active:bg-neutral-100 active:text-danger-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-danger-500 dark:active:bg-neutral-700 dark:active:text-danger-500"
          href="#!"
          >Следующая</a
        >
      </li>
    </ul>
  </nav>
</template>
