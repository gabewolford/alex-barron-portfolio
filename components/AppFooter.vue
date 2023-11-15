<script setup>
import resume from "/images/resume.pdf";
</script>

<template>
  <footer
    class="absolute bottom-0 grid grid-cols-2 lg:grid-cols-12 gap-8 px-8 w-full py-8"
  >
    <nav
      class="col-span-2 lg:col-start-3 lg:col-span-8 flex flex-col lg:flex-row gap-8 justify-between"
    >
      <div class="flex flex-col lg:flex-row gap-8">
        <NuxtLink
          to="mailto:acbarron4@gmail.com"
          target="_blank"
          class="underline-on-hover"
          >Email</NuxtLink
        >
        <NuxtLink
          to="https://www.linkedin.com/in/alexandrabarron/"
          target="_blank"
          class="underline-on-hover"
          >LinkedIn</NuxtLink
        >
        <NuxtLink :to="resume" target="_blank" class="underline-on-hover"
          >Resume</NuxtLink
        >
        <NuxtLink
          to="https://smallhound.co"
          target="_blank"
          class="underline-on-hover"
          >My Design Studio</NuxtLink
        >
      </div>
    </nav>
  </footer>
</template>

<style scoped>
.underline-on-hover {
  position: relative;
  overflow: hidden;
}

.underline-on-hover::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #332c3d;
  transition: width 0.3s ease;
}

.underline-on-hover:hover::after {
  width: 100%;
}

.active-link::before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #332c3d;
}
</style>
