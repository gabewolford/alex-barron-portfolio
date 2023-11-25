<script setup>
import atHomeLabsHero from "/images/parsley-lab-kits/at-home-labs-hero.png";
import atHomeLabsTestimonial from "/images/parsley-lab-kits/at-home-labs-testimonial.png";
import atHomeLabsUserFlow from "/images/parsley-lab-kits/at-home-labs-user-flow.png";
import atHomeLabsThreeCards from "/images/parsley-lab-kits/at-home-labs-three-cards.png";
import atHomeLabsWellnessKit from "/images/parsley-lab-kits/at-home-labs-wellness-kit.png";
import atHomeLabsOrderReceived from "/images/parsley-lab-kits/at-home-labs-order-received.png";
import atHomeLabsActivationPrototype from "/images/parsley-lab-kits/at-home-labs-activation-prototype.png";
import atHomeLabsResults from "/images/parsley-lab-kits/at-home-labs-results.png";

const showModal = ref(true);

definePageMeta({
  layout: "projects",
});

const problemsText = [
  "How might convey the value user's would gain from testing with Parsley Health?",
  "How might we help users prepare and feel safe for the at-home lab draw?",
  "How might we prevent and reduce the costs created by user errors when completing lab draws?",
  "How might we continue to engage users and/or upgrade to membership after they receive their results?",
];
</script>

<template>
  <PasswordModal v-if="showModal" />

  <ProjectHeading
    heading="At-Home Lab Kits"
    client="Parsley Health"
    role="Lead Product Designer"
    platform="Web App"
  />

  <ImageSection :imageUrl="atHomeLabsHero" altText="At home labs overview" />

  <IntroSection
    introText="At Parsley Health, the cost of a membership is a major factor preventing people in need of comprehensive care. In the spring of 2021 we set out to launch Parsley Health's first at-home lab kit — a low cost solution designed to help you better understand your health baseline through our lead care team's holistic healthcare expertise."
    :problemsText="problemsText"
  />

  <ImageSection
    :imageUrl="atHomeLabsTestimonial"
    altText="At home labs testimonial"
  />

  <TextSection
    heading="Process"
    text="Our clinical advisors and lab partner where incredibly valuable and insightful collaborative partners through our design process."
  />

  <ImageSection
    :imageUrl="atHomeLabsUserFlow"
    altText="At home labs user flow"
  />

  <TextSection
    heading="Consideration & Purchase"
    text="We stood up a painted door test at first to discover if their was an appetite for a proprietary at-home lab kit. Soon after, we partnered with our marketing team to create an informative storefront."
  />

  <ImageSection
    :imageUrl="atHomeLabsThreeCards"
    altText="At home labs three cards"
  />

  <ImageSection
    :imageUrl="atHomeLabsWellnessKit"
    altText="At home labs wellness kit"
  />

  <CustomTextSection
    heading="Post-Purchase & Shipping"
    text="Reducing error risk by preparing users before they receive their test kits in the mail."
    subText="After running a closed Alpha test we identified the lull between post-purchase and kit activation as a key time for educating users so that they might know what to expect and be able to plan for it."
  />

  <ImageSection
    :imageUrl="atHomeLabsOrderReceived"
    altText="At home labs order received"
  />

  <TextSection
    heading="Activation"
    text="We developed a supportive wizard flow to ensure users collect their samples correctly and provide guidance and/or troubleshooting tips at any point in their journey."
  />

  <ImageSection
    :imageUrl="atHomeLabsActivationPrototype"
    altText="At home labs activation prototype"
  />

  <TextSection
    heading="Results"
    text="We iterated on the design for results tens of times. We utilized our clinical advisor team and lab advisors for feedback in addition to testing for user comprehension."
  />

  <ImageSection :imageUrl="atHomeLabsResults" altText="At home labs results" />
</template>
