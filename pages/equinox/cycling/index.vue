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
    heading="Equinox Cycling"
    client="Equinox"
    role="Junior Visual Designer"
    platform="Experiential, Tablet & Mobile Companion Apps"
  />

  <ImageSection :imageUrl="equinoxHeroImage" altText="Equinox Cycling hero" />

  <TextSection
    heading="Intro"
    text="As a Junior Visual designer at R/GA I got the opportunity to contribute to the Pursuit — an experiential indoor cycling class. In my role, I was one of four responsible for the visual design of screens touching the in-class screen, rider app, and instructor app."
  />

  <ImageSection :imageUrl="equinoxFireUp" altText="Equinox fire up" />

  <TextSection heading="In-Class" text="An immersive classroom experience." />

  <ImageSection :imageUrl="equinoxLeaderboard" altText="Equinox leaderboard" />

  <ImageSection
    :imageUrl="equinoxLeaderboard2"
    altText="Equinox cycling class"
  />

  <TextSection
    heading="Mobile Guide"
    text="In-Class Mode is the riders companion in their on-bike experience allowing them to track their performance live."
  />

  <ImageSection
    :imageUrl="equinoxInClassMode"
    altText="Equinox In Class Mode"
  />

  <ImageSection
    :imageUrl="equinoxInClassMode2"
    altText="In Class mode product shots"
  />

  <ImageSection
    :imageUrl="equinoxInClassMode3"
    altText="In Class mode product shots"
  />

  <TextSection
    heading="Instructors App"
    text="The instructor app enables them to engage with the class more by tracking rider performance."
  />

  <ImageSection
    :imageUrl="equinoxInstructorsApp"
    altText="Equinox instructors app"
  />

  <ImageSection
    :imageUrl="equinoxInstructorsApp2"
    altText="Equinox instructors app tablet"
  />
</template>
