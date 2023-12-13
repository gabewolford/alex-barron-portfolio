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
  subText: {
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
        <h4 class="text-[#716E75]">{{ heading }}</h4>
        <div
          class="flex flex-col lg:flex-row gap-0 lg:gap-16 border-[#D7D4DB] border-t"
        >
          <p class="text-base lg:text-[32px] pt-8 lg:leading-[45px] lg:w-1/2">
            {{ text }}
          </p>
          <p
            class="text-base lg:text-lg mt-8 lg:pt-2 lg:leading-[24px] lg:w-1/2"
          >
            {{ subText }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
