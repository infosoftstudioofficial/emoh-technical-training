import VueScrollTo from 'vue-scrollto';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueScrollTo, {
    container: 'body',
    duration: 1000,
    easing: 'ease',
    offset: 0,
    cancelable: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
  })
})