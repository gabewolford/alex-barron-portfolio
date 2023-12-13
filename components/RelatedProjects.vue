<script setup>
defineProps({
  imageLeft: {
    type: String,
    required: true,
  },
  textLeft: {
    type: String,
    required: true,
  },
  linkToLeft: {
    type: String,
    required: true,
  },
  imageRight: {
    type: String,
    required: true,
  },
  textRight: {
    type: String,
    required: true,
  },
  linkToRight: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section
    data-aos="fade-up"
    data-aos-duration="800"
    class="flex flex-col gap-8 py-8 lg:py-16 lg:mx-32"
  >
    <div class="col-span-full lg:col-start-3 lg:col-span-8">
      <div class="flex flex-col gap-6 lg:gap-12">
        <h4 class="text-[#716E75] lg:text-2xl lg:leading-[160%]">
          Related Projects
        </h4>
        <div class="flex flex-row gap-4 lg:gap-16 justify-between">
          <NuxtLink :to="linkToLeft" class="flex flex-col gap-2 lg:gap-4">
            <img :src="imageLeft" :alt="textRight" class="w-fit h-auto" />
            <p class="underline-on-hover lg:text-2xl w-fit">{{ textLeft }}</p>
          </NuxtLink>
          <NuxtLink :to="linkToRight" class="flex flex-col gap-2 lg:gap-4">
            <img :src="imageRight" :alt="textRight" class="w-fit h-auto" />
            <p class="underline-on-hover lg:text-2xl w-fit">{{ textRight }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
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
