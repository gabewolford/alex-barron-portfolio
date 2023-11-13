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
    As a designer, I like to start with a problem I believe is too complex for
    myself to solve. I work closely with my product and engineering partners to
    drive a path through the ambiguity and define valuable solutions. I care
    deeply about creating work that elevates a user experience through
    thoughtful interaction and visual design.
  </p>
</template>
