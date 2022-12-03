<template>
  <header>
    <NuxtLink to="/" id="logo">
      <img src="../assets/images/logo2.svg" alt="logo:shakarcha" />
    </NuxtLink>
    <a ref="toggleButton" href="#" class="toggle-button">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </a>

    <nav ref="navbar">
      <NuxtLink to="/">Asosiy sahifa</NuxtLink>
      <NuxtLink to="/about">Biz haqimizda</NuxtLink>
      <NuxtLink to="/categories">Kategoriyalar</NuxtLink>
      <NuxtLink to="/blog">Blogs</NuxtLink>
      <!-- <NuxtLink to="/test">Test</NuxtLink> -->
      <!-- <NuxtLink to="/test2">Test2</NuxtLink> -->

      <div id="login-search">
        <!-- <NuxtLink to="/">Kirish</NuxtLink>
        <NuxtLink to="/">Ro'yxatdan o'tish</NuxtLink>
         -->
        <a @click="qidiruvModal = !qidiruvModal">
          <span class="material-symbols-outlined"> manage_search </span>
        </a>
      </div>
      <QidiruvModal
        v-if="qidiruvModal"
        @yopish="
          () => {
            qidiruvModal = false;
          }
        "
      />
    </nav>
  </header>
</template>

<script setup>
let qidiruvModal = ref(false);

const toggleButton = ref(null);
const navbar = ref(null);
onMounted(() => {
  toggleButton.value.addEventListener("click", () => {
    navbar.value.classList.toggle("active");
  });
  navbar.value.addEventListener("click", () => {
    navbar.value.classList.remove("active");
  });
});
</script>
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  gap: 20px;
  // border: 1px solid red;
  * {
    align-items: center;
  }
  .toggle-button {
    position: absolute;
    display: none;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    z-index: 100;
    @include media("<=LGtablet") {
      display: flex;
    }
    .bar {
      height: 3px;
      width: 100%;
      background-color: black;
      border-radius: 10px;
    }
  }
  #logo {
    img {
      width: 120px;
      @include media(">LGphone", "<=desktop") {
        width: 80px;
      }
      @include media("<=LGphone") {
        width: 50px;
      }
    }
  }
  nav {
    display: flex;
    gap: 20px;

    a {
      @include media("<=LGtablet") {
        width: 100%;
      }
      @include media("<=desktop") {
        font-size: $psmall;
      }
      font-weight: 600;
      &:hover {
        color: $sabzirang;
      }
    }
    #login-search {
      display: flex;
      gap: 20px;
      margin-left: 45px;
      @include media("<=LGtablet") {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        gap: 10px;
      }
      a {
        @include media("<=desktop") {
          font-size: $psmall;
        }

        display: flex;
        background-color: $sabzirang;
        align-items: center;
        padding: 5px 10px;
        border-radius: 5px;
        color: white;
        font-weight: 600;
        &:active {
          background-color: #f44b13;
        }
        &:hover {
          color: $pushti;
        }
        span {
          @include media("<=desktop") {
            font-size: 15px;
          }
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          color: white;
        }
        &:hover span {
          color: $pushti;
        }
      }
    }
  }
  @include media("<=LGtablet") {
    nav {
      display: none;
      flex-direction: column;
      position: absolute;
      right: 0;
      align-items: flex-start;
      top: 0;
      z-index: 99;
      background-color: white;
      width: 50%;
      box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.7);
      border-radius: 10px;
      padding: 45px 20px 20px 20px;
    }
    .active {
      display: flex;
    }
  }
  @include media("<=LGphone") {
    nav {
      width: 70%;
    }
  }
}
</style>
