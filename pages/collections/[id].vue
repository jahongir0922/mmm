<template>
  <div id="collections-page">
    <h1>{{ collection.name }}</h1>
    <div id="collection-block">
      <NuxtLink :to="'/blog/' + item.id" v-for="(item, index) in bycollection" :key="index">
        <SingleFoods :jonatma="item"></SingleFoods>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: collection } = await useAsyncData(
  `/api/collections/neded?q=${route.params.id}`,
  () => $fetch(`/api/collections/neded?q=${route.params.id}`)
);
const { data: bycollection } = await useAsyncData(
  `/api/collections/collections-food?q=${route.params.id}`,
  () => $fetch(`/api/collections/collections-food?q=${route.params.id}`)
);
</script>

<style lang="scss" scoped>
#collections-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  #collection-block {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
}
</style>
