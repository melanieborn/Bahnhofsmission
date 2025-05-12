<template>
    <v-container>
      die Links werden direkt zu den Anträgen der Behörden führen Bsp.: 
      <br />
      <a href="https://service.berlin.de/dienstleistung/324485/" target="_blank">Hilfe auf einen Blick Berlin</a>. 
      <p> {{ this.title[3].content }} </p>
  <p v-for="antrag in AntragWikiJson" :key="antrag.id">
    {{ antrag.name }}
  </p>
    </v-container>
</template>


<script>
import AntragWikiJson from '@/assets/Json/AntragWiki.json'
import links from '@/assets/Json/componentLinks.json'
import titleJson from '@/assets/Json/titles.json'


export default {
  name: 'AntragWiki',
  data() {
    return {
      AntragWikiJson: AntragWikiJson,
      title: titleJson,
      links: links
    };
  },
  props: {
    msg: String
  },
  methods: {

  }
}
</script>