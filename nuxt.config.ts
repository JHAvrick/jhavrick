export default defineNuxtConfig({
  target: 'static',
  /**
   * This changes the base url for the router so that navigation will still work.
   */
  router: {
    base: '/jhavrick/'
  },
  /**
   * Need to change the route URL for use w/ github pages and change the build assets dir from `_nuxt` to `assets`
   * (seems that github pages doesn't like the `_` in the directory name).
   * 
   * See example here: https://github.com/lucpotage/nuxt-github-pages/tree/main
   */
  app: process.env.NODE_ENV === 'development' ? undefined : {
    baseURL: "/jhavrick/",
    buildAssetsDir: 'assets'
    //buildAssetsDir: "/_nuxt/",
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
