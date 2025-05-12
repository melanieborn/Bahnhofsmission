<template>
    <v-container>
Komponente für Anträge
  <p v-for="antrag in AntragWikiJson" :key="antrag.id">
    {{ antrag.name }}
  </p>
  <p> {{ this.AntragWikiJson[1].name }} </p>
    </v-container>
</template>

<script>
import AntragWikiJson from '@/assets/Json/AntragWiki.json'
import testJson from '@/assets/Json/test.json'


export default {
  name: 'AntragWiki',
  data() {
    return {
      AntragWikiJson: AntragWikiJson,
      test: testJson
    };
  },
  props: {
    msg: String
  },
  methods: {

  }
}
</script>