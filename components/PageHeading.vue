<script setup>
defineProps({
  heading: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1 class="text-4xl lg:text-[56px] font-apercu-bold lg:leading-[72px]">
    {{ heading }}
  </h1>
  <p class="my-8 lg:my-16">
    Previously, I was managing the design team at Parsley Health.
    <br />
    <br />
    Currently, I am designing a platform that enables digital health companies
    to view, interpret, and manage their data with Morf Health.
    <br />
    <br />
    I'm also open to future full-time or contract opportunities.
  </p>
</template>
