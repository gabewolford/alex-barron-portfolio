<script setup></script>

<template>
  <div class="flex flex-col gap-4 my-8 lg:my-16">
    <h4 class="lg:text-lg">Projects</h4>
    <div class="flex flex-col">
      <Project
        year="2023"
        title="Morf Health"
        linkText="View"
        linkTo="/morf-health"
        isComingSoon="false"
      />
      <Project
        year="2023"
        title="First Republic Business Banking"
        linkText="Coming soon"
        linkTo="/first-republic"
        isComingSoon="true"
      />
      <Project
        year="2022"
        title="Parsley Health Insights"
        linkText="Coming soon"
        linkTo="https://www.figma.com/proto/mu4MnZiUuasdEJDIIu3LGw/Portfolio?page-id=165%3A4101&type=design&node-id=178-11&viewport=686%2C555%2C0.1&t=uSuB9iCPpbKcZOVn-1&scaling=min-zoom&mode=design"
        isComingSoon="true"
      />
      <Project
        year="2022"
        title="Parsley Health At-Home Lab Kits"
        linkText="View"
        linkTo="/parsley-health/at-home-lab-kits"
        isComingSoon="false"
      />
      <Project
        year="2021"
        title="Parsley Health Member Experience"
        linkText="Coming soon"
        linkTo="/parsley-health/member-experience"
        isComingSoon="true"
      />
    </div>
  </div>
</template>
