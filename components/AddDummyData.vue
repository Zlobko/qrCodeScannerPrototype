<template>
    <div>
      <button @click="addDummyData">Add Dummy Data</button>
      <button @click="lookAtDummyData">Console log idexedDB</button>
      <button @click="clearIndexedDBData">Clear IndexedDB Data</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { addToDB, getAllFromDB,clearDB  } from '~/utils/db';
  
  // Add this function to register the service worker
  async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/sw.js');
        console.log('Service worker registered successfully');
      } catch (e) {
        console.error('Service worker registration failed:', e);
      }
    }
  }
  
  registerServiceWorker();
  
  async function addDummyData() {
    try {
      const response = await fetch('https://6443d57990738aa7c078a5c0.mockapi.io/api/data/objects');
      const data = await response.json();
      console.log('Fetched data:', data); // Log the fetched data

  
      for (const item of data) {
        await addToDB(item);
      }
  
      const allData = await getAllFromDB();
      console.log('All Data:', allData);
    } catch (error) {
        const allData = await getAllFromDB();
      console.error('Failed to fetch data from the API:', error);
      console.log(allData)
    }
  }
  async function clearIndexedDBData() {
  try {
    await clearDB();
    console.log('IndexedDB data cleared');
  } catch (error) {
    console.error('Failed to clear IndexedDB data:', error);
  }
}
  async function lookAtDummyData() {
    const allData = await getAllFromDB();
    console.log('All Data:', allData);
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>