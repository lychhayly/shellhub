import Vue from 'vue';

export default {
  namespaced: true,

  state: {
    terminal: '',
    addDevice: false,
    snackbarError: false,
    snackbarSuccess: false,
    SnackbarMessageAndContentType: { typeMessage: '', typeContent: '' },
  },

  getters: {
    terminal: (state) => state.terminal,
    addDevice: (state) => state.addDevice,
    snackbarSuccess: (state) => state.snackbarSuccess,
    snackbarError: (state) => state.snackbarError,
    SnackbarMessageAndContentType: (state) => state.SnackbarMessageAndContentType,
  },

  mutations: {
    setTerminal: (state, data) => {
      Vue.set(state, 'terminal', data);
    },

    setAddDevice: (state, data) => {
      Vue.set(state, 'addDevice', data);
    },

    setSnackbarSuccess: (state, data) => {
      Vue.set(state, 'snackbarSuccess', data);
    },

    setSnackbarError: (state, data) => {
      Vue.set(state, 'SnackbarMessageAndContentType', { typeMessage: data.typeMessage, typeContent: data.typeContent });
      Vue.set(state, 'snackbarError', true);
    },

    unsetSnackbarError: (state) => {
      Vue.set(state, 'snackbarError', false);
    },
  },

  actions: {
    toggleTerminal: (context, value) => {
      context.commit('setTerminal', value);
    },

    showAddDevice: (context, value) => {
      context.commit('setAddDevice', value);
    },

    showSnackbarSuccess: (context, value) => {
      context.commit('setSnackbarSuccess', value);
    },

    showSnackbarError: (context, value) => {
      context.commit('setSnackbarError', value);
    },

    unsetShowStatusSnackbarError: (context) => {
      context.commit('unsetSnackbarError');
    },
  },
};
