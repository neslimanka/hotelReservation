<template>
   <div>
    <p>girisTarihi: {{ this.formData.gidisTarihi }}</p>
    <p>yetiskinSayisi: {{ this.formData.yetiskinSayisi }}</p>
    <p>cocukSayisi: {{ this.formData.cocukSayisi }}</p>
    <p>selectedValue: {{ this.formData.selectedValue }}</p>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';

export default {
  name: 'Landspace',

  computed: {
    ...mapState({
      formData: 'formData'
    }),
  },
};
</script>
  