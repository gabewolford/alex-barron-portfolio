<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
  subheading1: {
    type: String,
    required: true,
  },
  text1: {
    type: String,
    required: true,
  },
  subheading2: {
    type: String,
    required: true,
  },
  text2: {
    type: String,
    required: true,
  },
  subheading3: {
    type: String,
    required: true,
  },
  text3: {
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
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-16">
      <div class="flex flex-col gap-8 lg:gap-16 w-full lg:w-1/3">
        <h2 class="text-xl lg:text-[56px]">{{ heading }}</h2>
      </div>
      <div class="flex flex-col gap-8 w-full lg:w-2/3">
        <div class="flex flex-col gap-2">
          <h5 class="text-lg lg:text-2xl">{{ subheading1 }}</h5>
          <p class="lg:text-lg">
            {{ text1 }}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <h5 class="text-lg lg:text-2xl">{{ subheading2 }}</h5>
          <p class="lg:text-lg">
            {{ text2 }}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <h5 class="text-lg lg:text-2xl">{{ subheading3 }}</h5>
          <p class="lg:text-lg">
            {{ text3 }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
