<script setup></script>

<template>
  <div class="flex flex-col gap-4 my-8">
    <h4 class="lg:text-lg">Featured work</h4>
    <div class="flex flex-col">
      <Project
        year="2021"
        title="Parsley Health Member Vision"
        linkText="View"
        linkTo="/parsley-health/member-vision"
        isComingSoon="false"
      />
      <Project
        year="2023"
        title="Morf Health MVP"
        linkText="View"
        linkTo="/morf-health"
        isComingSoon="false"
      />
      <Project
        year="2022"
        title="Health Insights"
        linkText="View"
        linkTo="/parsley-health/health-insights"
        isComingSoon="false"
      />
      <Project
        year="2022"
        title="At-Home Lab Kits"
        linkText="View"
        linkTo="/parsley-health/at-home-lab-kits"
        isComingSoon="false"
      />
      <Project
        year="2023"
        title="First Republic Business Banking"
        linkText="Coming soon"
        linkTo="/first-republic"
        isComingSoon="true"
      />
    </div>
  </div>
</template>
