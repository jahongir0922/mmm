<template>
  <div id="default">
    <NuxtLoadingIndicator />
    <Header />
    <div id="content">
      <NuxtPage class="nuxts-pagess" />
    </div>
    <Footer />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#default {
  @include media(">=desktop") {
    width: 85%;
  }
  @include media("<=1200px") {
    width: 100%;
  }
  @include media("<=LGtablet") {
    padding: 10px;
  }
  width: 1200px;
  background-color: white;
  display: grid;
  gap: 20px;
  grid-template-columns: 100%;
  align-content: start;
  padding: 20px 40px 0px 40px;
  z-index: -10;
  box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.7);
}
</style>
