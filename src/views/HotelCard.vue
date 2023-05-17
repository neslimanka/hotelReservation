<template>
    <div class="bg-white rounded-lg hover:shadow-md drop-shadow-xl p-4">
      <div class="font-bold text-lg">{{ name }}</div>
      <img :src="image" alt="Hotel Image" class="mt-2">
      <div class="mt-4 flex justify-between">
        <div class="text-sm">
          <div>{{ date }}</div>
          <div>{{ time }}</div>
        </div>
        <div class="text-lg font-bold">{{ price }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      image: String,
      date: String,
      time: String,
      price: String
    }
  };
  </script>
  