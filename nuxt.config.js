export default {
  ssr: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'IngenIoT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      //{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css' },
      { rel: 'apple-touch-icon', sizes: "180x180", href="/apple-touch-icon.png"},
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon-16x16.png'},
      { rel: 'manifest', href: '/site.webmanifest'},
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color='#5bbad5'}
    ],
    bodyAttrs: {
      class: '' // Add `white-content` class here to enable "white" mode.
    }
  },
  router: {
    linkExactActiveClass: 'active'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'assets/css/demo.css',
    'assets/css/nucleo-icons.css',
    'assets/sass/black-dashboard.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    `~/plugins/dashboard-plugin.js`,
  ],
  //autoimport
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    'nuxt-highcharts',
  ],
  pwa:{
    themeColor:'#17a2b8',
    msTileColor:'#000000',
    iconPaths:{
      msTileImage:'img/icons/mstile-150x150.png'
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.AXIOS_BASE_URL 
  },
  env:{
   mqtt_prefix: process.env.MQTT_PREFIX,
   mqtt_host: process.env.MQTT_HOST,
   mqtt_port: process.env.MQTT_PORT
  },

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  serverMiddleware: {
    '/api': '~/api'
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    babel: {
      plugins: [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ]
    }
  }
}
