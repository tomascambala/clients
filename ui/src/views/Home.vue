<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <NewClient />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NewClient from "@/components/NewClient.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    NewClient

  },
};
</script>
