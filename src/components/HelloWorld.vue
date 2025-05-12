<template>
  <v-container>
<!--     <nav>
      <v-col>
      <RouterLink to="/owiki"   class="button" style="font-size:1.5vw;"
      >testlink</RouterLink>
  </v-col>
  </nav>
    <main>
    <RouterView />
  </main> -->
<v-row>
    <v-col cols="12">
    <v-card class="banner">
<v-card-text>
  ObdachlosenWiki
  <p> {{ timestamp }} </p>
</v-card-text>
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
  <v-col cols="12">
    <v-card>
      <v-card-text class="cardstyle">
      <AnlaufstellenWiki />
    </v-card-text>
    </v-card>
  </v-col>
</v-row>
<v-row>
  <v-col cols="12">
    <v-card>
      <v-card-text class="cardstyle">
      <EssenHygiene />
    </v-card-text>
    </v-card>
  </v-col>
</v-row>
<v-row>
  <v-col cols="12">
    <v-card>
      <v-card-text class="cardstyle">
      <AntragWiki />
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
import AnlaufstellenWiki from '@/components/AnlaufstellenWiki.vue'
import EssenHygiene from '@/components/EssenHygiene.vue'
import AntragWiki from '@/components/AntragWiki.vue'



export default {
  name: 'HelloWorld',
  components: {
    HeaderOwiki,
    FooterComponent,
    ObdachlosenWiki,
    FirstSteps,
    AnlaufstellenWiki,
    EssenHygiene,
    AntragWiki
  },
  props: {
    msg: String
  },
      data: () => ({
        timestamp: " "
    }),
    created() {
              setInterval(this.getNow, 1000);
            },
    methods: {
      goToOwiki() {
      this.$router.push('/owiki')
    },
    getNow: function() {
                    const today = new Date();
                    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
/*                     const time = today.getHours() + ":" + today.getMinutes() + ":";
 */                    const dateTime = date;
                    this.timestamp = dateTime;
                }
  },

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  background-image: linear-gradient(to right, blue 0%, white 100%);
  background-color: #0061a5;
  padding-top: 5px;
}
.cardstyle {
  word-break: normal;
}
</style>
