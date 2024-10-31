<template>
  <div class="container">
    <head-banner></head-banner>
    <div class="main-content">
      <Timeline @itemClick="showDrawer" :data="data" />
      <div class="right-content">
        <Recomended />
        <HistoryTable />
      </div>
    </div>
    <detail-drawer :open="open" :links="currentItem.links" :title="currentItem.dynasty" :description="currentItem.description" @move="handleOnMove" @onClose="onClose"></detail-drawer>
    <a-float-button-group shape="circle">
      <a-float-button href="https://github.com/liujuntao123/chines-history-video" target="_blank">
        <template #icon>
          <GithubOutlined />
        </template>
      </a-float-button>
      <a-popover title="13927303506@163.com">
        <a-float-button>
          <template #icon>
            <MailOutlined />
          </template>
        </a-float-button>
      </a-popover>
      <a-back-top />
    </a-float-button-group>
  </div>
</template>

<script setup>
import HeadBanner from './components/HeadBanner.vue';
import Timeline from './components/AllTimeline.vue';
import DetailDrawer from './components/DetailDrawer.vue';
import HistoryTable from './components/HistoryTable.vue';
import { GithubOutlined, MailOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import { data } from './components/data';
import Recomended from './components/Recomended.vue';

const open = ref(false);
const currentItem = ref({});
const currentIndex = ref(1);
const showDrawer = (item, i) => {
  currentItem.value = item;
  open.value = true;
  currentIndex.value = i;
};
const onClose = () => {
  open.value = false;
};
const handleOnMove = (step) => {
  const newIndex = currentIndex.value + step;
  if (newIndex > data.length - 1 || newIndex < 0) {
    return;
  }
  currentIndex.value = newIndex;
  currentItem.value = data[currentIndex.value];
};
</script>

<style scoped>
.container {
  /* 更淡的米黄色背景 */
  background-color: #fdfaf5;
  /* 添加仿古纸张纹理和轻微的噪点效果 */
  background-image: 
    linear-gradient(rgba(227, 217, 199, 0.05) 2px, transparent 2px),
    linear-gradient(90deg, rgba(227, 217, 199, 0.05) 2px, transparent 2px),
    linear-gradient(rgba(212, 197, 169, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(212, 197, 169, 0.05) 1px, transparent 1px);
  background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
  /* 添加一个微妙的渐变叠加，模拟老旧纸张效果 */
  background-attachment: fixed;
  position: relative;
}

.container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    repeating-linear-gradient(
      45deg,
      rgba(188, 175, 154, 0.02) 0px,
      rgba(188, 175, 154, 0.02) 1px,
      transparent 1px,
      transparent 2px
    );
  pointer-events: none;
}

.main-content {
  width: 1400px;
  margin: 40px auto;
  display: flex;
}
.right-content {
  width:504px;
  display: flex;
  flex-direction: column;
  
}
</style>
