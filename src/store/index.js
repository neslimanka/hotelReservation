import { createStore } from "vuex" 

const store = createStore({
    state: {
        formData: {
            girisTarihi: '',
            gidisTarihi: '',
            yetiskinSayisi: 0,
            cocukSayisi: 0,
        }
    },

    mutations: {
        SET_FORM_DATA(state, data) {
            state.formData = data;
        }
    },
    actions: {
        saveFormData({ commit }, data) {
            commit('SET_FORM_DATA', data);
          
        }
    },
    getters: {
        formData: state => state.formData,
    }
})

export default store

