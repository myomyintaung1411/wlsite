<template>
  <div style class="scrollmaindiv">
    
    <div class="scrolldiv">
      <div style="display: flex; align-items: center; margin-left: 15px">
        <i
          style="
            background: url(https://img2.54ei.com/dfh/pcsrc/images/icon_nav_bar_notice4.svg)
              no-repeat 60%/60%;
            margin-top: -2px;
            width: 29px;
            height: 20px;
            font-size: 15px;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
          "
        ></i>
      </div>
      <div>
        <marquee
          onmouseover="this.stop();"
          onmouseout="this.start();"
          style="cursor: pointer; color: white"
          @click="ShowNotice()"
          >为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！</marquee
        >
      </div>
    </div>
  </div>
</template>


<script>

export default {
 
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.scrollmaindiv {
  height: 30px;
  background-color: #757575;
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;
  justify-content: center;
}
.scrolldiv {
  width: 1275px !important;
  background-color: #757575;
  justify-content: space-between;
  align-items: center;
  height: 100% !important;
  display: flex;
}
</style>

