<template>
  <div class="container m-auto">
    <div class="p-6 rounded-lg border border-1">
      <div class="relative my-6">
        <input
          type="text"
          class="w-full appearance-none bg-gray-100 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="selectedOption"
          @click="showOptions = true"
        />
        <span class="absolute inset-y-0 right-0 flex items-center pr-2">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
        </span>
        <div
          class="absolute z-10 bg-white rounded mt-1 py-1 w-full shadow"
          v-if="showOptions"
          @click="showOptions = false"
        >
          <div
            class="py-1 px-3 hover:bg-gray-100 cursor-pointer"
            v-for="(option, index) in options"    
            :key="index"
            @click="selectOption(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <div>
          <label class="block mb-1 font-bold" >Giriş Tarihi:</label>
          <input type="date" class="border py-1 px-2 w-full" v-model="girisTarihi">
        </div>
        <div>
          <label class="block mb-1 font-bold">Gidiş Tarihi:</label>
          <input type="date" class="border py-1 px-2 w-full" v-model="gidisTarihi">
        </div>
        <div>
          <label class="block mb-1 font-bold">Yetişkin Sayısı:</label>
          <input type="number" class="border py-1 px-2 w-full" v-model="yetiskinSayisi">
        </div>
        <div>
          <label class="block mb-1 font-bold">Çocuk Sayısı:</label>
          <input type="number" class="border py-1 px-2 w-full" v-model="cocukSayisi">
        </div>
        <div class="col-span-4 flex justify-end">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="saveData">Kaydet ve Devam Et</button>
        </div>
    </div>
  </div>
</div>
</template>
  
<script>

    export default {
        data() {
            return {
                girisTarihi: '',
                gidisTarihi: '',
                yetiskinSayisi: 0,
                cocukSayisi: 0,
                options: ['Option 1', 'Option 2', 'Option 3'],
                selectedOption: 'Rezervasyon yapmak istediğiniz oteli seçiniz.',
                showOptions: false,
                selectedValue: ''
            }
        },
        methods: {
            saveData() {
            // Verileri bir objede topluyoruz.
                const data = {
                    girisTarihi: this.girisTarihi,
                    gidisTarihi: this.gidisTarihi,
                    yetiskinSayisi: this.yetiskinSayisi,
                    cocukSayisi: this.cocukSayisi,
                    selectedValue : this.selectedOption
                };
                this.$router.push('/landspace');
        
                // 'save-data' adlı bir emit olayıyla verileri diğer bileşene aktarıyoruz.
                this.$emit('save-data', data);
            },

            selectOption(option) {
                this.selectedOption = option;
                this.showOptions = false;
            },
        },
        mounted() {
            this.selectedOption = 'Rezervasyon yapmak istediğiniz oteli seçiniz.'
        },
    }
</script>
  