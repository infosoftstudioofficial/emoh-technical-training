<template>
  <v-container class="fill-height px-2" width="100%">
    <sharedNavigation :items="items" title="CJPR" />
    <v-row justify="center">
      <v-col cols="12" sm="11">
        <about />
      </v-col>
      <v-col cols="12" sm="11">
        <installation />
      </v-col>
      <v-col cols="12" sm="11">
        <contact />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>

const items = [
  {
    el: '#introduction',
    offset: -70,
    icon: 'mdi-information',
    title: 'Introduction',
    model: 'Introduction'
  },
  {
    el: '#installation',
    offset: -70,
    icon: 'mdi-tools',
    title: 'Installation',
    model: 'Installation'
  },
  {
    el: '#contact',
    offset: -70,
    icon: 'mdi-email',
    title: 'Contacts',
    model: 'Contacts'
  }]
</script>