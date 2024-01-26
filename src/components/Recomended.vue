<template>
  <div class="recomended-container">
    <div class="title">up推荐</div>
    <a-space wrap align="start" :size="12">
      <a-popover v-for="up in ups" :key="up.mid" :title="up.uname" :content="up.sign" trigger="hover">
        <div @click="handleClick(up.mid)" class="recomended-item">
          <img referrerpolicy="no-referrer" :src="up.face" class="recomended-avatar" />
          <p>{{ up.uname }}</p>
        </div>
      </a-popover>
    </a-space>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { data } from './recomendedUps';
const ups = ref(data);

function handleClick(mid) {
  window.open(`https://space.bilibili.com/${mid}`);
}
</script>

<style scoped>
.recomended-container {
  width: 320px;
  margin-right: 20px;
  margin-top: 20px;
  padding: 12px;
  background: #fff;
  box-shadow: 2px 2px 4px #ddd;
  border-radius: 4px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.recomended-avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  cursor: pointer;
}

.recomended-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recomended-item p {
  width: 80px;
  margin-top: 8px;
  font-size: 14px;
  color: #333;
  text-align: center;
}
</style>
