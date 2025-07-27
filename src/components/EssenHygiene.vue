<template>
    <v-container>
Komponente Essen / Hygiene / Schlafen
hier werden Ausgabestellen in Tabellenform zur Verfügung gestellt
Essen Berliner Tafel geordnet nach Bezirken
<BerlinerTafel />
    </v-container>
</template>

<script>
import BerlinerTafel from '@/components/Essen/BerlinerTafel.vue'


export default {
  name: 'EssenHygiene',
  props: {
    msg: String
  },
  components: {
    BerlinerTafel
  },
}
</script>