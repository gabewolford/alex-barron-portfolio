<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
  heading2: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  problemsArrary: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="flex flex-col gap-8 py-8 lg:py-16 lg:mx-32">
    <div class="col-span-full lg:col-start-3 lg:col-span-8">
      <div class="flex flex-col gap-3">
        <h4 class="text-[#716E75] lg:text-2xl lg:leading-[160%]">
          {{ heading }}
        </h4>
        <p class="text-base lg:text-2xl lg:leading-[160%]">
          {{ text }}
        </p>
        <p class="text-base lg:text-2xl lg:leading-[160%] pt-8">
          {{ heading2 }}
        </p>
        <ul class="text-base lg:text-2xl lg:leading-[160%]">
          <li
            v-for="(problem, index) in problemsArrary"
            :key="index"
            class="list-disc ml-10"
          >
            {{ problem }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
