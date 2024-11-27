<template>
  <div class="background" @click.once="startOpening">

    <div v-if="isVertical">{{ config.msgInGame1 }}</div>

    <div v-if="!isGameStart">
      <div>{{ config.msgInGame2 }}</div>
      <div class="enter">{{ config.msgInGame3 }}</div>
    </div>

    <div v-else>
      <div class="title">{{ config.title }}</div>
      <a :href="config.manualLink" target="_blank">
        <SelectBtn class="btnCard" id="btn1" :inside="config.manual"></SelectBtn>
      </a>
      <SelectBtn class="btnCard" id="btn2" :inside="config.newgame" @click="newgame()"></SelectBtn>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

// import SelectBtn from '@/components/flame/GreenBtn.vue';
import SelectBtn from '@/components/flame/BlueBtn.vue';
import config from '@/config/commonConfig.ts';
//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()

//音楽管理
import { useAudioStore } from '@/stores/Audio';
const audioStore = useAudioStore()

const isGameStart = ref(false);
// const isVertical = ref(window.innerHeight > window.innerWidth);
const isVertical = ref(false);
const refWidth = ref(window.innerWidth);

//ロード時
onMounted(() => {
  //画面サイズをチェック
  window.addEventListener('resize', updateOrientation);
  updateOrientation(); // 初期チェック});
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateOrientation);
});

const updateOrientation = () => {
  refWidth.value = window.innerWidth; // リサイズ後の横幅を更新
  isVertical.value = window.innerHeight > window.innerWidth; // 縦長かどうかを判定
  console.log('isVertical.value', isVertical.value);
  console.log('refWidth.value', refWidth.value);
};

//イベント送信
function startOpening() {
  isGameStart.value = true;
  audioStore.playBgm(config.mscTitle) // ここで音楽を再生
}

//イベント送信
function newgame() {
  // enterFullscreen()
  statusStore.status = config.statusOpening
}

</script>
<style scoped>
.background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/img/back/title.jpg');
  /* background-image: url('/img/back/title.jpg'); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  text-align: center;
  font-family: "AveriaSerifLibre";
  font-size: 2vh;
  /* color: #FFF4AA; */
}


.title {
  font-family: "Fredericka The Great";
  font-size: 12vw;
  color: #FFF4AA;
  text-shadow: 2px 2px 10px rgba(242, 237, 213, 0.8);
  /* padding-top: 4%; */
}

.enter {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 4vw;
  transform: translateY(-50%) translateX(-50%);
}

.btnCard {
  width: 20vw;
}

#btn1 {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  animation: show 1.5s;
}

#btn2 {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  animation: show 1.7s;
}
</style>