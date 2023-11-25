<script setup>
import heroImage from "/images/equinox-member-experience/hero.png";
import section2Image from "/images/equinox-member-experience/section2.png";
import section3Image from "/images/equinox-member-experience/section3.png";
import section4Image from "/images/equinox-member-experience/section4.png";

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
    platform="Web & Mobile App"
  />

  <ImageSection :imageUrl="heroImage" alt-text="hero preview" />

  <TextSection
    heading="Member Web Experience"
    text="Track progress, find events, and more in the member portal."
  />

  <ImageSection :imageUrl="section2Image" alt-text="member portal" />

  <TextSection
    heading="Mobile App"
    text="Members are able to set their bike preferences so their bike is ready for them when they arrive."
  />

  <ImageSection :imageUrl="section3Image" alt-text="bike preferences" />

  <TextSection heading="App Experience" text="Booking personalized training." />

  <ImageSection :imageUrl="section4Image" alt-text="personalized training" />
</template>
