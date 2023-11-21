<script setup>
import { ref, watch, computed } from "vue";

const slides = [
  "/images/parsley-health-member-vision/Slide1.png",
  "/images/parsley-health-member-vision/Slide2.png",
  "/images/parsley-health-member-vision/Slide3.png",
  "/images/parsley-health-member-vision/Slide4.png",
  "/images/parsley-health-member-vision/Slide5.png",
];

const currentSlideIndex = ref(0);

const nextSlide = () => {
  if (currentSlideIndex.value === slides.length - 1) {
    // Reset to slide 1 on the last slide
    currentSlideIndex.value = 0;
  } else {
    currentSlideIndex.value += 1;
  }
};

const slideText = [
  "Current Complete Care",
  "This is Complete Care without providers",
  "Adding a digital engagement layer at a lower threshold",
  "Introduce at-home labs and coaching plans",
  "A more engaging Complete Care",
];

const currentSlideText = ref(slideText[currentSlideIndex.value]);

watch(() => {
  currentSlideText.value = slideText[currentSlideIndex.value];
});

const buttonText = computed(() => {
  return currentSlideIndex.value === slides.length - 1 ? "Reset" : "Next Slide";
});
</script>

<template>
  <section class="w-full h-fit my-8 lg:my-16">
    <div class="flex flex-row gap-1">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="w-2 h-2 rounded-full"
        :class="{
          'bg-[#333]': index === currentSlideIndex,
          'bg-[#D9D9D9]': index !== currentSlideIndex,
        }"
      ></div>
    </div>

    <p class="pt-4">{{ currentSlideText }}</p>

    <button
      @click="nextSlide"
      class="flex flex-row gap-1 items-center pt-5 text-xs"
    >
      {{ buttonText }}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M5.75 1.25L9.5 5M9.5 5L5.75 8.75M9.5 5H0.5"
            stroke="#333333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </button>

    <img
      :src="slides[nextSlideIndex]"
      class="preloading-image"
      aria-hidden="true"
    />

    <transition name="slide-transition" mode="out-in">
      <img
        :key="currentSlideIndex"
        :src="slides[currentSlideIndex]"
        :alt="'slide ' + (currentSlideIndex + 1)"
        class="mx-auto"
      />
    </transition>
  </section>
</template>

<style scoped>
.slide-transition-enter-active,
.slide-transition-leave-active {
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
}

.slide-transition-enter,
.slide-transition-leave-to {
  transform: translateX(-100%);
}

.preloading-image {
  position: absolute;
  top: 0;
  left: 100%; /* Change from 0 to 100% for right-side preloading */
  opacity: 0;
  pointer-events: none;
}
</style>
