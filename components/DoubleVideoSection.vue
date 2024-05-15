<script setup>
defineProps({
  videoUrl1: {
    type: String,
    required: true,
  },
  videoUrl2: {
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
    <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      <div class="lg:w-1/4">
        <video
          muted
          controls
          autoplay
          class="rounded-[38px]"
          playsinline="true"
        >
          <source :src="videoUrl1" />
        </video>
      </div>
      <div class="lg:w-3/4 object-contain">
        <video muted controls class="rounded-[38px]" playsinline="true">
          <source :src="videoUrl2" />
        </video>
      </div>
    </div>
  </section>
</template>
