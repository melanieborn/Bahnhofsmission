<template>
    <v-container>
Komponente für Anträge
  <p v-for="user in AntragWikiJson" :key="user.id">
    {{ user.name }}
  </p>
    </v-container>
</template>

<script>
import AntragWikiJson from '@/assets/Json/AntragWiki.json'

export default {
  name: 'AntragWiki',
  data() {
    return {
      AntragWikiJson: AntragWikiJson,
    };
  },
  props: {
    msg: String
  }
}
</script>