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
  <p class="py-8 lg:py-16 lg:text-2xl">
    Previously, I was at Parsley Health where I lead design improvements for the
    member experience and managed a stellar design team.
    <br />
    <br />
    Currently, I am working with Morf Health, enabling digital healthcare
    companies to launch their tech stacks and manage patient data with little to
    no code.
  </p>
</template>
