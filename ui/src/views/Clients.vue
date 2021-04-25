<template>

  <div>
    List of clients
    <md-table v-model="clients" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Clients</h1>
        <NewClient />
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <!-- <md-table-cell md-label="Phone" md-sort-by="phone">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Providers" md-sort-by="providers">{{ item.providers }}</md-table-cell> -->
        <md-table-cell><md-button to="/edit" class="md-primary">Edit</md-button></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>

import NewClient from "@/components/NewClient.vue";
import { api } from "@/helpers/helpers.js";
  export default {
    name: 'TableSort',
    components: {
      NewClient
    },
    data() {
      return {
        clients: []
      }
    },
  
      async mounted() {
      this.clients = await api.getClients();
      console.log("clients", this.clients)
  

    }
   
  }
</script>