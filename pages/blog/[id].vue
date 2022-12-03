<template>
  <div id="recipe">
    <!-- <h1>food id {{ $route.params.id }}</h1> -->
    <span>{{ blog.stats }}</span>
    <h1>{{ blog.food_uzname }}</h1>
    <div id="reyting">
      <img id="chef" :src="chef.img" alt="" />
      <span id="chefname">{{ chef.name }}</span>
      <span id="date">{{ blog.date }}</span>
      <div id="baho_scope">
        <img
          v-for="(item, index) in 5"
          :key="index"
          src="/assets/images/icons/star.svg"
          alt=""
        />
        <div id="baho">
          <img
            v-for="(item, index) in blog.stars"
            :key="index"
            src="/assets/images//icons/starfill.svg"
            alt=""
          />
        </div>
      </div>
    </div>
    <hr />
    <p>{{ blog.tiny_info }}</p>
    <iframe :src="blog.y_video"></iframe>
    <div>
      <p>Tayyorlash vaqti</p>
      <p>{{ blog.tayyorlash_vaqti }} daqiqa</p>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const { data: blog } = await useAsyncData(
  `/api/blog/byfoodid?q=${route.params.id}`,
  () => $fetch(`/api/blog/byfoodid?q=${route.params.id}`)
);
const { data: chef } = await useAsyncData(
  `/api/chefs/needed?q=${blog.value.chef_id}`,
  () => $fetch(`/api/chefs/needed?q=${blog.value.chef_id}`)
);
// console.log(chef.name);
// console.log(blog.chef_id);
</script>

<style lang="scss" scoped>
#recipe {
  display: flex;
  flex-direction: column;
  gap: 25px;
  #reyting {
    display: flex;
    align-items: center;
    gap: 20px;
    #chef {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    #baho_scope {
      #baho {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
  iframe {
    height: 650px;
  }
}
</style>
