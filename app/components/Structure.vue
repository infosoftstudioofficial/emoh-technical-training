<template>
    <v-card id="structure" flat class="ma-4 pa-4">
        <v-row>
            <v-col cols="12">
                <v-card flat class="mb-5">
                    <v-card-title class="font-style text-h5 text-start">Structure</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="12" md="5">
                <v-card>
                    <v-sheet class="pa-3 bg-surface-variant rounded-t-lg font-weight-bold d-flex align-center">
                        <v-icon icon="mdi-chevron-down" class="mr-2"></v-icon>
                        <span>barmm-hris-web-v1</span>
                    </v-sheet>

                    <v-treeview :items="frontendProjectStructure" item-title="name" item-value="name" density="compact">
                        <template v-slot:prepend="{ item }">
                            <v-icon :icon="item.icon" :color="item.iconColor" class="mr-1"></v-icon>
                        </template>

                        <template v-slot:title="{ item }">
                            <span class="tree-item-text">
                                {{ item.name }}
                                <v-tooltip activator="parent" location="end" class="custom-tooltip">
                                    {{ item.description }}
                                </v-tooltip>
                            </span>
                        </template>
                    </v-treeview>
                </v-card>
            </v-col>
            <v-col cols="12" md="5">
                <v-card>
                    <v-sheet class="pa-2 bg-surface-variant rounded-t-lg font-weight-bold">
                        <v-icon icon="mdi-chevron-down" class="mr-2"></v-icon>
                        barmm-hris-api-v1
                    </v-sheet>

                    <v-treeview :items="apiProjectStructure" item-title="name" item-value="name" density="compact">
                        <template v-slot:prepend="{ item }">
                            <v-icon :icon="item.icon" :color="item.iconColor" class="mr-1"></v-icon>
                        </template>

                        <template v-slot:title="{ item }">
                            <span class="tree-item-text">
                                {{ item.name }}
                                <v-tooltip activator="parent" location="end" class="custom-tooltip">
                                    {{ item.description }}
                                </v-tooltip>
                            </span>
                        </template>
                    </v-treeview>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'

