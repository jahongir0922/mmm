<template>
  <div id="blog">
    <TransitionGroup
      appear=""
      tag="ul"
      v-bind:style="{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
      }"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <NuxtLink
        :to="'/blog/' + item.id"
        v-for="(item, index) in partialFood"
        :key="index"
        :data-index="indexsatsiya(index)"
      >
        <SingleFoods :jonatma="item" />
      </NuxtLink>
    </TransitionGroup>

    <div id="add">
      <button @click="addFood" :disabled="add ? 0 : 1">{{ yuklash }}</button>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
useHead({
  title: "Blog",
});
// transitions;
const indexsatsiya = (index) => {
  for (let i = 1; index / 8 >= 1; i++) {
    index = index % 8;
  }
  return index;
};
const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateX(100px)";
};
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    x: 0,
    duration: 0.2,
    onComplete: done,
    delay: el.dataset.index * 0.2,
  });
};

// transitions

const { data: foods } = await useAsyncData(`/api/foods`, () =>
  $fetch(`/api/foods`)
);

var yuklash = ref("Ko'proq yukllash");
onMounted(() => {
  addFood();
});
let addQuantity = ref(0);
let partialFood = ref([]);
let add = ref(true);
function addFood() {
  for (let i = addQuantity.value; i < addQuantity.value + 8; i++) {
    partialFood.value.push(foods.value[foods.value.length - 1 - i]);
  }
  addQuantity.value += 8;
  if (addQuantity.value == Math.ceil(foods.value.length / 8) * 8) {
    add.value = false;
    yuklash.value = "Yuklash nihoyasiga yetdi";
  }
}
</script>
<style scoped lang="scss">
#blog {
  display: flex;
  padding: 50px;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}
</style>
