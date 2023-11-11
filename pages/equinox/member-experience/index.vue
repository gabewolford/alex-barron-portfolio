<script setup>
import equinoxHeroImage from "/images/equinox-cycling/equinox-hero.png";
import equinoxFireUp from "/images/equinox-cycling/equinox-fire-up.png";
import equinoxLeaderboard from "/images/equinox-cycling/equinox-leaderboard.png";
import equinoxLeaderboard2 from "/images/equinox-cycling/equinox-leaderboard-2.png";
import equinoxInClassMode from "/images/equinox-cycling/equinox-in-class-mode.png";
import equinoxInClassMode2 from "/images/equinox-cycling/equinox-in-class-mode-2.png";
import equinoxInClassMode3 from "/images/equinox-cycling/equinox-in-class-mode-3.png";
import equinoxInstructorsApp from "/images/equinox-cycling/equinox-instructors-app.png";
import equinoxInstructorsApp2 from "/images/equinox-cycling/equinox-instructors-app-2.png";

definePageMeta({
  layout: "projects",
});

onBeforeMount(() => {
  document.body.style.backgroundColor = "#141414";
  document.body.style.color = "#FFFFFF";
});

onBeforeUnmount(() => {
  document.body.style.backgroundColor = "#FFFFFF";
  document.body.style.color = "#332C3D";
});
</script>

<template>
  <ProjectHeading
    heading="Equinox Member Experience"
    client="Equinox"
    role="Junior Visual Designer"
    platform="Experiential, Tablet & Mobile Companion Apps"
  />
</template>
