<template>
  <div id="home">
    <LastFood :jonatma="lastfood" />
    <h1>Mashhur kategoriyalar</h1>
    <TransitionGroup
      appear=""
      tag="ol"
      @before-enter="beforeEnter"
      @enter="enter"
      v-bind:style="{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '20px',
      }"
    >
      <NuxtLink
        v-for="(item, index) in famousCategory"
        :key="index"
        :to="'/categories/' + item.id"
        :data-index="index"
      >
        <Category :jonatma="item" />
      </NuxtLink>
      <NuxtLink v-if="koproq" to="/categories/" :data-index="5">
        <div id="all">
          <span class="material-symbols-outlined"> arrow_circle_right </span>
          <span>Barchasini ko'rish</span>
        </div>
      </NuxtLink>
    </TransitionGroup>
    <!-- <div id="categories"></div> -->
    <h1>Kolleksiyalar</h1>
    <div id="collections-block">
      <NuxtLink
        :to="`/collections/` + item.id"
        v-for="(item, index) in collection"
        :key="index"
      >
        <Collections :jonatma="item" :quantity="quantity[index]" />
      </NuxtLink>
    </div>
    <h1>So'nggi retseptlar</h1>
    <TransitionGroup
      v-bind:style="{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
      }"
      tag="ul"
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <NuxtLink
        v-for="(item, index) in partialFood"
        :key="index"
        :data-index="indexsatsiya(index)"
        :to="'/blog/' + item.id"
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
import { TransitionGroup } from "vue";
import { gsap } from "gsap";
//onscroll animation

//onscroll animation
const { data: lastfood } = useFetch("/api/blog/last");
const { data: collection } = useLazyFetch("/api/collections");
const { data: categories } = useLazyFetch("/api/categories");
const { data: foods } = useLazyFetch("/api/foods");
const koproq = ref(false);

// const { data: foods } = await useAsyncData(`/api/foods`, () =>
//   $fetch(`/api/foods`)
// );

const quantity = ref([]);
var yuklash = ref("Ko'proq yukllash");
onMounted(() => {
  for (let i = 0; i < collection.value.length; i++) {
    let vaqtincha = foods.value.filter((food) => {
      return food.collection_id == collection.value[i].id;
    });
    quantity.value.push(vaqtincha.length);
  }
  koproqFunc();
  addFood();
  famousCategoryTransition();
});
const koproqFunc = () => {
  koproq.value = true;
};
const famousCategory = ref([]);
function famousCategoryTransition() {
  for (let i = 0; i < 4; i++) {
    famousCategory.value.push(categories.value[i]);
  }
}
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

// transitions
const indexsatsiya = (index) => {
  for (let i = 1; index / 8 >= 1; i++) {
    index = index % 8;
  }
  return index;
};
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

// transitions
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  flex-direction: column;
  gap: 40px;
  #collections-block {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  ol {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    @include media("<=LGtablet") {
      grid-template-columns: repeat(3, 1fr);
    }
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      #all {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        &:hover span:nth-child(2) {
          color: $sabzirang;
        }
      }
      span:nth-child(1) {
        color: $sabzirang;
        font-size: 4em;
        font-weight: bold;
      }
      span:nth-child(2) {
        font-weight: bold;
      }
    }
  }
  #add {
    display: flex;
    justify-content: center;
    button {
      background-color: rgba($color: #000000, $alpha: 0.8);
      color: white;
      border-radius: 10px;
      font-weight: bold;
      font-size: 1.1em;
      padding-top: 15px;
      padding-bottom: 15px;
      &:hover {
        transform: translateY(-20%);
      }
      &:active {
        background-color: #000000;
      }
    }
  }
}
</style>