const frontendProjectStructure = ref([
    {
        name: 'node_modules',
        icon: 'mdi-folder',
        iconColor: 'grey',
        description: 'External packages and dependencies installed via npm.'
    },
    {
        name: 'public',
        icon: 'mdi-folder',
        iconColor: 'blue-lighten-2',
        description: 'Static assets like index.html that don\'t pass through the build bundler compilation.'
    },
    {
        name: 'src',
        icon: 'mdi-folder-open',
        iconColor: 'blue-lighten-2',
        description: 'The root core development directory containing all the application source code.',
        children: [
            /* --- CONTINUED FROM PREVIOUS SECTIONS --- */
            {
                name: 'components',
                icon: 'mdi-folder',
                iconColor: 'blue-lighten-2',
                description: 'Reusable UI building blocks broken down by modular features.',
                children: [
                    // (Previous internal components go here...)
                    { name: 'index.js', icon: 'mdi-language-javascript', iconColor: 'yellow-darken-2', description: 'Central barrel export file matching component hooks together.' },
                    { name: 'PageNotFound.vue', icon: 'mdi-vuejs', iconColor: 'green-lighten-1', description: 'Fallback component interface displayed when a page routing query fails.' }
                ]
            },
            {
                name: 'constants',
                icon: 'mdi-folder',
                iconColor: 'blue-lighten-2',
                description: 'Immutable references, array mappings, and configuration values used site-wide.',
                children: [
                    { name: 'arraylist.js', icon: 'mdi-language-javascript', iconColor: 'yellow-darken-2', description: 'Static lists (e.g. status codes, types) populated into dropdown selection components.' },
                    { name: 'events.js', icon: 'mdi-language-javascript', iconColor: 'yellow-darken-2', description: 'Global event bus strings, action handles, or broadcast tags.' }
                ]
            },

            /* --- NEWLY ADDED FROM image_20ae23.png --- */
            {
                name: 'http',
                icon: 'mdi-folder-open',
                iconColor: 'blue-lighten-2',
                description: 'The networking pipeline wrapper managing background server connectivity.',
                children: [
                    { name: 'index.js', icon: 'mdi-language-javascript', iconColor: 'yellow-darken-2', description: 'Axios base configuration setup containing base URLs, response timelines, and global request interceptors.' }
                ]
            },
            {
                name: 'mixins',
                icon: 'mdi-folder-open',
                iconColor: 'blue-lighten-2',
                description: 'Global code patterns shared across multiple Options-API style component modules.',
                children: [
                    { name: 'copy-handlers.js', icon: 'mdi-language-javascript', iconColor: 'yellow-darken-2', description: 'Helper routines for cloning objects, clipboard copying data, or text string duplicates.' },
                    { name: 'error-handler.mixin.js', icon: 'mdi-language-javascript', iconColor: 'yellow-darken-2', description: 'Catch-all script parsing server error objects into clean, readable UI alert notifications.' }
                ]
            },
            {
                name: 'pages',
                icon: 'mdi-folder-open',
                iconColor: 'blue-lighten-2',
                description: 'Primary structural page layout components attached to specific URL endpoints.',
                children: [
                    { name: 'EmployeePage.vue', icon: 'mdi-vuejs', iconColor: 'green-lighten-1', description: 'Main administrative page rendering employee summaries, records, and timeline edits.' },
                    { name: 'NewPage.vue', icon: 'mdi-vuejs', iconColor: 'green-lighten-1', description: 'Draft template or creation wizard layout file for initializing new records.' },
                    { name: 'ProfilePage.vue', icon: 'mdi-vuejs', iconColor: 'green-lighten-1', description: 'User profile dashboard focused on managing self-service accounts and credentials.' }
                ]
            },
            {
                name: 'plugins',
                icon: 'mdi-folder-open',
                iconColor: 'blue-lighten-2',
                description: 'Third-party library configuration nodes initialized at the boot level of the app.',
                children: [
                    { name: 'echarts.js', icon: 'mdi-language-javascript', iconColor: 'yellow-darken-2', description: 'Apache ECharts visualization engine registration for rendering advanced dashboard analytics graphs.' },
                    { name: 'filters.js', icon: 'mdi-language-javascript', iconColor: 'yellow-darken-2', description: 'Global string format custom helpers (e.g. converting currencies or adjusting text casings).' },
                    { name: 'vuetify.js', icon: 'mdi-language-javascript', iconColor: 'yellow-darken-2', description: 'Vuetify 3 constructor script designating system design themes, default components, and custom icons.' }
                ]
            },
            {
                name: 'store',
                icon: 'mdi-folder',
                iconColor: 'blue-lighten-2',
                description: 'Global state management files (Vuex or Pinia) sharing cross-component datasets like active user login flags.'
            },
            {
                name: 'stylus',
                icon: 'mdi-folder',
                iconColor: 'blue-lighten-2',
                description: 'Global CSS prehistoric styles managing layout variables, colors, typography, or custom layout definitions.'
            },
            {
                name: 'views',
                icon: 'mdi-folder',
                iconColor: 'blue-lighten-2',
                description: 'Alternate page layout folders managing structural viewport assemblies combined with sub-routers.'
            },

            // Root-Level App Files inside /src
            {
                name: 'App.vue',
                icon: 'mdi-vuejs',
                iconColor: 'green-lighten-1',
                description: 'The root structural layout element of the application. Everything else mounts inside this file via <router-view>.'
            },
            {
                name: 'formats.js',
                icon: 'mdi-language-javascript',
                iconColor: 'yellow-darken-2',
                description: 'Global time, calendar, or date adjustment scripts (such as Day.js or date-fns presets) for HR logs.'
            },
            {
                name: 'main.js',
                icon: 'mdi-language-javascript',
                iconColor: 'yellow-darken-2',
                description: 'The execution entry point of the Vue app. It instantiates the framework instances and bundles external plugins.'
            },
            {
                name: 'router.js',
                icon: 'mdi-language-javascript',
                iconColor: 'yellow-darken-2',
                description: 'The URL route map definition specifying which component handles which address path (e.g., /profile vs /payroll).'
            }
        ]
    }
])
const apiProjectStructure = ref([
    // Core Laravel Folders
    {
        name: 'app',
        icon: 'mdi-folder',
        iconColor: 'blue-lighten-2',
        description: 'The core business logic of the API. Houses your Controllers, Models, Middleware, and Service layers.'
    },
    {
        name: 'bootstrap',
        icon: 'mdi-folder',
        iconColor: 'blue-lighten-2',
        description: 'Contains cache files generated by the framework for performance tuning, along with the app bootstrapper script.'
    },
    {
        name: 'config',
        icon: 'mdi-folder',
        iconColor: 'blue-lighten-2',
        description: 'Houses all application-wide configuration files (e.g., database configs, mail setups, security configurations).'
    },
    {
        name: 'database',
        icon: 'mdi-folder',
        iconColor: 'blue-lighten-2',
        description: 'Contains database migrations (schema creators), model factories, and database seeders for populating mock HR data.'
    },
    {
        name: 'public',
        icon: 'mdi-folder',
        iconColor: 'blue-lighten-2',
        description: 'The public web root directory. Contains index.php, which is the absolute entry point for all HTTP requests entering the API.'
    },
    {
        name: 'resources',
        icon: 'mdi-folder',
        iconColor: 'blue-lighten-2',
        description: 'Holds raw uncompiled assets (like CSS/Sass, localization translations language files, or Blade view dashboards).'
    },
    {
        name: 'routes',
        icon: 'mdi-folder',
        iconColor: 'blue-lighten-2',
        description: 'Defines all web endpoints. For this project, api.php holds the authenticated REST endpoints used by your frontend.'
    },
    {
        name: 'scripts',
        icon: 'mdi-folder',
        iconColor: 'blue-lighten-2',
        description: 'Custom automation scripts or deployment steps tailored to the HRIS infrastructure.'
    },
    {
        name: 'storage',
        icon: 'mdi-folder',
        iconColor: 'blue-lighten-2',
        description: 'Stores compile-ready Blade sheets, file uploads (like user profile photos, PDFs), logs, and framework caches.'
    },
    {
        name: 'stubs',
        icon: 'mdi-folder',
        iconColor: 'blue-lighten-2',
        description: 'Custom file boilerplate templates used by Laravel Artisan commands when generating new controllers or models.'
    },
    {
        name: 'tests',
        icon: 'mdi-folder',
        iconColor: 'blue-lighten-2',
        description: 'Automated test suite directory containing Feature and Unit testing protocols run via PHPUnit.'
    },

    // Dotfiles / Configuration Nodes
    {
        name: '.editorconfig',
        icon: 'mdi-cog',
        iconColor: 'blue-grey-lighten-1',
        description: 'Enforces uniform coding style guidelines (tabs, spaces, line endings) across different code editors used by teams.'
    },
    {
        name: '.env.example',
        icon: 'mdi-cog',
        iconColor: 'blue-grey-lighten-1',
        description: 'A structural boilerplate sharing placeholder variables required by the app (e.g., DB_PASSWORD, JWT_SECRET).'
    },
    {
        name: '.gitattributes',
        icon: 'mdi-git',
        iconColor: 'deep-orange-lighten-1',
        description: 'Forces Git to process specific text files and line endings uniformly, preventing cross-platform operating system errors.'
    },
    {
        name: '.gitignore',
        icon: 'mdi-git',
        iconColor: 'deep-orange-lighten-1',
        description: 'Prevents database credentials, vendor folders, and local logs from accidentally getting pushed to your repository.'
    },
    {
        name: '.styleci.yml',
        icon: 'mdi-alpha-s-box',
        iconColor: 'purple-lighten-2',
        description: 'Configuration file for StyleCI, automated system for continuously analyzing and formatting PHP code to match PSR rules.'
    },

    // Core Execution Scripts
    {
        name: 'artisan',
        icon: 'mdi-console-line',
        iconColor: 'amber-darken-2',
        description: 'The native Laravel command-line tool executable. Used to seed tables, generate code structures, or wipe caches.'
    },
    {
        name: 'composer.json',
        icon: 'mdi-code-json',
        iconColor: 'blue-lighten-3',
        description: 'The project manifest file listing all external PHP library dependencies, extensions, and metadata.'
    },
    {
        name: 'composer.lock',
        icon: 'mdi-code-json',
        iconColor: 'blue-lighten-3',
        description: 'Locks down the exact internal cryptographical hashes and library versions installed by Composer for uniform staging.'
    },
    {
        name: 'package.json',
        icon: 'mdi-code-json',
        iconColor: 'green-lighten-2',
        description: 'Tracks Node.js tool configurations utilized for bundling assets or driving compile modules via Webpack.'
    },
    {
        name: 'phpunit.xml',
        icon: 'mdi-xml',
        iconColor: 'orange-lighten-1',
        description: 'The configuration rules engine instructing PHPUnit how to build database states during continuous automated testing.'
    },
    {
        name: 'README.md',
        icon: 'mdi-information',
        iconColor: 'blue',
        description: 'Markdown user documentation explicitly mapping API setup commands, dependencies, and environment keys.'
    },
    {
        name: 'server.php',
        icon: 'mdi-language-php',
        iconColor: 'indigo-lighten-3',
        description: 'Emulation script used to mimic Apache or Nginx rewrite engines inside a local development host (via php artisan serve).'
    },
    {
        name: 'webpack.mix.js',
        icon: 'mdi-language-javascript',
        iconColor: 'yellow-darken-2',
        description: 'Configuration script for Laravel Mix, managing the compilation and minification of assets or styles.'
    }
])
</script>
<style scoped>
.v-treeview {
    font-family: 'Fira Code', Consolas, monospace;
    font-size: 0.85rem;
}

.tree-item-text {
    cursor: help;
    display: inline-block;
    width: 100%;
}

.custom-tooltip :deep(.v-overlay__content) {
    background-color: #1e1e1e !important;
    color: #e0e0e0 !important;
    border: 1px solid #444 !important;
    max-width: 320px !important;
    font-size: 0.8rem !important;
    line-height: 1.4;
}
</style>