<template>

  <div>
    List of clients
    <md-table v-model="clients" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Clients</h1>
        <Dialog />
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Phone" md-sort-by="phone">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Providers">{{ item.providers.map(e => "Provider" + e).join() }}</md-table-cell>
        <md-table-cell>
          <!-- <md-button to="/edit" class="md-primary">Edit</md-button> -->
           <Dialog :form="item" />
          </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>

import Dialog from "@/components/Dialog.vue";
import { api } from "@/helpers/helpers.js";
  export default {
    name: 'TableSort',
    components: {
      Dialog
    },
    data: () => {
      return {
        clients: []
      }
    },
      async mounted() {
      var clients = await api.getClients();
      // const item = clients.map(item => !item.providers[0] ? item.providers[0] : item.providers.map(e => "Provider" + e.id).join() )
      clients.map(e => e.providers = e.providers.map(e => String(e.id)))
      this.clients = clients;
      console.log("clients", this.clients);

    },
  }
</script>