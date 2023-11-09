<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  watch: {
    isMobileMenuOpen(newValue) {
      this.toggleBodyScroll(newValue);
    },
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    toggleBodyScroll(isOpen) {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
};
</script>

<template>
  <header class="grid grid-cols-2 lg:grid-cols-12 mx-8 py-8 lg:py-16 gap-8">
    <nav
      class="col-span-full lg:col-start-3 lg:col-span-8 flex flex-row justify-between items-center"
    >
      <NuxtLink to="/">
        <img src="/images/logo.svg" alt="Logo" />
      </NuxtLink>

      <!-- Mobile menu button (hidden when menu is open) -->
      <div v-if="!isMobileMenuOpen" class="md:hidden">
        <button @click="toggleMobileMenu">
          <img src="/images/menu-icon.svg" alt="Menu" />
        </button>
      </div>

      <!-- Close button (hidden when menu is closed) -->
      <button
        v-if="isMobileMenuOpen"
        @click="toggleMobileMenu"
        class="md:hidden absolute top-9 right-8 z-50 text-white"
      >
        <img src="/images/close-icon.svg" alt="Close" />
      </button>

      <!-- Mobile navigation links (full-screen overlay) -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden fixed inset-0 bg-[#332c3d] bg-opacity-95 z-40 text-white"
      >
        <div
          class="flex flex-col h-full justify-center space-y-12 items-center"
        >
          <!-- Close button inside the mobile menu -->
          <NuxtLink @click.native="toggleMobileMenu" to="/">Home</NuxtLink>
          <NuxtLink @click.native="toggleMobileMenu" to="/morf-health"
            >Morf Health</NuxtLink
          >
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/parsley-health/health-insights"
            >Health Insights</NuxtLink
          >
          <NuxtLink
            @click.native="toggleMobileMenu"
            to="/parsley-health/at-home-lab-kits"
            >At-Home Lab Kits</NuxtLink
          >
        </div>
      </div>
    </nav>
  </header>
</template>
