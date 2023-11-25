<script setup>
import heroImage from "/images/motto/hero.png";
import section2Image from "/images/motto/section2.png";
import section3Image from "/images/motto/section3.png";
import section4Image from "/images/motto/section4.png";
import section5Image from "/images/motto/section5.png";
import section6Image from "/images/motto/section6.png";

definePageMeta({
  layout: "projects",
});
</script>

<template>
  <ProjectHeading
    heading="Motto Keyboard"
    client="Motto"
    role="Lead Designer"
    platform="Mobile App"
  />

  <ImageSection :imageUrl="heroImage" altText="Hero" />

  <TextSection
    heading="Intro"
    text="Motto is a social keyboard app and sticker marketplace that I lead the UX, interface design, and brand design for back in 2015."
  />

  <ImageSection :imageUrl="section2Image" altText="design system" />

  <ImageSection :imageUrl="section3Image" altText="design system" />

  <ImageSection :imageUrl="section4Image" altText="design system" />

  <ImageSection :imageUrl="section5Image" altText="keyboard" />

  <TextSection
    heading="Wrap Up"
    text="Designing a keyboard experience packed with fun extras like a sticker marketplace, draw, and emoticons was a blast. It wasn't too long after we launched that we became obsolete with Google's G Board entering the market and Apple following soon after with new feature updates."
  />

  <ImageSection :imageUrl="section6Image" altText="all screens" />
</template>
