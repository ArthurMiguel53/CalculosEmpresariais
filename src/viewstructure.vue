<template>
  <nome/>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import custosvue from "../src/components/custos.vue"
import nome from '../src/components/nome.vue';

    export default defineComponent({
    name: "view-structure",
    components: { nome }
})
</script>

<style scoped>

</style>
