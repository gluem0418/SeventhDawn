<template>
  <div class="btnFlame">{{ inside }}</div>
</template>

<script setup lang="ts">

const props = defineProps({
  inside: { type: String },
});

</script>
<style scoped>
.btnFlame {
  background-image: url('/img/button/greenBtn1.png');
  background-size: 100% 100%;
  padding: 3vh 4vw;
  color: #F2EDD5;
  /* color: #DBCE75; */
  /* color: #260101; */
  font-size: 2vw;
  font-family: "AveriaSerifLibre";
}

.btnFlame:hover {
  background-image: url('/img/button/greenBtn2.png');
}

.btnFlame:active {
  animation: hide 0.5s;
}

</style>