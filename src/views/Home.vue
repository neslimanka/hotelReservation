<template>
  <div>
    <ReservationForm @save-data="onSaveData" />
  </div>
</template>
  
<script>
import ReservationForm from './ReservationForm.vue';
  
export default {
  components: {
    ReservationForm
  },
  data() {
    return {
      reservationData: {}
    }
  },
  methods: {
    onSaveData(data) {
      // Verileri alıp, 'reservationData' adlı değişkene kaydediyoruz.
      this.reservationData = data;
  
      // Kaydedilen verileri konsola yazdırabilirsiniz.
      console.log('Kaydedilen veriler:', this.reservationData);
    }
  }
}
</script>
  