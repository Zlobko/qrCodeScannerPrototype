<template>
    <div>
      <button @click="addDummyData">Add Dummy Data</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { addToDB, getAllFromDB } from '~/utils/db';
  
  async function addDummyData() {
    const dummyData = [
      { id: 'qr1', content: 'QR code 1 content' },
      { id: 'qr2', content: 'QR code 2 content' },
      { id: 'qr3', content: 'QR code 3 content' },
    ];
  
    for (const data of dummyData) {
      await addToDB(data); // Pass the entire data object instead of data.content
      alert(data);
    }
  
    // Fetch all data from IndexedDB
    const allData = await getAllFromDB();
    console.log('All Data:', allData);
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>