<script setup>
const showModal = ref(true);
const password = ref("");

const submitPassword = () => {
  // Check the entered password
  const correctPassword = "smallh0und";
  if (password.value === correctPassword) {
    showModal.value = false; // Close the modal
  } else {
    alert("Incorrect password. Try again.");
  }
};
</script>

<template>
  <div
    v-if="showModal"
    class="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur flex items-center justify-center overflow-hidden z-50"
  >
    <div class="rounded-lg bg-white p-5 m-10">
      <div class="flex flex-col gap-4 justify-center">
        <NuxtLink to="/" class="text-xs hover:text-[#9790A0]"
          >← Go back</NuxtLink
        >
        <h3 class="text-lg">
          Please enter the password or
          <span
            ><NuxtLink
              to="mailto:acbarron4@gmail.com"
              target="_blank"
              class="text-[#9790A0] hover:text-[#574a68]"
              >contact me</NuxtLink
            ></span
          >
          to view this project.
        </h3>
        <div class="flex flex-col lg:flex-row gap-4">
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="rounded-lg px-2 py-2 border-2 flex-1"
          />
          <button
            @click="submitPassword"
            class="bg-[#332C3D] hover:bg-[#574a68] text-white px-8 py-2 rounded-lg min-w-fit font-apercu-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
