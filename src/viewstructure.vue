<template>
  <nome/>
  <info/>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import custosvue from "../src/components/custos.vue"
    import nome from '../src/components/nome.vue';
    import info from "@/components/info.vue"

    export default defineComponent({
    name: "view-structure",
    components: { nome, info }
})
</script>

<style scoped>

</style>
