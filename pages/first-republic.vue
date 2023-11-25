<script setup>
import frbHero from "/images/first-republic/hero.png";
import highFidelityDesign from "/images/first-republic/high-fidelity-design.png";
import userTesting from "/images/first-republic/user-testing.png";
import home1 from "/images/first-republic/home1.png";
import home2 from "/images/first-republic/home2.png";
import balance1 from "/images/first-republic/balance1.png";
import balance2 from "/images/first-republic/balance2.png";
import navPatterns from "/images/first-republic/nav-patterns.png";
import dashboardPatterns from "/images/first-republic/dashboard-patterns.png";
import paymentsPatterns from "/images/first-republic/payments-patterns.png";

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

const timelineArray = [
  "Workflows, high level thinking",
  "Workflows, core UX, some visual design",
  "High fidelity design",
];
</script>

<template>
  <PasswordModal v-if="showModal" />

  <ProjectHeading
    heading="First Republic Business Banking"
    client="First Republic"
    role="Senior Product Designer"
    platform="Web App"
  />

  <ImageSection :imageUrl="frbHero" altText="Dashboard" />

  <TextSection
    heading="Intro"
    text="The scope and scale of the project were massive, with a timeline of three years for an MVP across multiple segments and an aim to completely rebuild the entire logged-in corporate banking experience from a design and tech perspective. As a Senior Product Designer on the team, I was responsible for shaping the foundational UX by defining the information architecture and navigation patterns."
  />

  <TimelineSection
    heading="Timeline"
    :bullets="timelineArray"
    :imageUrl1="navPatterns"
    caption1="IA/ Nav/ Design patterns"
    :imageUrl2="dashboardPatterns"
    caption2="Dashboard & Design System"
    :imageUrl3="paymentsPatterns"
    caption3="Payments"
  />

  <GoalsSection
    heading="Design Goals"
    subheading1="Personal"
    text1="Prioritize information most relevant to our clients based on their
            role and industry, reflect First Republic's service culture in the
            digital experience."
    subheading2="Scalable"
    text2="Develop an MVP that would work for small business to large
            corporations"
    subheading3="Consistent"
    text3="Implement a design library to unify client experience of 3rd party integrations and improve engineering efficiency."
  />

  <TextSection
    heading="Concepts"
    text="IThe design team created two distinct prototypes to around the navigation and design patterns. I was responsible for Concept A which embraced side navigation, cards, and drawer design patterns."
  />

  <ImageGrid
    :imageUrl1="home1"
    caption1="Concept A/ home page"
    :imageUrl2="balance1"
    caption2="Concept A/ balances"
    :imageUrl3="home2"
    caption3="Concept B/ home page"
    :imageUrl4="balance2"
    caption4="Concept B/ balances"
  />

  <TextSection
    heading="User Testing"
    text="I created a prototype to test our top-level IA and navigation principles with clients. We focused on task completion and moderated interviews to see if our framework resonated with users."
  />

  <ImageSection :imageUrl="userTesting" altText="User testing preview" />

  <TextSection
    heading="High-Fidelity Design"
    text="Combining our user test findings, we focused on taking our designs to high fidelity by stress testing them against a critical core flow and updating our home page to include a global to-do widget. In addition, we leveraged and refined the desktop design system."
  />

  <ImageSection :imageUrl="highFidelityDesign" altText="Dashboard preview" />
</template>
