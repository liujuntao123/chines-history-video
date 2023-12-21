<template>
  <div class="container">
    <head-banner></head-banner>
    <div class="main-content">
      <Timeline @itemClick="showDrawer" />
      <HistoryTable />
    </div>
    <detail-drawer :open="open" :links="currentItem.links" :title="currentItem.dynasty" :description="currentItem.description" @onClose="onClose"></detail-drawer>
    <a-back-top />
  </div>
</template>

<script setup>
import HeadBanner from './components/HeadBanner.vue';
import Timeline from './components/AllTimeline.vue';
import DetailDrawer from './components/DetailDrawer.vue';
import HistoryTable from './components/HistoryTable.vue';
import { ref } from 'vue';
const open = ref(false);
const currentItem = ref({});
const showDrawer = (item) => {
  console.log(item);
  currentItem.value = item;
  open.value = true;
};
const onClose = () => {
  open.value = false;
};
</script>

<style scoped>
.container {
  background-color: #d4e5ef;
}
.main-content {
  display: flex;
}
</style>
