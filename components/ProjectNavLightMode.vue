<script>
import "animate.css";

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
  <header class="flex flex-row mx-8 lg:mx-48 py-8 lg:py-16">
    <nav class="flex flex-row w-full justify-between items-center">
      <NuxtLink to="/">
        <img src="/images/logo.svg" alt="Logo" />
      </NuxtLink>

      <NuxtLink to="/work" class="hidden md:block underline-on-hover"
        >All Work</NuxtLink
      >

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
        class="md:hidden absolute top-9 right-8 z-50 text-white animate__animated"
        :class="{ animate__rotateIn: isMobileMenuOpen }"
      >
        <img src="/images/close-icon.svg" alt="Close" />
      </button>

      <!-- Mobile navigation links (full-screen overlay) -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden fixed inset-0 bg-[#332c3d] bg-opacity-95 z-40 text-white animate__animated"
        :class="{ animate__slideInDown: isMobileMenuOpen }"
      >
        <div
          class="flex flex-col h-full justify-center space-y-12 items-center"
        >
          <!-- Close button inside the mobile menu -->
          <NuxtLink @click.native="toggleMobileMenu" to="/">Home</NuxtLink>
          <NuxtLink @click.native="toggleMobileMenu" to="/work"
            >All Work</NuxtLink
          >
        </div>
      </div>
    </nav>
  </header>
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
