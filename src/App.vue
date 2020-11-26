<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Init",
  data() {
    return {
     
    };
  },
  methods: {
    GetAgentdata(){
      
      this.axios.post(this.$Global.agentUrl).then(res =>{
        console.log("result agent",res)
      }).catch((e)=>{
        console.log(e);
      })
    }
  },
  created() {
    this.GetAgentdata();
  },
};
</script>





<style lang="scss">
body {
  overflow-x: hidden !important;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // overflow-x: hidden !important;
}
#app {
  //  overflow: hidden;

  min-width: 1275px !important;
  background-color: #000;
}
</style>
