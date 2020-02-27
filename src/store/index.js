import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    speeches: [
      {
        id: 1,
        name: "Social Media",
        text: "Social media is a tool that is becoming quite popular these days because of its user-friendly features. Social media platforms like Facebook, Instagram, Twitter and more are giving people a chance to connect with each other across distances.",
        author: "Souvik Das",
        keywords: ["technology", "facebook","instagram"],
        date: 1587279683
      },
      {
        id: 2,
        name: "Greta Thunberg",
        text: "Greta Thunberg is a climate activist. She won TIME Person of the year.",
        author: "John Doe",
        keywords: ["climate", "award", "greta"],
        date: 1583299683
      }
    ],
    search: "",
    selectedSpeechId: null,
    createMode: false
  },
  mutations: {
    CHANGE_SELECTED_SPEECH: (state, payload) => {
      state.selectedSpeechId = payload;
    },
    DELETE_SELECTED_SPEECH: state => {
      //const indexFunc = element => element.id == state.selectedSpeechId;
      const index = state.speeches.findIndex(
        element => element.id == state.selectedSpeechId
      );
      state.speeches.splice(index, 1);
      if (state.speeches.length > 0) {
        state.selectedSpeechId = state.speeches[0].id;
      } else {
        state.selectedSpeechId = null;
      }
    },
    CREATE_SPEECH: (state, payload) => {
      let values = Object.values(state.speeches);
      let lastId = 1;
      if (values.length > 0) {
        lastId = values[values.length - 1].id + 1;
      }
      payload.id = lastId;
      state.speeches.push(payload);
      state.selectedSpeechId = payload.id;
      state.createMode = false;
    },
    SET_CREATE_MODE: (state, payload) => {
      state.createMode = payload;
    },
    SET_SEARCH: (state, payload) => {
      state.search = payload;
    },
    EDIT_SPEECH: (state, payload) => {
      const index = state.speeches.findIndex(
        element => element.id == state.selectedSpeechId
      );
      state.speeches.splice(index, 1, payload);
    }
  },
  actions: {},
  modules: {}
});
