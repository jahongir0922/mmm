<template>
  <div id="chef">
    <div
      id="rasm"
      v-bind:style="{ backgroundImage: `url(${props.jonatma.img})` }"
    ></div>
    <span id="ism">{{ props.jonatma.name }}</span>
    <p id="position">{{ props.jonatma.position }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["jonatma"]);
</script>

<style lang="scss" scoped>
#chef {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  #rasm {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  #ism {
    font-weight: 600;
  }
  #position {
    font-size: small;
    color: $kulrang;
  }
}
</style>
