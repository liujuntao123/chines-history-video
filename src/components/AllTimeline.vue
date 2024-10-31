<template>
  <div>
    <div class="timeline">
      <div class="entry" v-for="(item,i) of data" :key="item.dynasty">
        <div class="title-section">
          <div @click="$emit('itemClick', item,i)" class="scroll-title">
            {{ item.dynasty }}
          </div>
          <div class="period">{{ item.duration }}</div>
        </div>
        <div class="content">
          <div class="dynasty-name">{{ item.dynasty }}</div>
          <div class="description">{{ item.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Array
});
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 1200px;
  margin-right: 20px;
  margin-bottom: 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 16px;
  box-shadow: 
    0 0 40px rgba(139, 69, 19, 0.1),
    0 0 100px rgba(139, 69, 19, 0.05);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 300px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, 
    rgba(196, 164, 132, 0) 0%,
    rgba(196, 164, 132, 1) 15%,
    rgba(196, 164, 132, 1) 85%,
    rgba(196, 164, 132, 0) 100%
  );
}

.entry {
  margin: 30px 0;
  position: relative;
  display: flex;
  align-items: flex-start;
}

.title-section {
  flex: 0 0 250px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 50px;
  position: relative;
}

.scroll-title {
  width: 100px;
  height: 40px;
  background: #f9f2e6;
  border: 2px solid #8b4513;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8b4513;
  font-weight: bold;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  cursor: pointer;
  background-image: 
    linear-gradient(45deg, 
      rgba(139, 69, 19, 0.05) 25%, 
      transparent 25%, 
      transparent 50%, 
      rgba(139, 69, 19, 0.05) 50%, 
      rgba(139, 69, 19, 0.05) 75%, 
      transparent 75%, 
      transparent
    );
  background-size: 4px 4px;
}

.scroll-title:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(139, 69, 19, 0.2);
}

.scroll-title::before,
.scroll-title::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 100%;
  background: #f9f2e6;
  border: 2px solid #8b4513;
  border-radius: 4px;
}

.scroll-title::before {
  left: -6px;
}

.scroll-title::after {
  right: -6px;
}

.period {
  width: 150px;
  padding: 4px 8px;
  background: rgba(230, 230, 230, 0.8);
  border-radius: 4px;
  font-size: 0.9em;
  text-align: center;
  border: 1px solid rgba(139, 69, 19, 0.2);
}

.content {
  flex: 1;
  max-width: 500px;
  background: rgba(253, 245, 230, 0.9);
  border: 2px solid #8b4513;
  border-radius: 8px;
  padding: 15px 20px;
  position: relative;
  margin-left: 30px;
  transition: all 0.3s ease;
}

.content:hover {
  transform: translateX(5px);
  box-shadow: 
    -5px 5px 15px rgba(139, 69, 19, 0.1),
    0 0 30px rgba(139, 69, 19, 0.05);
}

.content::before {
  content: '';
  position: absolute;
  left: -32px;
  top: 50%;
  width: 30px;
  height: 2px;
  background: #c4a484;
  transform: translateY(-50%);
}

.content::after {
  content: '';
  position: absolute;
  left: -38px;
  top: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #8b4513;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}

.entry:hover .content::after {
  transform: translateY(-50%) scale(1.2);
  box-shadow: 0 0 10px rgba(139, 69, 19, 0.3);
}

.dynasty-name {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #8b4513;
  border-bottom: 1px solid #d4b895;
  padding-bottom: 5px;
  text-shadow: 1px 1px 2px rgba(139, 69, 19, 0.1);
}

.description {
  font-size: 0.95em;
  line-height: 1.8;
  text-align: justify;
  color: #333;
}

@media (max-width: 768px) {
  .timeline {
    margin: 10px;
    padding: 10px;
  }
}
</style>