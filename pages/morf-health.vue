<script setup>
import morfHero from "/images/morf/morf-hero.png";
import morfDesignSystem from "/images/morf/morf-design-system.png";
import morfSourceSetup from "/images/morf/morf-source-setup.png";
import morfReviewSourceData from "/images/morf/morf-review-source-data.png";
import morfProfiles from "/images/morf/morf-profiles.png";
import morfUnifyingPatientProfiles from "/images/morf/morf-unifying-patient-profiles.png";
import morfMonitoringActivity from "/images/morf/morf-monitoring-activity.png";

const showModal = ref(true);

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

// const measureSuccessText = ["TBD"];
</script>

<template>
  <PasswordModal v-if="showModal" />

  <ProjectHeading
    heading="Morf Health MVP"
    client="Morf Health"
    role="Lead Product Designer"
    platform="Web App"
  />

  <ImageSection
    :imageUrl="morfHero"
    altText="Morf data pipeline illustration"
  />

  <IntroSection
    introText="Morf Health enables modern healthcare companies to automate their operations, no coding required. My role on this project was to define the UX and Interface Design as we launched the self-service MVP. The scope included getting customers started with connecting their data sources and providing a unifying view of their patient and lead data across all of their tools."
    :problemsText="problems"
  />

  <TextSection
    heading="Design System"
    text="Morf's design approach utilizes minimalism and white space where possible. The product's data dense pages and complex work flows rely on its type system to deliver warmth and character."
  />

  <ImageSection :imageUrl="morfDesignSystem" altText="Morf design system" />

  <TextSection
    heading="Source Setup"
    text="The first step in launching your tech stack in Morf is setting up a source, non-technical customers are guided through the process, step by step."
  />
  <ImageSection :imageUrl="morfSourceSetup" altText="Morf source setup" />

  <TextSection
    heading="Reviewing Source Setup"
    text="Once a source has been setup, customers can review and make to changes to their incoming data being stored in Morf via mapping to properties and profile lookup configurations."
  />

  <ImageSection
    :imageUrl="morfReviewSourceData"
    altText="Morf review source data"
  />

  <TextSection
    heading="Profiles"
    text="Preview drawers allow customer's quick access to helpful tools like generating a link or copying an ID while parsing through profiles."
  />
  <ImageSection :imageUrl="morfProfiles" altText="Morf profiles" />

  <TextSection
    heading="Unifying Patient Profile"
    text="Customers can view their patient's data across all of their tools in one unifying profile."
  />
  <ImageSection
    :imageUrl="morfUnifyingPatientProfiles"
    altText="Morf unifying patient profile"
  />

  <TextSection
    heading="Monitoring Activity"
    text="The Activity page is an important tool for internal users while we continued to iterate. Here they can easily help customers troubleshoot and debug issues."
  />
  <ImageSection
    :imageUrl="morfMonitoringActivity"
    altText="Morf monitoring activity"
  />

  <TextSection
    heading="Next Steps"
    text="Enable customers to build and manage their own work flows."
  />
</template>
