<template>
    <div>
        <input v-model="qrCodeValue" type="text">
      <button @click="generateQRCode">Generate QR Code</button>
      <div v-if="generatedQRCode">
        <h2>Generated QR Code:</h2>
        <img :src="generatedQRCode" alt="Generated QR Code" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import QRCode from 'qrcode'
  
  const generatedQRCode = ref<string | null>(null);
  const qrCodeValue = ref<string | null>(null);

  async function generateQRCode() {
    const data = '1';
    generatedQRCode.value = await QRCode.toDataURL(qrCodeValue.value);
  }
  </script>
  
  <style>
  button {
    margin-bottom: 1rem;
  }
  </style>