const postcssPresetEnv = require('postcss-preset-env');
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    extendRoutes (routes, resolve) { // 扩展路由配置的components和chunkNames，字段要在nuxt 组件的name属性里
      let index = routes.findIndex(route => route.name === 'main')
      routes[index] = {
        ...routes[index],
        components: {
          default: routes[index].component,
          top: resolve(__dirname, 'components/mainTop.vue')
        },
        chunkNames: {
          top: 'components/mainTop'
        }
      }
    },
    middleware: ['visits', 'user-agent'], // 在路由上应用的中间件，每次导航（渲染？）前都会执行，可以用在config/page里，顺序依次，/layout里不能用
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css',], // 全局css

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/element-ui.client.js'
    {
      src: "@/plugins/element-ui",
      ssr: false  // 关闭ssr
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // postcss: [
    //   postcssPresetEnv({
    //       stage: 0,
    //       browsers: 'cover 90%, last 2 major versions',
    //   }),
    // ]
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        // 'postcss-url': false,
        // 'postcss-nested': {},
        // 'postcss-responsive-type': {},
        // 'postcss-hexrgba': {},
        // 'postcss-preset-env': {
        //   autoprefixer: {
        //     grid: true
        //   },
        // },
        'postcss-preset-env': {
          stage: 0,
        },
        // 'postcss-cssnext': {}
        
      },
      preset: {
        // Change the postcss-preset-env settings
        // autoprefixer: {
        //   grid: true
        // },
        // cssnext: {
        //   stage: 2,
        // },
        stage: 2,
      }
    },
    babel: {
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    },
  }
}
