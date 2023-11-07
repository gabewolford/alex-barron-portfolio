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
  <section class="flex flex-col gap-8 py-8 lg:py-16 mx-8 lg:mx-32">
    <div class="col-span-full lg:col-start-3 lg:col-span-8">
      <div class="flex flex-col gap-3">
        <h4 class="text-[#716E75] text-center">{{ heading }}</h4>
        <p
          class="text-base lg:text-[32px] pt-8 border-[#D7D4DB] border-t lg:leading-[45px] text-center"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </section>
</template>
