<template>
  <div id="footer">
    <div id="footer-links">
      <div id="logo">
        <img id="img-logo" src="/assets/images/logo2.svg" alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          hic enim delectus repellendus repudiandae perspiciatis architecto
          temporibus et exercitationem, itaque animi aut doloremque incidunt,
          possimus suscipit totam, harum porro commodi.
        </p>
      </div>
      <div>
        <h4>Shakarcha</h4>
        <NuxtLink to="/">Asosiy sahifa</NuxtLink>
        <NuxtLink to="/">Biz haqimizda</NuxtLink>
        <NuxtLink to="/">Kategoriyalar</NuxtLink>
        <NuxtLink to="/">Kolleksiyalar</NuxtLink>
      </div>
      <div>
        <h4>Huquqiy me'yorlar</h4>
        <NuxtLink to="/">Foydalanish sharti</NuxtLink>
        <NuxtLink to="/">Cookie siyosati</NuxtLink>
        <NuxtLink to="/">Mualliflik huquqi</NuxtLink>
      </div>
      <div>
        <h4>Ijtimoiy Tarmoqlar</h4>
        <NuxtLink to="/">Facebook</NuxtLink>
        <NuxtLink to="/">Instagram</NuxtLink>
        <NuxtLink to="/">Telegram</NuxtLink>
        <NuxtLink to="/">You tube</NuxtLink>
      </div>
    </div>
    <hr />
    <div id="huquq">
      <p>© 2022 Shakarcha - Hamma huquqlar himoyalangan</p>
      <div id="social">
        <NuxtLink to="/about">
          <img
            src="/assets/images/social/1820484_brand_facebook_logo_network_social_icon.svg"
            alt=""
        /></NuxtLink>
        <NuxtLink to="/about">
          <img
            src="/assets/images/social/2959742_broadcast_google_streaming_video_youtube_icon.svg"
            alt=""
        /></NuxtLink>
        <NuxtLink to="/about">
          <img
            src="/assets/images/social/2959748_instagram_photo_share_icon.svg"
            alt=""
        /></NuxtLink>
        <NuxtLink to="/about">
          <img
            src="/assets/images/social/9167906_telegram_chat_socialmedia_message_communication_icon.svg"
            alt=""
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#footer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: $oqkulrang;
  padding: 20px;
  #footer-links {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
      a {
        font-size: small;
        font-family: "Inter", "Century Gothic", sans-serif;
        color: $kulrang;

        &:hover {
          color: $sabzirang;
        }
      }
    }
    #logo {
      width: 40%;
      display: flex;
      align-items: center;
      gap: 30px;
      flex-direction: column;

      #img-logo {
        height: 65px;
        width: 65px;
      }
      p {
        text-align: justify;
        color: $kulrang;
      }
    }
  }
  #huquq {
    display: flex;
    justify-content: space-between;
    p {
      font-size: small;
      color: $kulrang;
    }
    #social {
      display: flex;
      gap: 15px;
      a {
        img {
          width: 20px;
          height: 20px;
          filter: invert(51%) sepia(3%) saturate(122%) hue-rotate(46deg)
            brightness(97%) contrast(87%);
        }
      }
    }
  }
}
</style>
