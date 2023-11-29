<script setup>
import "animate.css";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="animate__animated animate__fadeIn animate__slow">
    <template
      v-if="
        route.path === '/equinox/cycling' ||
        route.path === '/equinox/member-experience'
      "
    >
      <ProjectNavDarkMode />
    </template>
    <template v-else>
      <ProjectNavLightMode />
    </template>
    <main class="flex flex-col mx-8 lg:mx-16 mb-[258px] lg:mb-[180px]">
      <div class="flex flex-col">
        <slot />
      </div>
    </main>
    <ProjectFooter />
  </div>
</template>
