<template>
  <div class="home">
    <Header />

    <Banner />
    <Scrollbar />
    <div style="height: 240px">
      <img
        src="../assets/images/description.png"
        alt=""
        style="height: 100%; width: 100%"
      />
    </div>
    <Poster />
    <Gameapp />
    <Qqflash />
    <Footertest />
  </div>
</template>
       
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Scrollbar from "@/components/Scrollbar.vue";
import Banner from "@/components/Banner.vue";
import Poster from "@/components/Poster.vue";
import Gameapp from "@/components/Gameapp.vue";
import Qqflash from "@/components/Qqflash.vue";
import Footertest from "@/components/Footertest.vue";

export default {
  name: "Home",
  components: {
    Header,
    Scrollbar,
    Banner,
    Poster,
    Gameapp,
    Qqflash,
    Footertest,
  },

};
</script>

<style lang="scss" >
</style>
