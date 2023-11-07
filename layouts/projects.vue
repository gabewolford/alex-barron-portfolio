<script setup></script>

<template>
  <AppHeader />
  <main class="flex flex-col mx-8 mb-[258px] lg:mb-[90px]">
    <div class="flex flex-col">
      <slot />
    </div>
  </main>
  <AppFooter />
</template>
