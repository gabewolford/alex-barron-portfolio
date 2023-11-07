<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1 class="text-4xl lg:text-[56px] my-8 lg:my-16 font-apercu-bold">
    {{ heading }}
  </h1>
  <div
    class="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between pb-8 lg:pb-16"
  >
    <div class="flex flex-col gap-3 lg:w-1/3">
      <h2 class="text-[#716E75]">Client</h2>
      <h3 class="border-[#D7D4DB] border-t pt-8">{{ client }}</h3>
    </div>
    <div class="flex flex-col gap-3 lg:w-1/3">
      <h2 class="text-[#716E75]">Role</h2>
      <h3 class="border-[#D7D4DB] border-t pt-8">{{ role }}</h3>
    </div>
    <div class="flex flex-col gap-3 lg:w-1/3">
      <h2 class="text-[#716E75]">Platform</h2>
      <h3 class="border-[#D7D4DB] border-t pt-8">{{ platform }}</h3>
    </div>
  </div>
</template>
