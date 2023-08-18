<template>
  <div id="principal">
    <div id="infoUser">
      <label>
        <input type="radio" name="op1" id="op1" @click="desmarcaroutros(0), addToNecessaryMaterialsVuvuzela()"> {{ productNameList[0] }}
        <input type="radio" name="op2" id="op2" @click="desmarcaroutros(1)"> {{ productNameList[1] }}
        <input type="radio" name="op3" id="op3" @click="desmarcaroutros(2)"> {{ productNameList[2] }}
      </label>
      <h1 class="infoUserItem">nome do produto: <br><span id="productName">{{ productNameList[productChosed] }}</span></h1>
      <h3 class="infoUserItem">produção: <span id="producaoTempo">{{ produceInit }} {{ produceInitTime }}</span></h3>
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
      produceInit: "",
      produceInitTime: "",
      amountProduceOne: 0,
      productNameList: ["vuvuzela", "limonada", "marcador de página", "nenhum selecionado"],
      productChosed: 3,
      materials: [
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
      measurementUnity: [
        "unidade",
        "ml",
        "L",
        "gramas",
      ]

    }
  },
  methods: {
    desmarcaroutros(selecionado: number){
      const options = [
        document.getElementById("op1") as HTMLInputElement,
        document.getElementById("op2") as HTMLInputElement,
        document.getElementById("op3") as HTMLInputElement
      ];

      const ProductionTime =[
        "a cada 20 segundos",
        "a cada 25 segundos",
        "a cada 20 segundos"
      ]

      for (let i = 0; i < options.length; i++) {
        if (i === selecionado) {
          options[i].checked = true;
          this.produceInit = "1";
          this.produceInitTime = ProductionTime[i]
        } else {
          options[i].checked = false;
        };
      }
      this.productChosed = selecionado;
    },

    addToNecessaryMaterialsVuvuzela(){
      const father = document.getElementById("necessaryMaterials") as HTMLUListElement

      for (let i = 0; i < father.children.length; i++) {
        let elementToBeRemoved = father.children[i]
        father.removeChild(elementToBeRemoved)
      }

      //products necessary to vuvuzela
        const productsVuvuzela = [
        this.materials[0] + " -> 200 " + this.measurementUnity[3],
        this.materials[1] + " -> 1 " + this.measurementUnity[0],
        this.materials[3] + " -> 1 " + this.measurementUnity[0],
        this.materials[17] + " -> 1 " + this.measurementUnity[0],
        this.materials[18] + " -> 1 " + this.measurementUnity[0],
        this.materials[5] + " -> 1 " + this.measurementUnity[0],
        this.materials[6] + " -> 200 " + this.measurementUnity[1],
        this.materials[7] + " -> 100 " + this.measurementUnity[1],
      ]
      console.log(productsVuvuzela)

      for (let i = 0; i < productsVuvuzela.length; i ++) {
        let childToBeAdded = document.createElement("li")
        childToBeAdded.textContent = productsVuvuzela[i]
        father.appendChild(childToBeAdded)
      }
    }
  }
});
</script>

<style scoped>

</style>
