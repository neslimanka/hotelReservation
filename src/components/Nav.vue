<template>
  <div>
    <div class="flex flex-col bg-cyan-950">
      <div class="flex md:flex-row flex-col justify-between items-center m-6">
        <h1 class="flex text-white md:text-2xl text-base font-semibold md:mb-0 mb-3">Otel Rezervasyon Sistemi</h1>
        <router-link to="/" class="rounded-md bg-white text-black font-semibold md:p-3 p-2 md:text-lg text-sm">
          Yeni Rezervasyon Yap
        </router-link>
      </div>
    </div>
    <div class="container m-auto">
      <div class="flex flex-row bg-stone-200 rounded-lg my-12 justify-around">
        <div
          v-for="(item,index) in data" :key="index"
          class="flex flex-col items-center justify-center my-12">
          <div class="flex items-center justify-center rounded-full md:w-24 md:h-24 border border-1 border-grey-200">
            <img class="w-1/2" :src="item.image" alt="Calendar" />
          </div>
            <span class="text-base font-semibold text-center items-center justify-center">{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {image: "/public/assets/images/calendar.png", text: "Otel ve Tarih Seçimi"},
        {image: "/public/assets/images/bed.png", text: "Otel Tipi ve Manzara Seçimi"},
        {image: "/public/assets/images/credit-card.png", text: "Önizleme ve Ödeme İşlemleri"}
      ],
    }
  }
}
</script>