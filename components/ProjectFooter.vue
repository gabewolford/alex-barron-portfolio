<script setup>
import resume from "/images/resume.pdf";
</script>

<template>
  <footer class="absolute bottom-0 flex flex-row mx-8 lg:mx-48 py-8 lg:py-16">
    <nav
      class="col-span-2 lg:col-start-3 lg:col-span-8 flex flex-col lg:flex-row gap-8 justify-between"
    >
      <div class="flex flex-col lg:flex-row gap-8">
        <NuxtLink
          to="mailto:acbarron4@gmail.com"
          target="_blank"
          class="hover:text-[#9790A0]"
          >Email</NuxtLink
        >
        <NuxtLink
          to="https://www.linkedin.com/in/alexandrabarron/"
          target="_blank"
          class="hover:text-[#9790A0]"
          >LinkedIn</NuxtLink
        >
        <NuxtLink :to="resume" target="_blank" class="hover:text-[#9790A0]"
          >Resume</NuxtLink
        >
        <NuxtLink
          to="https://smallhound.co"
          target="_blank"
          class="hover:text-[#9790A0]"
          >My Design Studio</NuxtLink
        >
      </div>
    </nav>
  </footer>
</template>
