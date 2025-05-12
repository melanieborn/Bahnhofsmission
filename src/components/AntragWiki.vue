<template>
    <v-container>
      <p> {{ this.title[3].content }} </p>
  <p v-for="antrag in AntragWikiJson" :key="antrag.id">
    {{ antrag.name }}
  </p>
          <nav>
          <v-col>
            <RouterLink to="/owiki"   class="button" style="font-size:1.5vw;"
            >Startseite</RouterLink>
  </v-col>
  </nav>
    <main>
    <RouterView />
  </main>
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
    goToOwiki() {
      this.$router.push('/owiki')
    },
  }
}
</script>