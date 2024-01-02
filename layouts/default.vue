<script setup>
import "animate.css";

useSeoMeta({
  title: "Alex Barron",
  ogUrl: "https://alexbarron.site",
  ogTitle: "Alex Barron",
  description:
    "Hello, I'm Alex. I design products for people & solve problems. As a designer, I like to start with a problem I believe is too complex for myself to solve. I work closely with my product and engineering partners to drive a path through the ambiguity and define valuable solutions. I care deeply about creating work that elevates a user experience through thoughtful interaction and visual design.",
  ogDescription:
    "Hello, I'm Alex. I design products for people & solve problems. As a designer, I like to start with a problem I believe is too complex for myself to solve. I work closely with my product and engineering partners to drive a path through the ambiguity and define valuable solutions. I care deeply about creating work that elevates a user experience through thoughtful interaction and visual design.",
  ogImage: "https://alexbarron.site/images/og-image.png",
  twitterCard: "summary_large_image",
  twitterImage: "https://alexbarron.site/images/og-image.png",
  twitterTitle: "Alex Barron",
  twitterDescription:
    "Hello, I'm Alex. I design products for people & solve problems. As a designer, I like to start with a problem I believe is too complex for myself to solve. I work closely with my product and engineering partners to drive a path through the ambiguity and define valuable solutions. I care deeply about creating work that elevates a user experience through thoughtful interaction and visual design.",
});
</script>

<template>
  <div class="animate__animated animate__fadeIn animate__slow">
    <AppHeader />
    <main
      class="grid grid-cols-2 lg:grid-cols-12 gap-8 mx-8 mb-[258px] lg:mb-[90px]"
    >
      <div class="col-span-full lg:col-start-3 lg:col-span-8">
        <slot />
      </div>
    </main>
    <AppFooter />
  </div>
</template>
