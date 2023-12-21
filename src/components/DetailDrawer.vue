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
          <div @load.capture="onFrameLoaded" class="frame" v-html="link"></div>
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
