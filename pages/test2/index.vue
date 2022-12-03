<template>
  <div>
    <TransitionGroup tag="ul" name="test2">
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </TransitionGroup>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.test2-enter-active,
.test2-enter-from {
}
</style>
