<template>
  <v-navigation-drawer
    v-model="drawer"
    permanent
    width="300"
    expand-on-hover
    rail
  >
    <v-list class="mb-0 pb-0">
      <v-list-item
        :prepend-avatar="myAvatar"
        :title="title"
      >
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, index) in props.items" :key="index"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.model"
        v-scroll-to="{el: item.el ,offset: item.offset}"
      ></v-list-item>
    </v-list>
   <!-- <template v-slot:append>
      <div class="pa-2">
        <v-switch
          @click="theme.toggle()"
          hide-details
          class="custom-switch"
          color="blue-500"
          v-model="isDarkMode"
        >
          <template v-slot:thumb>
            <v-icon>{{ isDarkMode ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
          </template>
        </v-switch>
      </div>
    </template> -->
  </v-navigation-drawer>
</template>
<script setup>
  import myAvatar from '@/assets/images/me.png'
  import { ref, reactive } from 'vue'
  import { useTheme } from 'vuetify'

  const theme = useTheme()
  const isDarkMode = ref(false)

  const drawer = ref(true)


  const props = defineProps({
    items: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  })

</script>
<style scoped>
</style>