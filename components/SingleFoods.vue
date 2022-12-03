<template>
  <div id="single-foods">
    <div
      id="rasm"
      ref="rasm"
      v-bind:style="{ backgroundImage: `url(${jonatma.img})` }"
    ></div>
    <h4>{{ jonatma.uzname }}</h4>
  </div>
</template>

<script setup>
const props = defineProps(["jonatma"]);
</script>

<style lang="scss" scoped>
#single-foods {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  #rasm {
    border-radius: 5px;
    height: 200px;
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    transition: all ease-in-out 0.4s;
  }
  &:hover #rasm {
    background-size: calc(120%);
  }
  &:hover h4 {
    color: $sabzirang;
  }
  h4 {
    padding: 0 10px;
  }
}
</style>
