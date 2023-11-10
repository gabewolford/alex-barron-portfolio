<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div>
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
