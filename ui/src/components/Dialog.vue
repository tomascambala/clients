<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title class="dialog"> {{ form._id ? "Edit" : "New" }} Client</md-dialog-title>
    <form action="#" @submit.prevent="onSubmit">

     <!-- <md-field md-inline>
      <label>Name</label>
      <md-input v-model="form.name" required></md-input>
    </md-field> -->

    <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('name')">
                <label for="name">First Name</label>
                <md-input name="name" id="name" v-model="client.name" />
                <span class="md-error" v-if="!$v.client.name.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.client.name.minlength">at least 3 letters</span>
              </md-field>
              </div>

     <md-field md-inline >
      <label>Phone</label>
      <md-input v-model="form.phone" ></md-input>
    </md-field>

     <md-field md-inline>
      <label>Email</label>
      <md-input v-model="form.email"></md-input>
    </md-field>

    <md-field>
        <label for="providers">Providers</label>
        <md-select v-model="form.providers" name="providers" id="providers" multiple>
          <md-option value="1">Provider 1</md-option>
          <div class="icons">
            <span style="paddingRight: 20px" class="material-icons">post_add</span>
            <span class="material-icons">delete</span>
          </div>
          <md-option value="2">Provider 2</md-option>
          <div class="icons">
            <span style="paddingRight: 20px" class="material-icons">post_add</span>
            <span class="material-icons">delete</span>
          </div>
          <md-option value="3">Provider 3</md-option>
          <div class="icons">
            <span style="paddingRight: 20px" class="material-icons">post_add</span>
            <span class="material-icons">delete</span>
          </div>
          <md-option value="4">Provider 4</md-option>
          <div class="icons">
            <span style="paddingRight: 20px" class="material-icons">post_add</span>
            <span class="material-icons">delete</span>
          </div>
          <md-option value="5">Provider 5</md-option>
          <div class="icons">
            <span style="paddingRight: 20px" class="material-icons">post_add</span>
            <span class="material-icons">delete</span>
          </div>
        </md-select>
      </md-field>
      
      <md-dialog-actions :class="form._id ? 'actions dlt' : 'actions'">
          <md-button  v-if="form._id"  @click.prevent="onDestroy(form._id);" class="md-accent">Delete</md-button>
          <div>
        <md-button class="md-primary"   @click="cancel()">Cancel</md-button>
        <md-button type="submit" class="md-primary">{{form._id ? "Save" : "Add"}} Client</md-button>
        </div>
      </md-dialog-actions>
        </form>
    </md-dialog>

    
    <md-button v-if="form._id" @click="showDialog = true"  class="md-primary">Edit</md-button>
    <md-button v-if="!form._id" @click="showDialog = true" class="md-dense md-raised md-primary">New Client</md-button>
  
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    // email,
    minLength,
    // maxLength
  } from 'vuelidate/lib/validators'
import { api } from "@/helpers/helpers.js";
  export default {
    name: 'Dialog',
    mixins: [validationMixin],
    props: {
    form: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: "",
          email: "",
          phone: "",
          providers: []
        };
      }
    }
  },
    data(){
      return {
      showDialog: false,
        client: this.form
      }
      
    },
     validations: {
      client: {
        name: {
          required,
          minLength: minLength(3)
        }
      }
    },
  methods: {
       getValidationClass (fieldName) {
        const field = this.$v.client[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
    onSubmit: async function() {
      console.log("sumbmitting")
  
      //  this.$v.$validate()

       this.$v.$touch()
        


         const form = Object.assign({}, this.form)
         const providers = this.form.providers;
         const providersForm  = [];
            for (const element of providers) {
            providersForm.push({"id": element})
          }
 this.$v.$touch()
      if (!this.$v.$invalid) {
         if(this.form._id) {
          form.providers = providersForm;
          return await api.updateClient(form); 
         } 

          
             
          
        
      await api.createClient(
         {
           name: this.form.name,
           email: this.form.email,
           phone: this.form.phone,
           providers: providersForm
         }
       );
         window.location.reload();
             }
  // window.location.reload();
  console.log("RELOADING")
return;

    },
    cancel(){
              window.location.reload();
             this.showDialog=false;
    },
   
     async onDestroy(id) {
       const sure = window.confirm('Are you sure?');
      if (!sure) return;
      this.showDialog=false;
      await api.deleteClient(id);
      window.location.reload();  
      return;
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
  }

  .dlt {
    justify-content: space-between;
  }

 
</style>