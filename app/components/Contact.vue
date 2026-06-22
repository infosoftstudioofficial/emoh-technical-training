<template>
  <v-container class="d-flex justify-center py-10" id="contact">
    <v-card id="contact" variant="flat" width="100%">
      <v-row class="pa-4 align-start ga-4">
        <v-col cols="12">
          <v-card flat class="mb-5">
            <v-card-title class="font-style text-h5 text-start">Contacts</v-card-title>
          </v-card>
        </v-col>
        <v-avatar size="100">
          <v-img :src="me" alt="Me"></v-img>
        </v-avatar>
        <v-col cols="8" class="mr-2">
          <div class="text-subtitle-2 font-weight-bold global-text-style">Cj Rosatace</div>
          <div class="text-caption">+63 995 1872 924</div>
          <div class="text-caption">infosoftstudioofficial@gmail.com</div>
        </v-col>

      </v-row>
    </v-card>
  </v-container>
</template>
<script setup>
const { smAndUp } = useDisplay()
import me from '@/assets/images/office.png'
</script>
<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(10px);
  border-radius: 30px !important;
}
</style>