<script setup></script>

<template>
  <ProjectNav />
  <main class="flex flex-col mx-8 lg:mx-16 mb-[258px] lg:mb-[180px]">
    <div class="flex flex-col">
      <slot />
    </div>
  </main>
  <ProjectFooter />
</template>
