<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title class="dialog">New Client</md-dialog-title>
    
     <md-field md-inline>
      <label>Name</label>
      <md-input v-model="name"></md-input>
    </md-field>

     <md-field md-inline>
      <label>Phone:</label>
      <md-input v-model="phone"></md-input>
    </md-field>

     <md-field md-inline>
      <label>Email</label>
      <md-input v-model="email"></md-input>
    </md-field>

    <md-field>
        <label for="movies">Providers</label>
        <md-select v-model="selectedMovies" name="movies" id="movies" multiple>
          <md-option class="doom" value="Provider 1">Provider 1</md-option>
          <div class="icons">
            <span style="paddingRight: 20px" class="material-icons">post_add</span>
            <span class="material-icons">delete</span>
          </div>
          <md-option value="Provider 2">Provider 2</md-option>
          <div class="icons">
            <span style="paddingRight: 20px" class="material-icons">post_add</span>
            <span class="material-icons">delete</span>
          </div>
          <md-option value="Provider 3">Provider 3</md-option>
          <div class="icons">
            <span style="paddingRight: 20px" class="material-icons">post_add</span>
            <span class="material-icons">delete</span>
          </div>
          <md-option value="Provider 4">Provider 4</md-option>
          <div class="icons">
            <span style="paddingRight: 20px" class="material-icons">post_add</span>
            <span class="material-icons">delete</span>
          </div>
          <md-option value="Provider 5">Provider 5</md-option>
          <div class="icons">
            <span style="paddingRight: 20px" class="material-icons">post_add</span>
            <span class="material-icons">delete</span>
          </div>
        </md-select>
      </md-field>
      
      <md-dialog-actions class="actions">
        <md-button class="md-primary" @click="showDialog = false">Cancel</md-button>
        <md-button class="md-primary" @click="showDialog = false">Add Client</md-button>
      </md-dialog-actions>
    </md-dialog>

    <!-- <md-button class="md-primary md-raised" @click="showDialog = true">Show Dialog</md-button> -->
    <md-button @click="showDialog = true" class="md-dense md-raised md-primary">New Client</md-button>
  </div>
</template>

<script>
  export default {
    name: 'NewClient',
    data: () => ({
      showDialog: false
    })
  }
</script>

<style lang="scss" scoped>
  .md-dialog .md-dialog-container {
    max-width: 768px;
  }
  .md-field {
    width: 80%;
    margin: auto;
  }
  .dialog{
    min-width: 700px;
    border-bottom: 0.5px solid black;
    padding-bottom: 20px;
  }
  .icons {
    position: relative;
    bottom: 38px;
    left: 190px;
    height: 0px;
    width: 0px;
  }
  .actions {
    border-top: 0.5px solid black;
    margin-top: 100px;
  }
 
</style>