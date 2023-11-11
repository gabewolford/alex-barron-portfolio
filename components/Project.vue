<script setup>
defineProps({
  year: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  linkText: {
    type: String,
    required: true,
  },
  linkTo: {
    type: String,
    required: true,
  },
  isComingSoon: String,
  required: true,
});
</script>

<template>
  <div
    class="grid grid-cols-2 lg:grid-cols-8 gap-4 lg:gap-8 border-t border-[#D7D4DB] py-4 lg:py-8 lg:text-xl xl:text-2xl"
  >
    <h3 class="col-start-1 text-[#9790A0]">
      {{ year }}
    </h3>
    <h3 class="col-span-5">
      {{ title }}
    </h3>
    <div class="flex lg:justify-end col-span-2">
      <NuxtLink
        v-if="isComingSoon === 'false'"
        :href="linkTo"
        class="hover:text-[#9790A0] text-[#332C3D]"
      >
        {{ linkText }}
      </NuxtLink>
      <h6 v-if="isComingSoon === 'true'" class="text-[#9790A0]">
        {{ linkText }}
      </h6>
    </div>
  </div>
</template>
