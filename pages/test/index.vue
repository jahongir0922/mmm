<template>
  <div id="test">
    <div class="helper"></div>
    <img ref="imgref" src="/assets/images/colored-logo.png" alt="" />
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const imgref = ref(null);

onMounted(() => {
  const el = imgref.value;
  gsap.to(el, {
    rotation: 180,
    duration: 2,
    scrollTrigger: {
      trigger: el,
      // toggleActions: "restart pause resume reset",
      // start: "top 80%",
      // end: "top 30%",
      // scrub: true,
      // scrub: 3,
    },
  });
});
</script>

<style lang="scss" scoped>
#test {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  .helper {
    width: 100%;
    height: 100vh;
    background-color: blue;
  }
  img {
    width: 400px;
    height: 400px;
  }
}
</style>