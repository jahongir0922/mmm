<template>
  <div id="categories">
    <h1>{{ category.uzname }}</h1>
    <div id="categoriess">
      <NuxtLink
        :to="'/blog/' + item.id"
        v-for="(item, index) in bycategory"
        :key="index"
      >
        <SingleFoods :jonatma="item" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["jonatCategoriya"]);
const route = useRoute();
//
// BIRINCHI YOL
// const { data: foods } = useFetch(`/api/foods`);
// const bycategory = ref([]);
// setTimeout(() => {
//   bycategory.value = foods.value.filter((item) => {
//     return item.category_id == route.params.id;
//   });
// }, 100);
//
// IKKINCHI YOL
// const { data: foods } = useFetch(`/api/foods`);
// const bycategory = ref([]);
// onMounted(() => {
//   bycategory.value = foods.value.filter((item) => {
//     return item.category_id == route.params.id;
//   });
// });
//
// ENG YAXSHI ISHLAGAN YOL
const { data: category } = await useAsyncData(
  `/api/categories/byid?=${route.params.id}`,
  () => $fetch(`/api/categories/byid?q=${route.params.id}`)
);
const { data: bycategory } = await useAsyncData(
  `/api/foods/forcategory?q=${route.params.id}`,
  () => $fetch(`/api/foods/forcategory?q=${route.params.id}`)
);
</script>
<style lang="scss" scoped>
#categories {
  #categoriess {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
}
</style>
