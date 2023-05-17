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
      <div class="flex gap-2">
        <HotelCard
            v-for="(hotel, index) in data"
            :key="index"
            :name="hotel.card_name"
            :image="hotel.image"
            :date="hotel.start_date"
            :time="hotel.start_date"
            :price="hotel.price"
            :isSelected="selectedHotel === index"
            @click="selectHotel(index)"
            :class="selectedHotel === index ? 'border border-green-500' : ''"
            class="w-full px-4 mb-8 border border-1"
          />
      </div>
      <h1 class="font-semibold text-xl">Manzara Seçimi</h1>
      <div class="flex gap-2">
        <HotelCard
          v-for="(hotel, index) in data"
          :key="index"
          :name="hotel.card_name"
          :image="hotel.image"
          :date="hotel.start_date"
          :time="hotel.start_date"
          :price="hotel.price"
          :isSelected="selectedRoomType === index"
          @click="selectRoomType(index)"
          :class="selectedRoomType === index ? 'border border-green-500' : ''"
          class="w-full px-4 mb-8 border border-1"
        />
      </div>
    </div>
    <div class="p-6 rounded-lg border border-1 bg-stone-200 leading-8 flex justify-between">
      <router-link to="/" class="rounded-md bg-cyan-950 text-white font-semibold md:px-3 m md:text-lg text-sm">
        Geri
      </router-link>
      <router-link to="/" class="rounded-md bg-cyan-950 text-white font-semibold md:p-3 p-2 md:text-lg text-sm">
        Kaydet ve Devam Et
      </router-link>
    </div>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';
import axios from 'axios';
import HotelCard from './HotelCard.vue'



export default {
  name: 'Landspace',

  components: {
    HotelCard
  },

  data() {
    return {
      data: [],
      selectedHotel: null,
      selectedRoomType: null,

    }
  },

  methods: {
    selectRoomType(index) {
      this.selectedRoomType = index;
      console.log("güllerin gülü", this.selectedRoomType)
    },

    selectHotel(index) {
      this.selectedHotel = index;
      console.log("güllerin çiçe", this.selectedHotel)
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
      })
      .catch(error => {
        console.log(error);
      });

  }
};
</script>
<style scoped>
.selected {
  border-color: #48bb78;
  border: 2px;
}
</style>
  