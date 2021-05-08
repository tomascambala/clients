<template>
  <div id="app">
    <div id="space">
      HERE IS AMAZING CLIENTS_APP
      </div>
     <Clients/>
   
  </div>
</template>

<script>
import Clients from "./views/Clients.vue";

export default {
  name: "App",
  components: {
    Clients,
  },
};
</script>

<style>
#app {
  width: 90%;
  min-width: 770px;
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#space {
  height: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
