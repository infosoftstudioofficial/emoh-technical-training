<template>
  <v-card id="installation" variant="flat" class="px-2">
    <v-row wrap>
      <v-col cols="12">
        <v-card flat class="mb-5">
          <v-card-title class="font-style text-h5 text-start">Installation</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-timeline side="end">
          <v-timeline-item size="large" dot-color="blue-darken-2">
            <template v-slot:icon>
              <span>1</span>
            </template>
            <v-card class="elevation-0 ma-2">
              <p class="text-h5 font-style mb-2 text-justify">
                <strong>Prerequisites:</strong> <br />
              </p>
              <v-row>
                <v-col cols="12" md="6">
                  <p class="text-subheading font-style pb-5 text-justify">
                    <strong>Frontend:</strong> <br />
                  </p>
                  <p class="text-subheading font-style pb-5 text-justify">
                    Install <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js
                      v16</a> and <a href="https://www.nvmnode.com/guide/download.html" target="_blank"
                      rel="noopener noreferrer">Nvm</a> to
                    manage your node versions<br />
                    Learn <a href="https://vuejs.org/guide/essentials/lifecycle.html" target="_blank"
                      rel="noopener noreferrer">Vue.js</a><br />
                    Learn <a href="https://vuetifyjs.com/en/" target="_blank"
                      rel="noopener noreferrer">Vuetify</a><br />
                  </p>
                </v-col>
                <v-col cols="12" md="6">
                  <p class="text-subheading font-style mb-2 text-justify">
                    <strong>Backend:</strong> <br />
                  </p>
                  <p class="text-subheading font-style pb-5 text-justify">
                    Install <a href="https://www.docker.com/products/docker-desktop/" target="_blank"
                      rel="noopener noreferrer">Docker Desktop</a><br />
                    Learn <a href="https://laravel.com/docs/8.x" target="_blank"
                      rel="noopener noreferrer">Laravel</a><br />
                  </p>
                </v-col>
                <v-col cols="12">
                  <p class="text-subheading font-style mb-2 text-justify">
                    <strong>Common:</strong> <br />
                  </p>
                  <p class="text-subheading font-style pb-5 text-justify">
                    Must know basic <a href="https://git-scm.com/downloads" target="_blank"
                      rel="noopener noreferrer">Git</a>.<br />
                    Text editor - There is no IDE requirement, but we recommend <strong></strong><a
                      href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio
                      Code</a>.<br />
                    Manage, collaborate and review code via <strong></strong><a
                      href="https://id.atlassian.com/login?continue=https%3A%2F%2Fhome.atlassian.com%2F&application=atlas"
                      target="_blank" rel="noopener noreferrer">Bitbucket</a> through Atlassian (the parent company that
                    owns
                    Bitbucket) <br />
                  </p>
                </v-col>
              </v-row>
              <v-divider class="my-4"></v-divider>
            </v-card>
          </v-timeline-item>
          <v-timeline-item size="large" dot-color="blue-darken-2">
            <template v-slot:icon>
              <span>2</span>
            </template>
            <p class="text-h5 font-style mb-2 text-justify">
              <strong>Initial Setup:</strong> <br />
            </p>
            <v-card class="elevation-0 ma-2">
              <v-row>
                <v-col cols="12">
                  <p class="text-subheading font-style mb-2 text-justify">
                    <strong>Frontend:</strong> <br />
                  </p>
                  <p class="text-subheading font-style pb-5 text-justify">
                    Open a terminal (if you're using <a href="https://code.visualstudio.com/" target="_blank"
                      rel="noopener noreferrer">Visual Studio
                      Code</a><br />, you can open an <a href="https://code.visualstudio.com/docs/terminal/basics"
                      target="_blank" rel="noopener noreferrer">integrated terminal</a>) and use
                    the
                    following command to clone the project:
                  </p>
                  <v-responsive max-width="900" class="mx-auto">

                    <div v-for="(item, index) in commands" :key="index" class="mb-6">
                      <p class="text-subheading font-style text-black-lighten-3 mb-2">
                        {{ item.title }}
                      </p>

                      <v-sheet color="grey-lighten-2" rounded="lg"
                        class="pa-4 d-flex align-center justify-space-between position-relative code-block-hover"
                        elevation="1">
                        <code class="text-body-1 font-mono text-black pl-2">
                {{ item.snippet }}
              </code>

                        <v-chip label :color="item.isCopied ? 'success' : 'grey-lighten-1'" variant="flat" size="small"
                          class="font-weight-medium text-capitalize" @click="copyToClipboard(index)">
                          <span>{{ item.isCopied ? 'Copied!' : 'Clone' }}</span>
                          <v-icon end size="14" :icon="item.isCopied ? 'mdi-check' : 'mdi-content-copy'"
                            class="ml-2"></v-icon>
                        </v-chip>
                      </v-sheet>
                    </div>

                  </v-responsive>
                </v-col>
                <v-col cols="12">
                  <p class="text-subheading font-style mb-2 text-justify">
                    <strong>Backend:</strong> <br />
                  </p>
                </v-col>
                <v-col cols="12">

                  <v-responsive max-width="900" class="mx-auto">

                    <div v-for="(item, index) in backendCommands" :key="index" class="mb-6">
                      <p class="text-subheading font-style text-black-lighten-3 mb-2">
                        {{ item.title }}
                      </p>

                      <v-sheet color="grey-lighten-2" rounded="lg"
                        class="pa-4 d-flex align-center justify-space-between position-relative code-block-hover"
                        elevation="1">
                        <code class="text-body-1 font-mono text-black pl-2">
                {{ item.snippet }}
              </code>

                        <v-chip label :color="item.isCopied ? 'success' : 'grey-lighten-1'" variant="flat" size="small"
                          class="font-weight-medium text-capitalize" @click="copyBackendToClipboard(index)">
                          <span>{{ item.isCopied ? 'Copied!' : 'Clone' }}</span>
                          <v-icon end size="14" :icon="item.isCopied ? 'mdi-check' : 'mdi-content-copy'"
                            class="ml-2"></v-icon>
                        </v-chip>
                      </v-sheet>
                    </div>

                  </v-responsive>
                </v-col>
              </v-row>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup>
