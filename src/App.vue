<template>
  <div class="container">
    <head-banner></head-banner>
    <div class="main-content">
      <Timeline @itemClick="showDrawer" :data="data"/>
      <HistoryTable />
    </div>
    <detail-drawer :open="open" :links="currentItem.links" :title="currentItem.dynasty" :description="currentItem.description" @move="handleOnMove" @onClose="onClose"></detail-drawer>
    <a-float-button-group shape="circle" >
      <a-float-button href="https://github.com/liujuntao123/chines-history-video" target="_blank">
        <template #icon>
          <GithubOutlined />
        </template>
      </a-float-button>
      <a-back-top />
    </a-float-button-group>
  </div>
</template>

<script setup>
import HeadBanner from './components/HeadBanner.vue';
import Timeline from './components/AllTimeline.vue';
import DetailDrawer from './components/DetailDrawer.vue';
import HistoryTable from './components/HistoryTable.vue';
import { GithubOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import {data} from './components/data'

const open = ref(false);
const currentItem = ref({});
const currentIndex=ref(1)
const showDrawer = (item,i) => {
  currentItem.value = item;
  open.value = true;
  currentIndex.value=i
};
const onClose = () => {
  open.value = false;
};
const handleOnMove=(step)=>{
  const newIndex=currentIndex.value+step
  if(newIndex>data.length-1||newIndex<0){
    return
  }
  currentIndex.value=newIndex
  currentItem.value=data[currentIndex.value]
}

</script>

<style scoped>
.container {
  background-color: #d4e5ef;
}
.main-content {
  display: flex;
}
</style>
