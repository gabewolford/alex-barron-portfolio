<script setup>
defineProps({
  imageUrl1: {
    type: String,
    required: true,
  },
  caption1: {
    type: String,
    required: true,
  },
  imageUrl2: {
    type: String,
    required: true,
  },
  caption2: {
    type: String,
    required: true,
  },
  imageUrl3: {
    type: String,
    required: true,
  },
  caption3: {
    type: String,
    required: true,
  },
  imageUrl4: {
    type: String,
    required: true,
  },
  caption4: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="w-full h-fit my-8 lg:my-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
      <div class="flex flex-col gap-4 order-1 md:order-1">
        <img :src="imageUrl1" :alt="caption1" />
        <h6 class="text-[#999999] text-sm">{{ caption1 }}</h6>
      </div>
      <div class="flex flex-col gap-4 order-3 md:order-2">
        <img :src="imageUrl2" :alt="caption2" />
        <h6 class="text-[#999999] text-sm">{{ caption2 }}</h6>
      </div>
      <div class="flex flex-col gap-4 order-2 md:order-3">
        <img :src="imageUrl3" :alt="caption3" />
        <h6 class="text-[#999999] text-sm">{{ caption3 }}</h6>
      </div>
      <div class="flex flex-col gap-4 order-4 md:order-4">
        <img :src="imageUrl4" :alt="caption4" />
        <h6 class="text-[#999999] text-sm">{{ caption4 }}</h6>
      </div>
    </div>
  </section>
</template>
