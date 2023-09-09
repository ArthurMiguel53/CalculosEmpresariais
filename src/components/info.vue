<template>
  <div id="principal">
    <div id="infoUser">
      <label id="marcadores">
        <input type="radio" name="op1" id="op1" @click="desmarcaroutros(0), addToNecessaryMaterialsVuvuzela()"> {{ ProductNameList[0] }}
        <input type="radio" name="op2" id="op2" @click="desmarcaroutros(1)"> {{ ProductNameList[1] }}
        <input type="radio" name="op3" id="op3" @click="desmarcaroutros(2)"> {{ ProductNameList[2] }}
      </label>
      <h1 class="infoUserItem">nome do produto: <br><span id="ProductName">{{ ProductNameList[ProductChosed] }}</span></h1>
      <h3 class="infoUserItem">tempo de produção: <span id="producaoTempo">{{ ProduceInitialQuantity }} {{ ProduceInitialQuantityTime }}</span></h3>
      <h3 class="infoUserItem">materiais necessários para 1 produção:</h3>
      <ul id="necessaryMaterials">
        <li>bah</li>
      </ul>
      <p class="infoUserItem"><span id=""></span></p>
      <p class="infoUserItem"><span id=""></span></p>
      <p class="infoUserItem"><span id=""></span></p>
      <p class="infoUserItem"><span id=""></span></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'info',
  data() {
    return{
      ProduceInitialQuantity: "",
      ProduceInitialQuantityTime: "",
      AmountProduceOne: 0,
      ProductNameList: ["vuvuzela", "limonada", "marcador de página", "nenhum produto selecionado"],
      ProductChosed: 3,
      Materials: [
        "plastico reciclável",
        "Molde",
        "Termômetro",
        "Forja de aquecimento",
        "Caixa de papelão",
        "Adesivo empresa",
        "Tinta amarela",
        "Tinta verde",
        "Tinta preta",
        "Tinta branca",
        "Cortador industrial automático",
        "Caixa de papelão",
        "Adesivo com logo marca da empresa",
        "Limões",
        "Água",
        "Açúcar",
        "Embalagem pronta de 1L",
        "Funcionário",
        "Caixa de papelão"
      ],
      MeasurementUnity: [
        "unidade",
        "ml",
        "L",
        "gramas",
      ],
      ProductionTime: [
        "a cada 20 segundos",
        "a cada 25 segundos",
        "a cada 20 segundos"
      ],

      /*quantia de opções */
      Options: [
        document.getElementById("op1") as HTMLInputElement,
        document.getElementById("op2") as HTMLInputElement,
        document.getElementById("op3") as HTMLInputElement
      ]
      
    }
  },
  
  mounted () {
    this.Options = [
      document.getElementById("op1") as HTMLInputElement,
      document.getElementById("op2") as HTMLInputElement,
      document.getElementById("op3") as HTMLInputElement
    ]
  },
  
  methods: {
    desmarcaroutros(RadioPointActived: number){
      for (let CheckingRadioPointActived = 0; CheckingRadioPointActived < this.Options.length; 
            CheckingRadioPointActived++) {
        if (CheckingRadioPointActived === RadioPointActived) {
          this.Options[CheckingRadioPointActived].checked = true;
          this.ProduceInitialQuantity = "1";
          this.ProduceInitialQuantityTime = this.ProductionTime[CheckingRadioPointActived]
        } else {
          this.Options[CheckingRadioPointActived].checked = false;
        };
      }
      this.ProductChosed = RadioPointActived;
    },

    addToNecessaryMaterialsVuvuzela(){
      const ListNecessaryMaterials = document.getElementById("necessaryMaterials") as HTMLUListElement
      for (let RemovingElements = 0; RemovingElements < ListNecessaryMaterials.children.length; RemovingElements++) {
        let ElementToBeRemoved = ListNecessaryMaterials.children[RemovingElements]
        ListNecessaryMaterials.removeChild(ElementToBeRemoved)
      }

      //Products necessary to vuvuzela
        const ProductsVuvuzela = [
        this.Materials[0] + " -> 200 " + this.MeasurementUnity[3],
        this.Materials[1] + " -> 1 " + this.MeasurementUnity[0],
        this.Materials[3] + " -> 1 " + this.MeasurementUnity[0],
        this.Materials[17] + " -> 1 " + this.MeasurementUnity[0],
        this.Materials[18] + " -> 1 " + this.MeasurementUnity[0],
        this.Materials[5] + " -> 1 " + this.MeasurementUnity[0],
        this.Materials[6] + " -> 200 " + this.MeasurementUnity[1],
        this.Materials[7] + " -> 100 " + this.MeasurementUnity[1],
      ]
      console.log(ProductsVuvuzela)

      for (let i = 0; i < ProductsVuvuzela.length; i ++) {
        let childToBeAdded = document.createElement("li")
        childToBeAdded.textContent = ProductsVuvuzela[i]
        ListNecessaryMaterials.appendChild(childToBeAdded)
      }
    },

    AddToNecessaryMaterialsMarcador() {
    }
  }
});
</script>

<style scoped>

</style>
