<template>
  <div class="recomended-container">
    <div class="title">up推荐</div>
    <a-space wrap align="start" :size="12">
      <a-popover
        v-for="up in ups"
        :key="up.mid"
        :title="up.uname"
        :content="up.sign"
        trigger="hover"
      >
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

<!-- <style scoped>
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
</style> -->

<style scoped>
.recomended-container {

  padding: 20px;  
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);  
  border-radius: 16px;  
  transition: transform 0.2s ease;  
}

.recomended-container:hover {
  transform: translateY(-2px);  
}

.title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #18191c;  
  position: relative;
  padding-left: 12px;
}

.title::before {  
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 18px;
  background: #00aeec;  
  border-radius: 2px;
}

.recomended-avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;  
}

.recomended-avatar:hover {
  transform: scale(1.05);  
  border-color: #00aeec;  
}

.recomended-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;  
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.recomended-item:hover {
  background-color: rgba(0, 174, 236, 0.05);  
}

.recomended-item p {
  width: 88px;  
  margin-top: 12px;
  font-size: 14px;
  color: #18191c;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  
}
</style>