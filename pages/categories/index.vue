<template>
  <div id="category">
    <h1>Kategoriyalar</h1>
    <div id="trdiv">
      <TransitionGroup
        name="categ"
        appear=""
        tag="ul"
        @before-enter="beforeEnter"
        @enter="enter"
        v-bind:style="{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: `repeat(${media}, 1fr)`,
          gap: '20px',
        }"
      >
        <li v-for="(item, index) in categ" :key="index" :data-index="index">
          <NuxtLink :to="'/categories/' + item.id">
            <Category :jonatma="item" />
          </NuxtLink>
        </li>
      </TransitionGroup>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
useHead({
  title: "Kategoriyalar",
});
const categ = ref([]);
const { data: categories } = await useAsyncData(`/api/categories`, () =>
  $fetch(`/api/categories`)
);
var media = ref(4);
// function mediafunc(xmatch) {
//   if (xmatch.matches) {
//     media = 3;
//     console.log(media);
//   }
// }
onMounted(() => {
  // const xmatch = window.matchMedia("(max-width: 1024px)");
  categ.value = categories.value;
  // Media query
  // mediafunc(xmatch);
});

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(100px)";
};
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.4,
    onComplete: done,
    delay: el.dataset.index * 0.2,
  });
};
</script>

<style lang="scss" scoped>
#category {
  // display: flex;
  // flex-direction: column;
  // gap: 20px;
  // align-items: center;
  #trdiv {
    // ul {
    //   width: 100%;
    //   display: grid;
    //   grid-template-columns: repeat(4, 1fr);
    //   gap: 20px;
    // }
  }
}
// .categ-enter-active,
// .categ-enter-from {
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 20px;
// }
</style>
