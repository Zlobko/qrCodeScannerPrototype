<!-- components/QRScanner.vue -->
<template>
  <div>
    <button @click="toggleScanner">
      {{ isScanning ? "Stop Scanner" : "Start Scanner" }}
    </button>
    <video v-show="isScanning" ref="scanner" playsinline :style="videoStyle"></video>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import QRScanner from 'qr-scanner';

const scanner = ref<HTMLVideoElement | null>(null);
const isScanning = ref(false);

const qrScannerRef = ref<QRScanner>();

const videoStyle = computed(() => {
  return {
    transform: 'scaleX(-1)', // Mirror the video element
    width: '100%', // Set the width to 100%
    height: '100%', // Set the height to 100%
    objectFit: 'cover', // Ensure the video fills the available space while maintaining its aspect ratio
  };
});

const emit = defineEmits(['update:qrCode', 'close-scanner']);

async function startScanner() {
  if (scanner.value) {
    qrScannerRef.value = new QRScanner(scanner.value, (result: string) => {
      emit('update:qrCode', result);
      emit('close-scanner');
      stopScanner();
    });
    await qrScannerRef.value.start();
  }
}

function stopScanner() {
  if (qrScannerRef.value) {
    isScanning.value = false;
    qrScannerRef.value.stop();
  }
}

function toggleScanner() {
  isScanning.value = !isScanning.value;
}

watch(isScanning, (newValue) => {
  if (newValue) {
    startScanner();
  } else {
    stopScanner();
  }
});
</script>