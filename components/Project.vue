<script setup>
defineProps({
  year: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    required: true,
  },
  linkTo: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="grid grid-cols-2 lg:grid-cols-8 gap-8 border-t border-[#D7D4DB] py-8"
  >
    <h3 class="col-start-1 text-[#9790A0] text-2xl">{{ year }}</h3>
    <h3 class="col-span-5 text-2xl">{{ title }}</h3>
    <div class="flex justify-end col-span-2 text-[#9790A0] text-right text-2xl">
      <NuxtLink :href="linkTo">
        {{ linkText }}
      </NuxtLink>
    </div>
  </div>
</template>
