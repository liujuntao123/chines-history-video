<template>
  <a-drawer :destroyOnClose="true" width="960" :bodyStyle="bodyStyle" :title="title" size="large" placement="right" :open="open" @close="$emit('onClose')">
    <div class="nav">
      <div class="arrow-left">
        <img src="../assets/arrow.png" alt="上一个" />
        <span>上一个</span>
      </div>
      <p class="title">{{ title }}</p>
      <div class="arrow-right">
        <img src="../assets/arrow.png" alt="下一个" />
        <span>下一个</span>
      </div>
    </div>

    <div class="description">
      <a-card class="card" :title="'介绍'">{{ description }}</a-card>
    </div>
    <div class="video-list">
      <a-card class="card" :title="'视频讲解'">
        <div class="video-box" v-for="link of links" :key="link">
          <div @load.capture="onFrameLoaded" class="frame" v-html="addAutoplayParameter(link)"></div>
        </div>
      </a-card>
    </div>
  </a-drawer>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  links: Array,
});
const bodyStyle = {
  background: '##e9e7ef',
  color: '#50616D',
};
const onFrameLoaded = (e) => {
  const frame = e.target;
  frame.style.width = '100%';
  frame.style.height = '100%';
};

const addAutoplayParameter=(embedCode)=> {
    // 使用正则表达式找到src链接
    var srcRegex = /src=["'](.*?)["']/;
    var match = embedCode.match(srcRegex);

    if (match) {
        // 提取src链接
        var srcUrl = match[1];

        // 检查链接中是否已经包含参数
        if (srcUrl.includes('?')) {
            // 如果已经包含参数，在其后添加autoplay=0
            srcUrl += '&autoplay=0';
        } else {
            // 如果没有参数，添加?autoplay=0
            srcUrl += '?autoplay=0';
        }

        // 将修改后的src链接替换原始字符串中的src部分
        embedCode = embedCode.replace(srcRegex, 'src="' + srcUrl + '"');
    }

    return embedCode;
}


</script>

<style scoped>
.title {
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 0;
}
.description {
  margin-bottom: 40px;
}
.card {
  background-color: #d6ecf0;
}
.video-box {
  height: 480px;
  margin-bottom: 20px;
}
.frame {
  width: 100%;
  height: 100%;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
}
.arrow-left,
.arrow-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
}
.arrow-left img {
  width: 200px;
  transform: rotate(180deg);
}
.arrow-left img:hover {
  transform: rotate(180deg) scale(1.1);
}

.arrow-left span,
.arrow-right span {
  position: absolute;
  bottom: 28px;
}
.arrow-right img {
  width: 200px;
}
.arrow-right img:hover {
  transform: scale(1.1);
}
</style>
