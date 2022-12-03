<template>
  <div id="category-component">
    <span
      id="rasm"
      v-bind:style="{ backgroundImage: `url(${props.jonatma.img})` }"
    ></span>
    <span id="name">{{ props.jonatma.uzname }}</span>
  </div>
</template>

<script setup>
const props = defineProps(["jonatma"]);
</script>
<style lang="scss" scoped>
#category-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  #rasm {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    transition: all ease 0.8s;
  }
  &:hover #rasm {
    background-size: 120%;
  }
  &:hover #name {
    color: $sabzirang;
  }
  #name {
    font-weight: bold;
  }
}
</style>
