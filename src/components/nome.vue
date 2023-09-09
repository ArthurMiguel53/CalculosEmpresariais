<template>
    <div id="main">
        <div id="company_name">
          <input v-model="company_named" type="companyNameInput" placeholder="digite o nome da empresa aqui" v-focus>
          <button @click="confirm_name()">confirmar</button>
        </div>
        <div id="variables">
          <h1 id="company_named">Empresa: {{ company_named_confirmed }}</h1>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'custos',
  
    data(){
      return{
        company_named: "",
        company_named_confirmed: ""
      }
    },
  
    methods: {
      confirm_name() {
        this.company_named_confirmed = this.company_named
        this.company_named = ""
      }
    }
  });
  </script>
  
  <style scoped>
    #main{
        margin: auto;
        background: rgba(0, 110, 255, 0.6);
        border-radius: 20px;
        width: 90%;
        height: 100%;
    }

    #company_name{
        padding: 5%;
        display: flex;
        flex-direction: column;
        height: 10%;
        width: 60%;
        margin: auto
    }
  
    #variables{
        margin: auto;
        height: 10%;
        width: 60%;
    }

    button{
        width: 90%;
    }

    input{
        width: 87%;
    }
  </style>
  