<template>
  <div class="container">
    <h1>QR Code Scanner</h1>
    <div class="component-wrapper">
      <QRScanner @update:qrCode="updateQrCode" />
      <QrDataDisplay :qrCode="qrCode" />
    </div>
    <div class="component-wrapper">
      <QRCodeGenerator />
      <AddDummyData />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import QRScanner from '~/components/QRScanner.vue';
import QrDataDisplay from '~/components/QrDataDisplay.vue';
import QRCodeGenerator from '~/components/QRCodeGenerator.vue';
import AddDummyData from '~/components/AddDummyData.vue';

const qrCode = ref<string | null>(null);

function updateQrCode(value: string) {
  qrCode.value = value;
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  background-color: #f3f3f3;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 40px;
  color: #333;
}

.component-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.component-wrapper {
  flex-basis: calc(50% - 15px);
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

QRScanner,
QrDataDisplay,
QRCodeGenerator,
AddDummyData {
  flex: 1;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 100%;
}
</style>