<template>

  <div>
    List of clients
    <md-table v-model="users" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Clients</h1>
        <md-button to="/components/newClient" class="md-dense md-raised md-primary">New Client</md-button>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Phone" md-sort-by="phone">{{ item.phone }}</md-table-cell>
        <md-table-cell md-label="Providers" md-sort-by="providers">{{ item.providers }}</md-table-cell>
        <md-table-cell><md-button to="/edit" class="md-primary">Edit</md-button></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
  export default {
    name: 'TableSort',
    data: () => ({
      users: [
        {
         
          name: 'Shawna Dubbin',
          email: 'sdubbin0@geocities.com',
          phone: 'Male',
          providers: 'Assistant Media Planner'
        },
        {
         
          name: 'Odette Demageard',
          email: 'odemageard1@spotify.com',
          phone: 'Female',
          providers: 'Account Coordinator'
        },
        {
        
          name: 'Lonnie Izkovitz',
          email: 'lizkovitz3@youtu.be',
          phone: 'Female',
          providers: 'Operator'
        },
        {
         
          name: 'Thatcher Stave',
          email: 'tstave4@reference.com',
          phone: 'Male',
          providers: 'Software Test Engineer III'
        },
        {
         
          name: 'Clarinda Marieton',
          email: 'cmarietonh@theatlantic.com',
          phone: 'Female',
          providers: 'Paralegal'
        }
      ]
    })
  }
</script>