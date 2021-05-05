<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title class="dialog"> {{ form._id ? "Edit" : "New" }} Client</md-dialog-title>
    <form action="#" @submit.prevent="onSubmit">
     <md-field md-inline>
      <label>Name</label>
      <md-input v-model="form.name"></md-input>
    </md-field>

     <md-field md-inline>
      <label>Phone</label>
      <md-input v-model="form.phone"></md-input>
    </md-field>

     <md-field md-inline>
      <label>Email{{ form }}</label>
      <md-input v-model="form.email"></md-input>
    </md-field>

    <md-field>
        <label for="providers">Providers</label>
        <md-select name="providers" id="providers" multiple>
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
      
      <md-dialog-actions :class="form._id ? 'actions dlt' : 'actions'">
          <md-button  v-if="form._id"  @click.prevent="onDestroy(form._id);" class="md-accent">Delete</md-button>
          <div>
        <md-button class="md-primary" @click="showDialog = false">Cancel</md-button>
        <md-button type="submit" class="md-primary" @click="showDialog = false; ">{{form._id ? "Save" : "Add"}} Client</md-button>
        </div>
      </md-dialog-actions>
        </form>
    </md-dialog>

    
    <md-button v-if="form._id" @click="showDialog = true"  class="md-primary">Edit</md-button>
    <md-button v-if="!form._id" @click="showDialog = true" class="md-dense md-raised md-primary">New Client</md-button>
  
  </div>
</template>

<script>
import { api } from "@/helpers/helpers.js";
  export default {
    name: 'NewClient',
    props: {
    form: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: "",
          email: "",
          phone: "",
        };
      }
    }
  },
    data: () => ({
      showDialog: false,
        forms:{
        name: null,
        phone: null,
        email: null
      }
     
    }),
  methods: {
    onSubmit: async function() {
      console.log("sumbmitting")

      console.log(this.form._id)
         

         if(this.form._id) {
           console.log("Edit")
           return await api.updateClient(this.form);
           
         } 

         return "submit is finished"
      // if(!this.form.name){
       
      //     const create = await api.createClient(
      //    {
      //      name: this.form.name,
      //      email: this.form.email,
      //      phone: this.form.phone
      //    }
      //  );
      // return create;
      // } 
      //  console.log("EDIT CLIENT")
      //  this.$emit('createOrUpdate', this.form);
    },
     async onDestroy(id) {
       const sure = window.confirm('Are you sure?');
      if (!sure) return;
      this.showDialog=false;
      await api.deleteClient(id);
      // this.flash('Word deleted sucessfully!', 'success');
      // const newWords = this.words.filter(word => word._form !== id);
      // this.words = newWords;alet
      // alert("was delete")
    }

   }
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
    border-bottom: 0.5px solform grey;
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
    border-top: 0.5px solform grey;
    margin-top: 100px;
    // justify-content: space-between;
  }

  .dlt {
    justify-content: space-between;
  }

 
</style>