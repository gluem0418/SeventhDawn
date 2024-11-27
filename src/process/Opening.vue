<template>
  <!-- <div class="background"> -->
  <div class="background" @click="endOpening">
    <div class="text" v-for="(line, index) in lines" :key="index" :style="{ animationDelay: `${index * 2}s` }"
      @animationend="handleAnimationEnd(index)">
      {{ line }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import config from '@/config/commonConfig.ts';
//状態管理
import { useStatusStore } from '@/stores/Status.ts';
const statusStore = useStatusStore()

//音声管理
import { useSpeechStore } from '@/stores/Speech.ts';
const speechStore = useSpeechStore();

//音楽管理
import { useAudioStore } from '@/stores/Audio';
const audioStore = useAudioStore()

// テキストインポート
import txtOpening from "/text/opening.txt?raw";
const lines = ref<string[]>([]);

//ロード時
onMounted(async() => {
  console.log('Opening_onMounted')
  audioStore.playBgm(config.mscOpening)
  // テキスト読込
  // 改行コードを統一
  let text = txtOpening.replace(/\r\n|\r/g, '\n');
  // 改行ごとに分割して配列に格納
  lines.value = text.split('\n');
  await speechStore.fetchVoices();
  lines.value.forEach((line) => {
    speechStore.speakText(line, 0.8);
  });

});

// アニメーション終了時の処理
function handleAnimationEnd(index: number) {
  console.log('handleAnimationEnd_index', index)
  if (index === lines.value.length - 1) {
    endOpening();
  }
}
//終了
function endOpening() {
  speechSynthesis.cancel();
  statusStore.status = config.statusTown
  statusStore.processTown = config.statusTown
}

</script>
<style scoped>
.background {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/img/back/opening.jpg');
  /* background-image: url('/img/back/opening.jpg'); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

.text {
  position: absolute;
  width: 100%;
  /* font-family: serif; */
  font-size: 2vw;
  color: #F2EDD5;
  /* color: #f2f2f2; */
  /* color: #DBCE75; */
  /* color: #FFF4AA; */
  text-align: center;
  bottom: 0;
  animation: moveUp 50s linear;
  opacity: 0;
}

@keyframes moveUp {
  0% {
    transform: translateY(0vh);
  }

  30% {
    transform: translateY(-30vh);
    opacity: 1;
  }

  70% {
    transform: translateY(-70vh);
    opacity: 1;
  }

  100% {
    transform: translateY(-100vh);
  }
}
</style>