import { ref } from 'vue'

// 1. Define the props (the text you want to clone/copy)
// const props = defineProps({
//   textToCopy: {
//     type: String,
//     required: true
//   }
// })

// List of commands matching your image to loop over cleanly
const commands = ref([
  {
    title: 'Clone the repository',
    snippet: 'git clone https://iam_charmainejoy@bitbucket.org/iam_charmainejoy/barmm-hris-web-v1.git',
    isCopied: false
  },
  {
    title: 'Navigate to the project directory.',
    snippet: 'cd barmm-hris-web-v1',
    isCopied: false
  },
  {
    title: 'Project setup',
    snippet: 'npm install',
    isCopied: false
  },
  {
    title: 'Create .env file',
    snippet: 'mkdir .env',
    isCopied: false
  },
  {
    title: 'configure .env file',
    snippet: 'nano .env',
    isCopied: false
  },
  {
    title: 'Add the following to your .env file',
    snippet: 'VUE_APP_URL="https://mohhrisstaging.poolreno.com/api-staging/"\n VUE_APP_PDF_URL="https://mohhrisstaging.poolreno.com/"',
    isCopied: false
  },
  {
    title: 'Compiles and hot-reloads for development',
    snippet: 'npm run serve',
    isCopied: false
  },
  {
    title: 'Compiles and minifies for production',
    snippet: 'npm run build',
    isCopied: false
  },
  {
    title: 'Run your tests',
    snippet: 'npm run test',
    isCopied: false
  },
  {
    title: 'Lints and fixes files',
    snippet: 'npm run lint',
    isCopied: false
  }



])

