<template>
  <div class="modal">
    <div class="confirmation">
      <div class="message">{{ message }}</div>
      <YesBtn class="YesBtn" :inside="config.textYes" @click="emitResponse(config.textYes)"></YesBtn>
      <NoBtn class="NoBtn" :inside="config.textNo" @click="emitResponse(config.textNo)"></NoBtn>
    </div>
  </div>
</template>
  
<script setup lang="ts">

import YesBtn from '@/components/flame/BlueBtn.vue';
import NoBtn from '@/components/flame/RedBtn.vue';
import config from '@/config/commonConfig.ts';

const props = defineProps({
  message: { type: String },
});

const emitResponse = (response: string) => {
  console.log('confirmationResponse')
  emit('confirmationResponse', response);
};

const emit = defineEmits(['confirmationResponse']);

</script>
<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.confirmation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  /* background: #624CAB80; */
  background: rgba(59, 65, 60, 0.8);
  background-image: url('/img/flame/flame0322.png');
  background-size: 100% 100%;
  color: #FFF4AA;
  font-size: 4vh;
  height: 40vh;
  width: 40vw;
  animation: show 0.5s ease-in-out;
}

.message {
  padding: 6vh 3vw;
  text-align: center;
}

.YesBtn {
  position: absolute;
  bottom: 5vh;
  left: 6vw;
}
.NoBtn {
  position: absolute;
  bottom: 5vh;
  right: 6vw; 
}
</style>