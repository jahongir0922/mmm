<template>
  <div id="about">
    <h1>Biz haqimizda</h1>
    <h1 class="large">
      Biz ovqat pishirishni va internetni yaxshi ko'radiganlar guruhimiz
    </h1>
    <img src="/assets/images/about/menu141.jpg" alt="" />
    <p>
      Taomlar, Milliy va jahon taomlar retseptlari, tayyorlash tartibi, taomlar
      uchun kerak mahsulotlari, barcha turdagi taomlar retsepti. Mazali va
      tansiq taomlar pishiring. Pazandachilikka oid retseptlar va yangiliklar.
      Qiziqarli va foydali ma'lumotlar.
    </p>
    <h1 class="large">Iqtidorli oshpazlarning ajoyib jamoasi</h1>
    <div id="chef-povar">
      <NuxtLink v-for="(item, index) in chefs" :key="index">
        <Chefs :jonatma="item" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Biz haqimizda",
});
const { data: chefs } = useFetch("/api/chefs");
</script>

<style lang="scss" scoped>
#about {
  display: flex;
  flex-direction: column;
  gap: 30px;
  .large {
    font-size: 4em;
  }
  p {
    font-size: 1.5em;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Times New Roman", Times, serif;
  }
  #chef-povar {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    display: grid;
    gap: 20px;
  }
}
</style>
