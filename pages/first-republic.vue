<script setup>
import morfHero from "/images/morf/morf-hero.png";
import morfDesignSystem from "/images/morf/morf-design-system.png";
import morfSourceSetup from "/images/morf/morf-source-setup.png";
import morfReviewSourceData from "/images/morf/morf-review-source-data.png";
import morfProfiles from "/images/morf/morf-profiles.png";
import morfUnifyingPatientProfiles from "/images/morf/morf-unifying-patient-profiles.png";
import morfMonitoringActivity from "/images/morf/morf-monitoring-activity.png";
import morfGuide from "/images/morf/morf-guide.png";

const showModal = ref(true);

definePageMeta({
  layout: "projects",
});

onBeforeMount(() => {
  document.body.style.backgroundColor = "#E0E8E6";
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

// const measureSuccessText = ["TBD"];
</script>

<template>
  <ProjectHeading
    heading="First Republic Business Banking"
    client="First Republic"
    role="Senior Product Designer"
    platform="Web App"
  />
</template>
