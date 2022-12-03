<template>
  <div id="lastfood">
    <div ref="image" id="image"></div>
    <div id="yozuv">
      <li>{{ props.jonatma.stats }}</li>
      <h1>{{ lastOne.uzname }}</h1>
      <p>{{ tiny_info }}...</p>
      <div id="to-blog">
        <NuxtLink :to="'/blog/' + lastOne.id">
          <span class="material-symbols-outlined"> arrow_circle_right </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const tiny_info = computed(() => {
  let info = ref([]);
  info.value = props.jonatma.tiny_info.split(" ");
  let tinyInf = ref("");
  for (let i = 0; i < 35; i++) {
    tinyInf.value = `${tinyInf.value + " " + info.value[i]}`;
  }
  return tinyInf.value;
});
var image = ref(null);
const props = defineProps(["jonatma"]);
const { data: lastOne } = useFetch(
  `/api/foods/needed?q=${props.jonatma.food_id}`
);

onMounted(() => {
  image.value.style.backgroundImage = `url("${lastOne.value.img}")`;
});
</script>

<style lang="scss" scoped>
#lastfood {
  display: flex;
  width: 100%;
  height: 500px;
  border-radius: 15px;
  overflow: hidden;
  background-color: $havorang;
  @include media("<=LGtablet") {
    flex-direction: column;
  }

  #image {
    width: 55%;
    height: 100%;
    @include background(center);
    @include media("<=LGtablet") {
      width: 100%;
    }
    @include media("<=LGtablet") {
      height: 50%;
    }
  }
  #yozuv {
    @include media("<=LGtablet") {
      height: 50%;
    }
    @include media("<=LGtablet") {
      width: 100%;
      gap: 0;
    }
    @include media("<LGphone") {
      padding: $padsmall;
    }
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    height: 100%;
    padding: 20px;
    h1 {
      @include media(">=phone", "<=LGphone") {
        font-size: $hmedium;
      }
      @include media("<=phone") {
        font-size: $hsmall;
      }
    }
    p,
    li {
      @include media("<=phone") {
        font-size: $psmall;
      }
      text-align: justify;
    }
    #to-blog {
      text-align: end;
      padding: 50px;
      @include media("<=LGtablet") {
        padding: 0;
      }
      a {
        span {
          font-size: 4em;
          @include media(">=tablet", "<=LGtablet") {
            font-size: 3em;
          }
          @include media("<=tablet") {
            font-size: 2em;
          }
          cursor: pointer;
          &:hover {
            color: $sabzirang;
          }
        }
      }
    }
  }
}
</style>
