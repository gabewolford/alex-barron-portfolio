<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
  bullets: {
    type: Array,
    required: true,
  },
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
});
</script>

<template>
  <section class="w-full h-fit my-8 lg:my-16">
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-16">
      <div class="flex flex-col gap-8 lg:gap-16 w-full lg:w-1/3">
        <h2 class="text-xl lg:text-[56px]">{{ heading }}</h2>
        <ul class="flex flex-col gap-6 ml-4">
          <li
            v-for="(bullet, index) in bullets"
            :key="index"
            class="list-disc"
            :class="{
              'text-[#999999]': index === 0,
              'text-[#2B705C]': index === 1,
              'text-[#11AA7E]': index === 2,
            }"
          >
            {{ bullet }}
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-4 w-full lg:w-2/3">
        <div class="flex flex-col lg:flex-row lg:items-baseline gap-8">
          <div class="flex flex-col gap-4 lg:gap-12">
            <img :src="imageUrl1" :alt="caption1" />
            <h4 class="text-[#999999] text-sm lg:text-base">{{ caption1 }}</h4>
          </div>
          <div class="flex flex-col gap-4 lg:gap-12">
            <img :src="imageUrl2" :alt="caption2" />
            <h4 class="text-[#2B705C] text-sm lg:text-base">{{ caption2 }}</h4>
          </div>
          <div class="flex flex-col gap-4 lg:gap-12">
            <img :src="imageUrl3" :alt="caption3" />
            <h4 class="text-[#11AA7E] text-sm lg:text-base">{{ caption3 }}</h4>
          </div>
        </div>
        <div class="border-t border-black hidden lg:flex">
          <h6 class="pt-4">2021-2022</h6>
        </div>
      </div>
    </div>
  </section>
</template>
