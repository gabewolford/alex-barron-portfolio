<script setup>
import atHomeLabsSection1 from "/images/parsley-lab-kits/at-home-labs-section-1.svg";
import atHomeLabsTestimonial from "/images/parsley-lab-kits/at-home-labs-testimonial.svg";
import atHomeLabsUserFlow from "/images/parsley-lab-kits/at-home-labs-user-flow.svg";
import atHomeLabsThreeCards from "/images/parsley-lab-kits/at-home-labs-three-cards.svg";
import atHomeLabsWellnessKit from "/images/parsley-lab-kits/at-home-labs-wellness-kit.svg";
import atHomeLabsOrderReceived from "/images/parsley-lab-kits/at-home-labs-order-received.svg";
import atHomeLabsActivationPrototype from "/images/parsley-lab-kits/at-home-labs-activation-prototype.svg";
import atHomeLabsResults from "/images/parsley-lab-kits/at-home-labs-results.svg";

definePageMeta({
  layout: "projects",
});

const problemsText = ["TBD"];
</script>

<template>
  <ProjectHeading
    heading="At-Home Lab Kits"
    client="Parsley Health"
    role="Lead Product Designer"
    platform="Web App"
  />

  <ImageSection
    :imageUrl="atHomeLabsSection1"
    altText="At home labs overview"
  />

  <IntroSection
    introText="TBD"
    :problemsText="problemsText"
    measureSuccessText="TBD"
  />

  <ImageSection
    :imageUrl="atHomeLabsTestimonial"
    altText="At home labs testimonial"
  />

  <TextSection
    heading="Problem"
    text="How might we provide a prospective member with knowledge about their own health at a low-cost?"
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
