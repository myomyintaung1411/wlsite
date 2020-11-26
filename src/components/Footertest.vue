<template>
  <footer id="footer">
    <div class="wrapper">
      <div id="footer-logo"></div>
      <ul id="footer-nav">
        <li>
          <a href="http://wl2021.com" class="daili_apply" target="_blank"
            >合作代理</a
          >
        </li>
        <li><a href="http://hn2210.com" target="_blank">代理登陆</a></li>
        <li><a href="javascript:;" class="cunkuanHelp_modal">存款帮助</a></li>
        <li><a href="javascript:;" class="qukuanHelp_modal">取款帮助</a></li>
        <li><a href="javascript:;" class="aboutUs_modal">关于我们</a></li>
        <li><a href="javascript:;" class="normalQues_modal">常见问题</a></li>
      </ul>
      <p id="footer-suggest">COPYRIGHT © WANLI INTERNATIONAL RESERVED.</p>
    </div>

  </footer>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

#footer {
  padding: 28px 0;
  background: #303030;
}
.wrapper {
  position: relative;
  width: 1040px;
  margin: 0 auto;
}

#footer-logo {
  display: block;
  height: 41px;
  background: url(../assets/images/footer.png) no-repeat center;
}
#footer-nav {
  display: block;
  height: 50px;
  font-size: 0;
  line-height: 50px;
  text-align: center;
}
#footer-nav li {
  display: inline-block;
  color: #969696;
  font-size: 12px;
  //  margin-right: 12px;
}
ul li {
  list-style: none;
}
#footer-nav a {
  color: inherit;
  text-align: center;
  text-decoration: none;
}
#footer-nav a:hover {
  text-decoration: underline;
}
#footer-nav li + li:before {
  content: "|";
  padding: 0 8px;
  color: #969696;
}
#footer-suggest {
  display: block;
  margin: 0;
  color: #585858;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
}
ol,
ul {
  display: inline-block;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}
</style>