// Copy handler using the specific index to prevent all buttons updating at once
const copyToClipboard = async (index) => {
  try {
    await navigator.clipboard.writeText(commands.value[index].snippet)
    commands.value[index].isCopied = true

    // Reset individual button after 2 seconds
    setTimeout(() => {
      commands.value[index].isCopied = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy command: ', err)
  }
}
const backendCommands = ref([
  {
    title: 'Go to your projects root folder:',
    snippet: 'mkdir project && cd project',
    isCopied: false
  },
  {
    title: 'Clone the official Laradock repository into a folder named `laradock`:',
    snippet: 'git clone https://github.com/Laradock/laradock.git',
    isCopied: false
  },
  {
    title: 'Navigate to the laradock folder.',
    snippet: 'cd laradock',
    isCopied: false
  },
  {
    title: 'Copy the example environment file.',
    snippet: 'cp .env.example .env',
    isCopied: false
  },
  {
    title: 'Open laradock/.env and update the following settings.',
    snippet: 'nano .env',
    isCopied: false
  },
  {
    title: 'Update PHP Versions: Set PHP_VERSION to match your project requirements.',
    snippet: 'ex. PHP_VERSION=8.0',
    isCopied: false
  },
  {
    title: 'Update DB Versions: Set POSTGRES_VERSION to match your project requirements.',
    snippet: 'ex. POSTGRES_VERSION=14',
    isCopied: false
  },
  {
    title: 'Database Credentials:',
    snippet: 'Update POSTGRES_DB, POSTGRES_USER, and POSTGRES_PASSWORD.',
    isCopied: false
  },
  {
    title: 'pgAdmin Credentials:',
    snippet: 'Configure PGADMIN_DEFAULT_EMAIL and PGADMIN_DEFAULT_PASSWORD.',
    isCopied: false
  },
  {
    title: 'Create a project folder for your Laravel project and clone the repository into it.',
    snippet: 'mkdir project && cd project',
    isCopied: false
  },
  {
    title: 'Create a code folder inside your project folder and navigate into it.',
    snippet: 'mkdir code && cd code',
    isCopied: false
  },
  {
    title: 'Clone the repository into a code folder',
    snippet: 'git clone https://iam_charmainejoy@bitbucket.org/iam_charmainejoy/barmm-hris-api-v1.git',
    isCopied: false
  },
  {
    title: 'Navigate to laradock/.env',
    snippet: 'cd laradock && nano .env',
    isCopied: false
  },
  {
    title: 'Then change the `APP_CODE_PATH_HOST=../` into the path/to/my-projects-folder/code` to point to your Laravel project\'s code folder.',
    snippet: 'APP_CODE_PATH_HOST=../code/',
    isCopied: false
  },
  {
    title: 'Navigate to laradock/nginx/sites',
    snippet: 'cd laradock/nginx/sites',
    isCopied: false
  },
  {
    title: 'Then open the default.conf file',
    snippet: 'nano default.conf',
  },
  {
    title: 'Then update the default.conf files root directory to point to your Laravel project\'s public folder.',
    snippet: 'root /var/www/barmm-hris-api-v1/public;',
    isCopied: false
  },
  {
    title: 'You can also update the port number if you want to use a different port for your Laravel project.',
    snippet: 'listen 50500 default_server',
    isCopied: false
  },
  {
    title: 'Open docker-compose.yml and find nginx server config and add ports mapping for your Laravel project.',
    snippet: `'ports:\n
      - "${'NGINX_HOST_HTTP_PORT'}:80"\n
      - "${'NGINX_HOST_HTTPS_PORT'}:443"\n
      - "${'VARNISH_BACKEND_PORT'}:81"\n
      - "50500:50500"'`,
    isCopied: false
  },
  {
    title: 'Then nagivate to the laradock folder and up the Nginx, PgAdmin and Postgres',
    snippet: 'docker compose up -d nginx pgadmin postgres',
    isCopied: false
  },
  {
    title: 'Then update your projects .env file to point to your database credentials.',
    snippet: '------refer to the backend dev assigned ----',
    isCopied: false
  },
  {
    title: 'Then if any update is made to the laradock configuration, you can run the following command to apply the changes. And That\'s it! You should now have the project running locally.',
    snippet: 'docker compose down && docker compose up -d nginx pgadmin postgres',
    isCopied: false
  }
])

// Copy handler using the specific index to prevent all buttons updating at once
const copyBackendToClipboard = async (index) => {
  try {
    await navigator.clipboard.writeText(backendCommands.value[index].snippet)
    backendCommands.value[index].isCopied = true

    // Reset individual button after 2 seconds
    setTimeout(() => {
      backendCommands.value[index].isCopied = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy command: ', err)
  }
}
</script>
<style scoped>
/* Enforces clean monospace look for terminal strings */
.font-mono {
  font-family: 'Courier New', Courier, monospace !important;
  letter-spacing: 0.5px;
}

/* Forces the container to fill the screen depth */
.min-vh-100 {
  min-height: 100vh;
}

/* Subtle styling enhancement to reveal the clone button smoothly */
.code-block-hover :deep(.v-chip) {
  opacity: 0.6;
  transition: opacity 0.2s ease;
}

.code-block-hover:hover :deep(.v-chip) {
  opacity: 1;
}
</style>