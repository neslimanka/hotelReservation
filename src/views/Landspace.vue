<template>
  <div class="container m-auto">
    <div class="p-6 rounded-lg border border-1 bg-stone-200 leading-8">
      <h1 class="font-semibold text-2xl">Otel İsmi</h1>
      <span class="font-semibold">Giriş Tarihi: <b class="font-normal">{{formData.girisTarihi}} - </b></span>
      <span class="font-semibold">Gidiş Tarihi: <b class="font-normal">{{formData.gidisTarihi}} - </b></span>
      <span class="font-semibold">Yetişkin: <b class="font-normal">{{formData.yetiskinSayisi}} - </b></span>
      <span class="font-semibold">Çocuk: <b class="font-normal">{{formData.cocukSayisi}} </b></span>
    </div>
    <div class="py-6">
      <h1 class="font-semibold text-xl">Oda Tipi Seçimi</h1>
      <button @click="fetchAPIData">TıkTıkTık</button>
      <div 
        class="flex flex-row "
        v-for="item in data"
        :key="item.hotel_id"
      >
        <div class="flex flex-col w-1/3">
          <span>Standart</span>
          <img class="w-1/4" :src="item.image"/>
        </div>
        
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';
import axios from 'axios';



export default {
  name: 'Landspace',

  data() {
    return {
      data: []
    }
  },

  methods: {
    fetchAPIData() {
      console.log(this.data , "nesloş")
    }
  },
  computed: {
    ...mapState({
      formData: 'formData'
    }),
  },
  mounted() {
    axios.get('../../public/hotel.json')
      .then(response => {
        this.data = response.data;
        console.log(this.data , "data")
        console.log(response , "response")
      })
      .catch(error => {
        console.log(error);
      });

  }
};
</script>
  