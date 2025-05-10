<template>
  <v-container>
<v-row>
    <v-col cols="12">
    <v-card class="banner">
ObdachlosenWiki
  <HeaderOwiki />
</v-card>
  </v-col>
</v-row>
<v-row>
  <v-col cols="12">
    <v-card>
      <v-card-text class="cardstyle">
      <ObdachlosenWiki />
    </v-card-text>
    </v-card>
  </v-col>
</v-row>
<v-row>
  <v-col cols="12">
    <v-card>
      <v-card-text class="cardstyle">
      <FirstSteps />
    </v-card-text>
    </v-card>
  </v-col>
</v-row>
<v-row>
  <v-col>
    <FooterComponent />
  </v-col>
</v-row>
  </v-container>
</template>

<script>
import HeaderOwiki from '@/components/HeaderOwiki.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ObdachlosenWiki from '@/components/ObdachlosenWiki.vue'
import FirstSteps from '@/components/FirstSteps.vue'
export default {
  name: 'HelloWorld',
  components: {
    HeaderOwiki,
    FooterComponent,
    ObdachlosenWiki,
    FirstSteps
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.img {
  width: 100%;
  height: auto;
}

.banner {
  background-image: linear-gradient(to right, blue 0%, white 100%);
  background-color: #0061a5;
  padding-top: 5px;
}

.cardstyle {
  word-break: normal;
}
</style>
