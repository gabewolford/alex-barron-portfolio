<script setup>
import heroImage from "/images/parsley-health-insights/health-insights-hero.png";
import healthInsightsUserFlow from "/images/parsley-health-insights/health-insights-user-flow.png";
import healthInsightsSignificantSymptoms from "/images/parsley-health-insights/health-insights-significant-symptoms.png";
import healthInsightsPersonalizedResults from "/images/parsley-health-insights/health-insights-personalized-results.png";
import healthInsightsSelfLedChallenges from "/images/parsley-health-insights/health-insights-self-led-challenges.png";
import healthInsightsCheckingIn from "/images/parsley-health-insights/health-insights-checking-in.png";
import healthInsightsDashboard from "/images/parsley-health-insights/health-insights-dashboard.png";
import intakeFormVideo from "/images/parsley-health-insights/videos/symptom-intake-form.mp4";
import mobileLandingPage from "/images/parsley-health-insights/videos/mobile-lp.mp4";
import desktopLandingPage from "/images/parsley-health-insights/videos/desktop-lp.mp4";

definePageMeta({
  layout: "projects",
});

const problemsText = [
  "Empower users to make decisions and take control of their health",
  "Emulate the personalization, trust, and support of a clinician’s visit",
  "Provide clear upgrade path for users in need of or looking for more support",
];

// const measureSuccessText = [
//   "24% Free trial to paid conversion rate Tracking conversion rate from free to paid Insights",
//   ".1% E2E conversion rate from sign up to paid Insight account",
//   "20% lift in conversion to paid memberships from PSI",
// ];
</script>

<template>
  <ProjectHeading
    heading="Health Insights"
    client="Parsley Health"
    role="Lead Product Designer"
    platform="Mobile Web"
  />

  <ImageSection :imageUrl="heroImage" altText="Health Insights hero" />

  <IntroSection
    introText="Parsley Health sought to introduce a care solution for prospects with financial constraints so we partnered with our clinical team to develop a safe, educational, and empowering self-led digital experience. "
    :problemsText="problemsText"
  />

  <TextSection
    heading="High-Level User Flow"
    text="The user flow from this broad view was a tool for defining our product roadmap and establishing alignment and collaboration across internal teams and vendors. More detailed user journeys were mapped out for each of the key areas below."
  />

  <ImageSection
    :imageUrl="healthInsightsUserFlow"
    altText="Health Insights user flow"
  />

  <TextSection
    heading="Landing Page"
    text="Introducing Insights service and setting expectations for users was an exercise in content strategy and web design. This page evolved many times with learnings our user analytics and A/B testing."
  />

  <DoubleVideoSection
    :videoUrl1="mobileLandingPage"
    :videoUrl2="desktopLandingPage"
  />

  <CustomMobileVideoSection
    :videoUrl="intakeFormVideo"
    heading="Symptom Intake Form"
    subHeading1="Streamlining the UX"
    subText1="By rethinking the user flow and adding conditional logic, we increased the questionnaire completion rate and reduced time to complete by more than 4 minutes."
    subHeading2="Clarifying UI decisions"
    subText2="I implemented a color gradient indicating severity and displayed clinician-defined terms for each score value to reduce the ambiguity and subjectivity of the symptom scoring system."
  />

  <ImageSection
    :imageUrl="healthInsightsSignificantSymptoms"
    altText="Health Insights significant symptoms"
  />

  <TextSection
    heading="Personalized Results"
    text="We built a modular system to deliver tailored results to each user based on their readiness and symptom reports."
  />

  <ImageSection
    :imageUrl="healthInsightsPersonalizedResults"
    altText="Health Insights personalized results"
  />

  <TextSection
    heading="Self-Led Challenges"
    text="In consultation with the lead doctors and health coaches we developed a series of research-backed and safe recommendations for improving wellness and building healthy habits."
  />

  <ImageSection
    :imageUrl="healthInsightsSelfLedChallenges"
    altText="Health Insights self-led challenges"
  />

  <CustomTextSection
    heading="Checking In"
    text="Due to constrained resources we could not implement a native solution like widgets or notifications to reduce the friction of a checkin. To better understand the user value and willingness to complete checkins we implemented a wizard of oz test. "
    subText="Using SMS and human-power we lead 20 users through their chosen two week healthy-habit challenge.  As expected many users dropped off, 45%. The users who completed their challenge indicated that the human-feel to the responses kept them engaged."
  />

  <ImageSection
    :imageUrl="healthInsightsCheckingIn"
    altText="Health Insights checking in"
  />

  <TextSection
    heading="Insights Dashboard"
    text="The dashboard design had to be flexible in order to eventually meet the needs of all member types across Parsley Health services."
  />

  <ImageSection
    :imageUrl="healthInsightsDashboard"
    altText="Health Insights dashboard"
  />
</template>
