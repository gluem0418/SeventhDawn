<template>
  <div class="Credit" @click="emit('close')">
    <div class="CreditUI">

      <div class="title">CREDIT</div>

      <div class="flexBox">
        <div class="subTitle">IMAGE BY</div>
        <ul class="item">
          <li>Freepik</li>
          <li>gluem</li>
        </ul>
      </div>

      <div class="flexBox">
        <div class="subTitle">MUSIC BY</div>
        <ul class="item">
          <li>魔王魂</li>
          <li>まんぼう二等兵</li>
          <li>ユーフルカ</li>
        </ul>
      </div>

      <div class="flexBox">
        <div class="subTitle">CREATED BY</div>
        <div class="item">gluem</div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

//画面クローズ
const emit = defineEmits(["close"])

</script>

<style scoped>
.Credit {
  position: fixed;
  inset:0;
  width: 100vw;
  height: 100vh;
  color: #F2EDD5;
  font-size: 2.8vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.CreditUI {
  background: rgba(0, 0, 0, 0.8);
  background-image: url('/img/flame/flame130203.png');
  background-size: 100% 100%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  height: 65vh;
  width: 32vw;
  padding: 6vh 5vw;
  text-align:center;
}

.title {
  font-size:4.5vh;
}
.flexBox {
  display:flex;
  align-items:first baseline;
  text-align:left;
  margin:4vh 0;
}
.subTitle {
  font-size:2vh;
  flex: 1;
}

.item {
  list-style:none;
  flex: 1;
  line-height:1.8;
  color: #FFF4AA;
}
</style>