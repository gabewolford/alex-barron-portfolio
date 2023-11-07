<script setup>
defineProps({
  introText: {
    type: String,
    required: true,
  },
  problemsText: {
    type: Array,
    required: true,
  },
  measureSuccessText: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="flex flex-col gap-8 py-8 lg:py-16 lg:mx-32">
    <div class="col-span-full lg:col-start-3 lg:col-span-8">
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:my-16">
        <div class="lg:w-2/3 flex flex-col gap-3">
          <h4 class="text-[#716E75]">Intro</h4>
          <p
            class="text-base lg:text-[32px] pt-8 border-[#D7D4DB] border-t lg:leading-[45px]"
          >
            {{ introText }}
          </p>
        </div>
        <div class="lg:w-1/3 flex flex-col gap-8">
          <div class="flex flex-col gap-3">
            <h4 class="text-[#716E75]">Problems to solve</h4>
            <ul class="text-sm pt-8 border-[#D7D4DB] border-t text-left">
              <li
                v-for="(problem, index) in problemsText"
                :key="index"
                class="mb-4"
              >
                {{ problem }}
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-3">
            <h4 class="text-[#716E75]">How we measured success</h4>
            <p class="text-sm pt-8 border-[#D7D4DB] border-t text-left">
              {{ measureSuccessText }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
