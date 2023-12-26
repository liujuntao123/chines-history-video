<template>
  <div class="banner-container">
    <div class="site-header">
      <div class="header-inner">
        <h1 class="site-title">
          <p>中国历朝代视频讲解</p>
        </h1>
        <div class="content-container">

          <p class="site-description">滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。</p>
          <p class="site-description">白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中。</p>
          <p class="author">杨慎《临江仙》</p>
        </div>
        <span class="stow_home"></span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.banner-container {
  color: #000;
  font-family: "zhongzhiqi";
}
.site-header {
  background: center / contain no-repeat url(https://5000yan.com/templets/wuqianyan/skin/img/zhonghua-banner.jpg);
  background-color: #cca973;
  padding: 40px 40px;
}
.site-title {
  text-align: center;
  font-size: 60px;
}

.content-container{
  width: fit-content;
  margin: 0 auto;
}

.site-description {
  line-height: 1.5;
  font-size: 40px;
  text-align: center;
}

.author{
  font-size: 32px;
  text-align: right;
}
</style>
