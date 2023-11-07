<script setup>
import morfSection1Image from "@/public/images/morf/morf-section-1.svg";
import morfDesignSystem from "@/public/images/morf/morf-design-system.svg";

definePageMeta({
  layout: "projects",
});

onBeforeMount(() => {
  document.body.style.backgroundColor = "#EEEEF5";
});

onBeforeUnmount(() => {
  document.body.style.backgroundColor = "#FFFFFF";
});

const problems = [
  "Make customers feel confident and supported when using Morf.",
  "Enable customers to setup, test, and launch their own integrations.",
  "Promote non-bandaid solutions to customers when building integrations in order to avoid errors and downstream dependencies.",
  "Enable internal users to troubleshoot and debug customer integrations.",
  "Provide a canonical view of a patient profile centralizing data across all of their third-party tools.",
];
</script>

<template>
  <ProjectHeading
    heading="Morf Health MVP"
    client="Morf Health"
    role="Lead Product Designer"
    platform="Web App"
  />
  <ImageSection
    :imageUrl="morfSection1Image"
    altText="Morf data pipeline illustration"
  />
  <IntroSection
    introText="Morf Health enables modern healthcare companies to automate their operations, no coding required. The goal for the MVP was to go from zero to one with their self-service experience. Getting customers started with connecting their own source data tools and providing a unifying view of their patient and lead data across all of their tools."
    :problemsText="problems"
  />
  <TextSection
    heading="Design System"
    text="Morf's design approach utilizes minimalism and white space where possible. The product's data dense pages and complex work flows rely on its type system to deliver warmth and character."
  />
  <ImageSection :imageUrl="morfDesignSystem" altText="Morf design system" />
</template>
