<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1 class="text-4xl lg:text-[56px] font-apercu-bold lg:leading-[72px]">
    {{ heading }}
  </h1>
</template>
