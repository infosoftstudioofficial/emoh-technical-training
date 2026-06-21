<template>
  <v-card id="introduction" variant="flat" class="px-2">
    <v-row class="negative-top" align="center">
      <v-col cols="12" sm="3" class="text-center">
      </v-col>
      <v-col cols="12" sm="2" class="text-center">
        <v-avatar :size="smAndUp ? '180' : '100'">
          <v-img :src="myAvatar" alt="Iamcj. Avatar"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="12" sm="4" class="text-center mb-0 pb-0">
        <span class="font-style" :class="smAndUp ? 'text-h4' : 'text-caption'">
          Infosoft
        </span><br />
        <span class="font-style font-weight-bold" :class="smAndUp ? 'text-h5' : 'text-caption'">
          EMOH Technical Training
        </span>
      </v-col>
      <v-col cols="12" sm="3" class="text-center">
      </v-col>
      <v-col cols="12" sm="8" class="text-center mt-0 pt-0">
      </v-col>
      <v-col cols="12">
        <v-card flat class="mb-5">
          <v-card-title class="font-style text-h5 text-start">Introduction</v-card-title>
        </v-card>
        <p class="text-subheading font-style pb-5 text-justify">
          Infosoft's goal is to provide high-quality software solutions to our clients with the help of the modern web
          application, selecting the combination of Laravel on the backend and Vue.js paired with Vuetify on the
          frontend is a highly efficient, industry-proven strategy. This stack perfectly balances enterprise-grade
          security,
          lightning-fast
          user experience, and rapid development speed.
        </p>
      </v-col>
      <v-col cols="12">
        <p class="text-subheading font-style pb-5 text-justify">
          Here is a concise breakdown of why this combination is exceptionally powerful:
        </p>
        <p class="text-subheading font-style pb-5 text-justify">
          <strong>1. Separation of Concerns with Seamless Integration</strong>
        </p>
        <p class="text-subheading font-style pb-5 text-justify">
          This trio splits the architecture of a web application into three distinct, specialized layers that
          communicate flawlessly:
        </p>
        <ul>
          <li class="text-subheading font-style pb-5 text-justify">
            <strong>Laravel (The Backend)</strong>: Handles the core business logic, database management, server
            security, user
            authentication, and data processing. It acts as the robust, invisible foundation.
          </li>
          <li class="text-subheading font-style pb-5 text-justify">
            <strong>Vue.js (The Frontend Engine)</strong>: A progressive JavaScript framework that runs in the user's
            browser. It manages
            the application's state and behavior, updating the user interface instantly in response to user actions
            without requiring slow, full-page browser reloads.
          </li>
          <li class="text-subheading font-style pb-5 text-justify">
            <strong>Vuetify (The UI Component Library)</strong>: A complete Material Design framework built on top of
            Vue. It provides a
            massive library of pre-made, professionally styled, and responsive user interface components (like data
            tables, forms, and navigation menus).
          </li>
        </ul>
      </v-col>
      <v-col cols="12">
        <p class="text-subheading font-style pb-5 text-justify">
          <strong>2. Key Technical and Business Advantages</strong>
        </p>
        <ul>
          <li class="text-subheading font-style pb-5 text-justify">
            <strong>Accelerated Time-to-Market:</strong> Laravel provides built-in tools for common backend tasks (like
            mailing, queues,
            and routing), while Vuetify eliminates the need to design UI components from scratch. Developers can focus
            entirely on unique business features, drastically shortening the development cycle.
          </li>
          <li class="text-subheading font-style pb-5 text-justify">
            <strong>Single-Page Application (SPA) Performance:</strong> Together, Vue and Laravel deliver a fluid,
            "app-like" user
            experience. Data is fetched asynchronously via APIs, meaning the interface responds instantly, driving
            higher user retention and satisfaction.
          </li>
          <li class="text-subheading font-style pb-5 text-justify">
            <strong>Built-in Responsiveness & Accessibility:</strong> Vuetify ensures that the frontend automatically
            adapts to any
            screen size (mobile, tablet, or desktop) and strictly adheres to modern web accessibility standards right
            out of the box.
          </li>
          <li class="text-subheading font-style pb-5 text-justify">
            <strong>Scalability and Maintenance:</strong> All three frameworks prioritize clean, elegant, and highly
            structured syntax.
            This shared philosophy makes the codebase incredibly organized, easy to test, and cost-effective to scale or
            hand off to new developers as the project grows.
          </li>
        </ul>
        <p class="text-subheading font-style pb-5 text-justify">
          In summary, the Laravel + Vue.js + Vuetify stack is a powerhouse for building modern web applications. It
          combines the best of backend robustness, frontend interactivity, and UI elegance, making it an ideal choice
          for delivering high-quality software solutions that meet and exceed client expectations.
        </p>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
import myAvatar from '@/assets/images/me.png'
const { smAndUp } = useDisplay()
</script>
<style scoped>
.negative-top {
  margin-top: -10px
}

li {
  list-style-type: circle;
}

li li {
  list-style-type: square;
}
</style>
