<template>
  <div>
    <div class="main-timeline">
      <div class="timeline" v-for="(item,i) of data" :key="item.dynasty">
        <div class="timeline-content">
          <div @click="$emit('itemClick', item,i)" class="circle">
            <p class="dynasty">{{ item.dynasty }}</p>
          </div>
          <div class="content">
            <span class="year">{{ item.duration }}</span>
            <div class="detail">
              <p class="title">
                {{ item.dynasty }}
              </p>
              <p class="description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data:Array
});
</script>

<style scoped>
.dynasty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 28px;
  font-weight: 600;
  color: #a78e44;
  cursor: pointer;
  background: center 100% / 100% 100% no-repeat url('../assets/scroll.png');
  font-family: "zhongzhiqi";
}
.detail {
  background: center 100% / 100% 100% no-repeat url('../assets/paper.png');
  padding: 40px;
  /* border-radius: 12px; */
}
.main-timeline {
  position: relative;
  max-width: 1280px;
  margin: 20px;
  margin-bottom: 0;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 4px #ddd;
}
.main-timeline:before,
.main-timeline:after {
  content: '';
  display: block;
  width: 100%;
  clear: both;
}
.main-timeline:before {
  content: '';
  width: 12px;
  height: calc(100% - 80px);
  background: #cca872;
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: 40px;
}
.main-timeline .timeline {
  width: 50%;
  float: left;
  position: relative;
  z-index: 1;
}
.main-timeline .timeline:before,
.main-timeline .timeline:after {
  content: '';
  display: block;
  width: 100%;
  clear: both;
}
.main-timeline .timeline:first-child:before,
.main-timeline .timeline:last-child:before {
  content: '';
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  border: 4px solid #cca872;
  position: absolute;
  top: -16px;
  right: -24px;
  z-index: 1;
}
.main-timeline .timeline:last-child:before {
  top: auto;
  bottom: -16px;
}
.main-timeline .timeline:last-child:nth-child(even):before {
  right: auto;
  left: -12px;
  bottom: -2px;
}
.main-timeline .timeline-content {
  display: flex;
  text-align: center;
  margin-top: 8px;
  position: relative;
  transition: all 0.3s ease 0s;
}
.main-timeline .timeline-content:before {
  content: '';
  width: 100%;
  height: 5px;
  background: #cca872;
  position: absolute;
  top: 88px;
  left: 0;
  z-index: -1;
}
.main-timeline .circle {
  width: 160px;
  height: 120px;
  background: #fff;
  float: left;
  margin-right: 24px;
  margin-top: 30px;
  position: relative;
  transition: all 0.3s;
}
.main-timeline .circle:hover {
  transform: scale(1.1);
}
.main-timeline .content {
  flex: 1;
  padding-right: 40px;
  position: relative;
}
.main-timeline .year {
  display: block;
  padding: 8px;
  margin-top: 40px;
  margin-bottom: 32px;
  background: #bacac6;
  border-radius: 7px;
  font-size: 14px;
  color: #50616d;
  font-weight: 600;
}
.main-timeline .title {
  font-size: 25px;
  font-weight: 600;
  color: #50616d;
  margin: 0;
}
.main-timeline .description {
  font-size: 14px;
  color: #50616d;
  text-align: justify;
  line-height: 2;
  font-weight: 600;
}
.main-timeline .timeline:nth-child(2n) .timeline-content,
.main-timeline .timeline:nth-child(2n) .circle {
  float: right;
}
.main-timeline .timeline:nth-child(2n) .circle {
  margin: 30px 0 0 24px;
}
.main-timeline .timeline:nth-child(2n) .circle:before {
  right: auto;
  left: -33px;
  box-shadow: -7px 0 9px -7px #444 inset;
}
.main-timeline .timeline:nth-child(2n) .circle span:before,
.main-timeline .timeline:nth-child(2n) .circle span:after {
  right: auto;
  left: -33px;
  border-radius: 0 0 21px 0;
}
.main-timeline .timeline:nth-child(2n) .circle span:after {
  border-radius: 0 21px 0 0;
}
.main-timeline .timeline:nth-child(2n) .content {
  padding: 0 0 0 40px;
  margin-left: 2px;
}
.main-timeline .timeline:nth-child(2n) .icon {
  right: auto;
  left: -14px;
}
.main-timeline .timeline:nth-child(2n) .icon:before,
.main-timeline .timeline:nth-child(2n) .icon span:before,
.main-timeline .timeline:nth-child(2n) .icon span:after {
  left: auto;
  right: -15px;
}
.main-timeline .timeline:nth-child(2n) .icon span:before {
  border-radius: 0 0 0 21px;
}
.main-timeline .timeline:nth-child(2n) .icon span:after {
  border-radius: 21px 0 0 0;
}
.main-timeline .timeline:nth-child(2) {
  margin-top: 180px;
}
.main-timeline .timeline:nth-child(odd) {
  margin: -175px 0 0 0;
}
.main-timeline .timeline:nth-child(even) {
  margin-bottom: 80px;
}
.main-timeline .timeline:first-child,
.main-timeline .timeline:last-child:nth-child(even) {
  margin: 0;
}
@media only screen and (max-width: 990px) {
  .main-timeline:before {
    left: 95%;
  }
  .main-timeline .timeline {
    width: 100%;
    float: none;
    margin-bottom: 20px !important;
  }
  .main-timeline .timeline:first-child:before,
  .main-timeline .timeline:last-child:before {
    left: auto !important;
    right: -13px !important;
  }
  .main-timeline .timeline:nth-child(2n) .circle {
    float: left;
    margin: 30px 24px 0 0;
  }
  .main-timeline .timeline:nth-child(2n) .circle:before {
    right: -33px;
    left: auto;
    box-shadow: 7px 0 9px -7px #444 inset;
  }
  .main-timeline .timeline:nth-child(2n) .circle span:before,
  .main-timeline .timeline:nth-child(2n) .circle span:after {
    right: -33px;
    left: auto;
    border-radius: 0 0 0 21px;
  }
  .main-timeline .timeline:nth-child(2n) .circle span:after {
    border-radius: 21px 0 0 0;
  }
  .main-timeline .timeline:nth-child(2n) .content {
    padding: 0 40px 0 0;
    margin-left: 0;
  }
  .main-timeline .timeline:nth-child(2n) .icon {
    right: -14px;
    left: auto;
  }
  .main-timeline .timeline:nth-child(2n) .icon:before,
  .main-timeline .timeline:nth-child(2n) .icon span:before,
  .main-timeline .timeline:nth-child(2n) .icon span:after {
    left: -15px;
    right: auto;
  }
  .main-timeline .timeline:nth-child(2n) .icon span:before {
    border-radius: 0 0 21px 0;
  }
  .main-timeline .timeline:nth-child(2n) .icon span:after {
    border-radius: 0 21px 0 0;
  }
  .main-timeline .timeline:nth-child(2),
  .main-timeline .timeline:nth-child(odd),
  .main-timeline .timeline:nth-child(even) {
    margin: 0;
  }
}
</style>
