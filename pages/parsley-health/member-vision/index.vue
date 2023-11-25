<script setup>
import heroImage from "/images/parsley-health-member-vision/hero.png";
import memberSegmentation from "/images/parsley-health-member-vision/member-segmentation.png";
import research from "/images/parsley-health-member-vision/research.png";
import feelingSupported from "/images/parsley-health-member-vision/feeling-supported.png";
import proofPoints from "/images/parsley-health-member-vision/proof-points.png";
import engagement from "/images/parsley-health-member-vision/engagement.png";
import insightsPreview from "/images/parsley-health-member-vision/insights-preview.png";
import labsPreview from "/images/parsley-health-member-vision/labs-preview.png";
import craftingAStory from "/images/parsley-health-member-vision/crafting-a-story.png";
import considerationAndTrust from "/images/parsley-health-member-vision/consideration-and-trust.png";

const showModal = ref(true);

definePageMeta({
  layout: "projects",
});

const problemsToSolve = [
  "Members had no way of engaging with Parsley outside of visits and messaging their providers.",
  "Our providers were over burdened by too many messages.",
  "Prospective members had no way of experiencing our care without the high cost.",
];
</script>

<template>
  <PasswordModal v-if="showModal" />

  <ProjectHeading
    heading="Parsley Health Member Vision"
    client="Parsley Health"
    role="Lead Product Designer"
    platform="Mobile App"
  />

  <ImageSection :imageUrl="heroImage" altText="Member vision hero" />

  <TextSection
    heading="Intro"
    text="Soon after launching virtually nationwide Parsley Health needed to scale their product offering to reach more members, streamline their operations, and increase longterm value. They required a North Star, or vision for a digital member experience that would help facilitate this change. I was tapped by Product leadership to drive the design initiative."
  />

  <ImageSection :imageUrl="memberSegmentation" altText="Member segmentation" />

  <TextSection
    heading="Understanding our customers..."
    text="In order to define our product strategy we needed to identify our problems to solve, understand the chronic communities perception of Parsley, and know what we were not delivering in our current member experience. I was fortunate to work with my Design Director and a UX Researcher who spearheaded a research plan to gather insights across the entire user journey."
  />

  <ImageCarousel />

  <TextSection2
    heading="Framing the problem effectively..."
    text="I crafted a visual to communicate the significance of the problems in the current member experience and the potential value that our strategy and solutions would add. It was used to succinctly illustrate the product vision in fundraising and board meetings."
    heading2="The problems to solve"
    :problemsArrary="problemsToSolve"
  />

  <ImageSection :imageUrl="research" altText="Member research" />

  <TextSection
    heading="Stakeholder management"
    text="I employed our research to kickoff and facilitate a stakeholder workshop. Participants were able to share their needs and expertise before working together with designers to ideate solutions. We prioritized the problems, solutions, and opportunities by vote. The output of this session helped me craft a user story that resonated with our stakeholders across the company."
  />

  <ImageSection
    :imageUrl="feelingSupported"
    altText="Inspirtaion, storyboarding, user flow"
  />

  <TextSection
    heading="Crafting a story..."
    text="My process began with drafting a user story using storyboarding. After collaborating with our Product VP and my Director to finalize the story, I spent a week crafting the UX and visuals. At this time, our marketing team was kicking off a project with Instrument to evolve the Parsley brand identity and voice so I explored a new design direction through this work in order to inspire the creative brief."
  />

  <ImageSection :imageUrl="craftingAStory" altText="Crafting a story" />

  <TextSection
    heading="Consideration and trust"
    text="Distrust within the chronic community is high, with many failed attempts to improve symptoms, our customers were looking for credibility. We created a strategy to overcome our customer's credibility concerns by establishing low-commitment touch points with clinicians and coaches. This was the premise for a self-led care product called Insights which increased paid conversion to Complete Care memberships by 25% after launching in 2021. "
  />

  <ImageSection
    :imageUrl="considerationAndTrust"
    altText="Consideration and trust"
  />

  <TextSection
    heading="Insights and Proof Points"
    text="Parsley's care model requires in-depth lab testing to establish a baseline before providing a personalized health plan. This resonates with the chronic community who is looking for answers about their health, however there is no way for users to access it without a year-long membership commitment. We imagined At-Home Lab Testing as a way for skeptical/ sensitive users to experience Parsley's model. I collaborated with two of our clinical leads to envision an optimal labs experience that would work for At-Home Labs and Complete Care members. In the following Spring we began testing and executing towards this vision. "
  />

  <ImageSection :imageUrl="proofPoints" altText="Proof points" />

  <TextSection
    heading="Relief and Engagement"
    text="Parsley's care model requires in-depth lab testing to establish a baseline before providing a personalized health plan. This resonates with the chronic community who is looking for answers about their health, however there is no way for users to access it without a year-long membership commitment. We imagined At-Home Lab Testing as a way for skeptical/ sensitive users to experience Parsley's model. I collaborated with two of our clinical leads to envision an optimal labs experience that would work for At-Home Labs and Complete Care members. In the following Spring we began testing and executing towards this vision. "
  />

  <ImageSection :imageUrl="engagement" altText="Relief and engagement" />

  <TextSection
    heading="Results"
    text="I delivered the North Star at our company all hands before kicking off planning for the next quarter. Over the next few weeks I worked with our Product and Engineering team leads to build a five-year product road map. Over the next two years we were able to deliver Insights Self-Led Plans, At-Home Lab Kits beta, and began executing Interactive Health Plans."
  />

  <RelatedProjects
    :imageLeft="insightsPreview"
    textLeft="Health Insights"
    linkToLeft="/parsley-health/health-insights"
    :imageRight="labsPreview"
    textRight="At-Home Labs"
    linkToRight="/parsley-health/at-home-lab-kits"
  />
  <template></template>
</template>
