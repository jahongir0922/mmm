<template>
  <div id="root">
    <NuxtLayout> </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: "Asosiy sahifa",
  titleTemplate: (title) => `MMM! - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content: "IT Park amaliy topshiriq",
    },
    {
      name: "author",
      content: "Qodirov Jahongir",
    },
    {
      name: "keyframes",
      content: "IT Park, Tastebite, Shakarcha, pishiriqlar, ovqat, yemish",
    },
    // OGI:
    {
      property: "og:image",
      content: "/ogi.jpg",
    },
    {
      property: "og:title",
      content: "Qodirov Jahongir",
    },
    {
      property: "og:description",
      content: "Qodirov Jahongir©",
    },
    {
      property: "og:image:width",
      content: "2501",
    },
    {
      property: "og:image:height",
      content: "1307",
    },
  ],
  link: [
    // Favicon:
    {
      rel:"stylesheet",
      href:"https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      type: "image/png",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    // Google icons:
    // -- Material Icons
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    },
    //  -- Material Symbols:
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
    },
    // Google fonts:
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    },
  ],
});
</script>

<style lang="scss" scoped>
#root {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: scroll;
  background-color: white;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: -99;
  background-image: url("/assets/images/bg.svg");
  background-size: 60px;
}
</style>
