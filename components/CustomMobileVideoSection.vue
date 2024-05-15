<script setup>
defineProps({
  videoUrl: {
    type: String,
    // required: true,
  },
  heading: {
    type: String,
    // required: true,
  },
  subHeading1: {
    type: String,
    // required: true,
  },
  subText1: {
    type: String,
    // required: true,
  },
  subHeading2: {
    type: String,
    // required: true,
  },
  subText2: {
    type: String,
    // required: true,
  },
});
</script>

<template>
  <section
    data-aos="fade-up"
    data-aos-duration="800"
    class="flex flex-col lg:flex-row gap-8 py-8 lg:py-16 lg:mx-32"
  >
    <div class="flex flex-col gap-8 justify-center lg:w-1/2 lg:px-16">
      <h3 class="text-2xl">{{ heading }}</h3>
      <div class="flex flex-col gap-3">
        <h5 class="text-sm font-apercu-medium">{{ subHeading1 }}</h5>
        <p class="text-sm">{{ subText1 }}</p>
      </div>
      <div class="flex flex-col gap-3">
        <h5 class="text-sm font-apercu-medium">{{ subHeading2 }}</h5>
        <p class="text-sm">{{ subText2 }}</p>
      </div>
    </div>
    <div class="flex lg:w-1/2 justify-center">
      <video muted controls autoplay playsinline="true" class="rounded-[38px]">
        <source :src="videoUrl" />
      </video>
    </div>
  </section>
</template>
