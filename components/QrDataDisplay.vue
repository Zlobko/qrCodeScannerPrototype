<template>
  <div>
    <h2>QR Code Data</h2>
    <p v-if="qrData">{{ qrData.content }}</p>
    <p v-else>Loading...</p>
    <div>Qr code:{{ String(qrCode) }}</div>
    <button @click="onClickHandler" >bla</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { getAllFromDB } from '~/utils/db';

const props = defineProps({
  qrCode: String,
});

let qrData =ref(null);

const test = "qr1";

watchEffect(async () => {
  if (props.qrCode) {
    const data = await getAllFromDB();
    qrData.value = data.find((item) => item.id === props.qrCode);
  } else {
    qrData.value = null;
  }
});

const onClickHandler = async() =>{
  const data = await getAllFromDB();
  qrData.value = data.find((item) => item.id === test);
  console.log(qrData)
 
}

</script>

<style scoped>
/* Add your styles here */
</style>