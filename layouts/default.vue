<script setup></script>

<template>
  <AppHeader />
  <main
    class="grid grid-cols-2 lg:grid-cols-12 gap-8 mx-8 mb-[258px] lg:mb-[90px]"
  >
    <div class="col-span-full lg:col-start-3 lg:col-span-8">
      <slot />
    </div>
  </main>
  <AppFooter />
</template>
