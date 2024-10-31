<template>
  <div class="banner-container">
    <div class="site-header">
      <div class="header-inner">
        <h1 class="site-title">
          <p>中国历朝代视频讲解</p>
        </h1>
        <div class="content-container">
          <p class="site-description">
            滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。
          </p>
          <p class="site-description">
            白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中。
          </p>
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
  color: #2c1810;  
  font-family: 'zhongzhiqi';
  /* background: #f8f1e5;  */
}

.content-container {
  width: 1400px;
  margin: 0 auto;
  padding: 20px;  
  background: #f8f1e5;  /* 改为更浅的米白色背景 */
  border-radius: 8px;  
}

.site-header {
  background: center / cover no-repeat  
    url(https://5000yan.com/templets/wuqianyan/skin/img/zhonghua-banner.jpg);
  /* padding: 60px 0;   */
  position: relative;
  overflow: hidden;  /* 添加此行以确保伪元素不会溢出 */
}


.site-title {
  text-align: center;
  font-size: 80px;
  margin-top: 30px;
  margin-bottom: 30px;  
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);  /* 添加文字阴影 */
  p{
    margin: 0;
  }
}



.site-description {
  line-height: 1.8;  
  font-size: 36px;  
  text-align: center;
  margin: 15px 0;  
}

.author {
  font-size: 28px;  
  text-align: right;
  margin-top: 20px;  
  color: #4a3427;  /* 调整作者署名颜色，使其更协调 */
  font-style: italic;  
}
</style>