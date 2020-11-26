<template>
  <div style="width: 100%" class="banner">

    <div style="height: 450px;">
      <el-carousel height="450px">
        <el-carousel-item v-for="item in banners" :key="item.id">
           <img :src="item.image" style="width:100%;height:450px;"   />
        </el-carousel-item>
      </el-carousel>
    </div>


    <div style="height:200px;width:300px;position:fixed;right:1%;z-index:1000;bottom:10%;">
      <img src="../assets/images/service.png" alt="" style="width:100%;height:auto">
    </div>
    <!-- end -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      banners: [
        {
          id: 1,
          image: require("../assets/images/d1.png"),
        },
        {
          id: 2,
          image: require("../assets/images/d5.jpg"),
        },
        {
          id: 3,

          image: require("../assets/images/d3.jpg"),
        },
        {
          id: 4,
          image: require("../assets/images/d4.jpg"),
        },
         {
          id: 5,
          image: require("../assets/images/d6.jpg"),
        },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>





</style>
