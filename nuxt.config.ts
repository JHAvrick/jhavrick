export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/jhavrick/'
  },
  generate: {
    dir: 'docs' //So that it can be hosted on github pages
  },
  build: {
    dir: 'docs' //So that it can be hosted on github pages
  },
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ]
})
