<template>
    <v-container>
        <v-layout>
          <v-bottom-navigation class="bottom" style="height: 56px">
            <!-- Kontaktinformationen Anfang -->
            <v-dialog class="kontakt">
  <template v-slot:activator="{ props: activatorProps }">
    <v-btn
    id="v-btn"
      v-bind="activatorProps"
      class="btn"
      text="Kontakt"
      variant="flat"
    ></v-btn>
  </template>
  <template v-slot:default="{ isActive }">
    <v-card title="Kontakt">
      <v-card-text>
        <p>Bahnhofsmission im Berliner Hauptbahnhof </p> <br />
            <p>Telefon: </p>
            <p>Fax: </p>
            <p>E-Mail </p>      
          </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="btn"
          text="Schließen"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
<!-- Kontaktinformationen Ende -->
<!-- Impressum Anfang -->
<v-dialog max-width="500">
  <template v-slot:activator="{ props: activatorProps }">
    <v-btn
      v-bind="activatorProps"
      class="btn"
      text="Impressum"
      variant="flat"
    ></v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Impressum">
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="btn"
          text="Schließen"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
<!-- Impressum Ende -->

<!-- Datenschutz Anfang -->
<v-dialog max-width="500">
  <template v-slot:activator="{ props: activatorProps }">
    <v-btn
      v-bind="activatorProps"
      class="btn"
      text="Datentschutz"
      variant="flat"
    ></v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Datenschuzt">
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="btn"
          text="Schließen"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
<!-- Datenschutz Ende -->

<!-- Spenden Anfang -->
<v-dialog max-width="500">
  <template v-slot:activator="{ props: activatorProps }">
    <v-btn
      v-bind="activatorProps"
      class="btn"
      text="Spenden"
      variant="flat"
    ></v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Spendenkonot">
      <v-card-text>
      Hier kommt das Spendenkonto hin und vllt. noch ein kleiner Text dazu
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="btn"
          text="Schließen"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
<!-- Spenden Ende -->
</v-bottom-navigation>
</v-layout>
</v-container>
</template>

<script>
  export default {
    data: () => ({
    }),
    methods: {

  },
  }
</script>
<style>
#v-btn:hover:before {
  background-color: lightgray !important;
  color:black !important;
}

.v-btn:hover:before {
  background-color: lightgray !important;
  color:black !important;
}
#v-btn:hover:focus {
  background-color: lightgray !important;
  color:black !important;
}
.btn {
  transition-duration: 2s !important;
  background-color: lightgray;
  opacity: 0.5;

}
.bottom {
  background-color: lightgray;
}
.kontakt {
  padding-left: 30px;
  width: 500px;
  height: 500px;
}
</style>