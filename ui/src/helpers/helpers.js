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

const url = 'http://localhost:3000/clients/';


export const api = {
  // getClient: async (id) => {
  //   const res = await axios.get(url + id);
  //   return res.data;
  // },
  getClients: async () => {
    const res = await axios.get(url);
    return res.data;
  },
  deleteClient: async (id) => {
    const res = await axios.delete(url + id);
    return res.data;
  },
  createClient: async (payload) => {
    const res = await axios.post(url, payload);
    return res.data;
  },
  updateClient: async (payload) => {
    const res = await axios.put(url + payload._id, payload);
    return res.data;
  }
};
