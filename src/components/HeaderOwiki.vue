<template>
    <div class="d-flex justify-space-around">
      <v-menu
        transition="scale-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
          variant="text"
            v-bind="props"
          >
            Anlaufstellen
          </v-btn>
        </template>
  
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
  
      <v-menu
        transition="slide-x-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
          variant="text"
            v-bind="props"
          >
            Essen / Unterkunkt / Hygiene
          </v-btn>
        </template>
  
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
  
      <v-menu
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ props }">
          <v-btn
          variant="text"
            v-bind="props"
          >
            Anträge
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>
  
  <script setup>
    const items = [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ]
  </script>