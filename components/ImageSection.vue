<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section
    data-aos="fade-up"
    data-aos-duration="800"
    class="w-full h-fit my-8 lg:my-16"
  >
    <img :src="imageUrl" :alt="altText" class="mx-auto" />
  </section>
</template>
