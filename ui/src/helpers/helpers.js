import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});

const vm = new Vue();
const url = 'http://localhost:3000/clients/';

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
  });

export const api = {
  getClient: handleError(async id => {
    const res = await axios.get(url + id);
    return res.data;
  }),
  getClients: handleError(async () => {
    const res = await axios.get(url);
    return res.data;
  }),
  deleteClient: handleError(async id => {
    const res = await axios.delete(url + id);
    return res.data;
  }),
  createClient: handleError(async payload => {
    const res = await axios.post(url, payload);
    return res.data;
  }),
  updateClient: handleError(async payload => {
    const res = await axios.put(url + payload._id, payload);
    return res.data;
  })
};
