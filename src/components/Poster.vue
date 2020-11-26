<template>
  <div class="poster">
    <div class="posterthreediv">
      <!-- first card -->
      <div class="main_card">
        <div class="top_text">
          <span style="font-size: 24px">万利国际</span>
          <span style="font-size: 16px"
            >简单好玩、急速刺激，玩家充值成功，选择游戏即可下注</span
          >
        </div>
        <div style="height: 400px; background-color: grey; width: 100%">
          <img
            src="../assets/images/11.png"
            alt
            style="height: 400px; width: 100%"
          />
        </div>

        <div class="btndiv">
          <div
            style="display: flex; justify-content: center; margin-right: 10px"
          >
            <span class="btnone">立即试玩</span>
          </div>

          <div
            style="display: flex; justify-content: center; margin-left: 10px"
          >
            <span class="btntwo">立即试玩</span>
          </div>
        </div>
      </div>
      <!-- end -->
      <div class="main_card">
        <div class="top_text">
          <span style="font-size: 24px">万利国际</span>
          <span style="font-size: 16px"
            >简单好玩、急速刺激，玩家充值成功，选择游戏即可下注</span
          >
        </div>
        <div style="height: 400px; background-color: grey; width: 100%">
          <img
            src="../assets/images/22.png"
            alt
            style="height: 400px; width: 100%"
          />
        </div>

        <div class="btndiv">
          <div
            style="display: flex; justify-content: center; margin-right: 10px"
          >
            <span class="btnone">立即试玩</span>
          </div>

          <div
            style="display: flex; justify-content: center; margin-left: 10px"
          >
            <span class="btntwo">立即试玩</span>
          </div>
        </div>
      </div>
      <!-- second card end -->
      <!-- <div class="main_card">
        <div class="top_text">
          <span style="font-size: 24px">果博东方网投</span>
          <span style="font-size: 16px"
            >简单好玩、急速刺激，玩家充值成功，选择游戏即可下注</span
          >
        </div>
        <div style="height: 400px; background-color: grey; width: 100%">
          <img
            src="../assets/casinogirl.png"
            alt
            style="height: 400px; width: 100%"
          />
        </div>
        <div class="btndiv">
          <div
            style="display: flex; justify-content: center; margin-left: 10px"
          >
            <span class="btntwo">立即试玩</span>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    colorChange() {},
  },
};
</script>

<style lang="scss" scoped>
.poster {
  width: 100%;
  height: 700px;
  // background: url(../assets/darkbg.jpg) no-repeat;
  background: rgb(78, 78, 78);
  background-size: 100% 100%;
  display: flex;
}
.posterthreediv {
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100% !important;
  display: flex;
}

.btnone {
  cursor: pointer;
  width: 150px;
  height: 60px;
  margin-top: 10px;
  border: 2px solid #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #fff;
  letter-spacing: 0;
}
.btntwo {
  cursor: pointer;
  width: 150px;
  height: 60px;
  margin-top: 10px;
  border: 2px solid #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #fff;
  letter-spacing: 0;
}
.btntwo:hover {
  color: #000;
  background-color: #fff;
  font-weight: bold;
}
.main_card {
  height: 580px;
  background-color: white;
  width: 500px;
  margin: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
}
.top_text {
  height: 100px;
  width: 100%;
  background-color: #212121;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  color: white;
  flex-direction: column;
  padding-left: 15px;
}
.btndiv {
  height: 80px;
  width: 100%;
  background-color: #212121;
  display: flex;
  justify-content: center;
}
</style>
