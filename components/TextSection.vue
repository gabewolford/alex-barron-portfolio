<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section
    data-aos="fade-up"
    data-aos-duration="800"
    class="flex flex-col gap-8 py-8 lg:py-16 lg:mx-32"
  >
    <div class="col-span-full lg:col-start-3 lg:col-span-8">
      <div class="flex flex-col gap-3">
        <h4 class="text-[#716E75] lg:text-2xl lg:leading-[160%]">
          {{ heading }}
        </h4>
        <p class="text-base lg:text-2xl lg:leading-[160%]">
          {{ text }}
        </p>
      </div>
    </div>
  </section>
</template>
