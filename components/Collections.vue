<template>
  <div id="collection">
    <div
      id="rasm"
      ref="rasm"
      v-bind:style="{ backgroundImage: `url(${props.jonatma.img})` }"
    ></div>
    <div id="context">
      <h2>{{ props.jonatma.name }}</h2>
      <div>
        <p>{{ props.quantity }} ta retsept</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["jonatma", "quantity"]);
const rasm = ref(null);
</script>
<style lang="scss" scoped>
#collection {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #eee;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;

  &:hover #rasm {
    background-size: calc(120%);
  }
  &:hover #context > h2 {
    color: $sabzirang;
  }
  #rasm {
    height: 300px;
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    transition: all ease 0.8s;
  }
  #context {
    padding: 20px;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      justify-content: flex-end;
      p {
        padding: 5px;
        border: 0.5px solid #000;
        border-radius: 5px;
      }
    }
  }
}
</style>
