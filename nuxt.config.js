// import colors from 'vuetify/es5/util/colors'

// export default {
//   // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
//   ssr: false,

//   // Target: https://go.nuxtjs.dev/config-target
//   target: 'static',

//   // Global page headers: https://go.nuxtjs.dev/config-head
//   head: {
//     titleTemplate: '%s - trello-clone',
//     title: 'trello-clone',
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: '' }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
//     ]
//   },

//   // Global CSS: https://go.nuxtjs.dev/config-css
//   css: [
//     '@/assets/styles.scss'
//   ],

//   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
//   plugins: [
//     '@/plugins/filters'
//   ],
//   router: {
//     middleware: ['auth']
//   },

//   // Auto import components: https://go.nuxtjs.dev/config-components
//   components: true,

//   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
//   buildModules: [
//     // https://go.nuxtjs.dev/vuetify
//     '@nuxtjs/vuetify',
//   ],

//   // Modules: https://go.nuxtjs.dev/config-modules
//   modules: [
//     // https://go.nuxtjs.dev/pwa
//     '@nuxtjs/pwa',
//     [
//       '@nuxtjs/firebase',
//       {
//         config: {
//             //add your firebase project config here
//             apiKey: "AIzaSyC520ktMfev3JmjnWQIlw63HmkwUrJp38M",
//             authDomain: "trello-adb94.firebaseapp.com",
//             projectId: "trello-adb94",
//             storageBucket: "trello-adb94.appspot.com",
//             messagingSenderId: "571656105083",
//             appId: "1:571656105083:web:0f9d1e4695b8adf0cd86de"
//         },
//         services: {
//           auth: {
//             persistence: 'local', // default
//             initialize: {
//               onAuthStateChangedAction: 'onAuthStateChangedAction',
//               subscribeManually: false
//             },
//             ssr: false,
//           },
//           firestore: true,
//           storage: true
//         }
//       }
//     ]
//   ],

//   // PWA module configuration: https://go.nuxtjs.dev/pwa
//   pwa: {
//     manifest: {
//       lang: 'en'
//     }
//   },

//   // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
//   vuetify: {
//     customVariables: ['~/assets/variables.scss'],
//   },

//   // Build Configuration: https://go.nuxtjs.dev/config-build
//   build: {
//   }
// }
import colors from 'vuetify/es5/util/colors'
import auth from './middleware/auth'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - trello-clone',
    title: 'trello-clone',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  router:{
    middleware: ['auth']
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
         // https://go.nuxtjs.dev/pwa
         '@nuxtjs/pwa',
         [
           '@nuxtjs/firebase',
           {
             config: {
                 //add your firebase project config here
                 apiKey: "AIzaSyC520ktMfev3JmjnWQIlw63HmkwUrJp38M",
                 authDomain: "trello-adb94.firebaseapp.com",
                 projectId: "trello-adb94",
                 storageBucket: "trello-adb94.appspot.com",
                 messagingSenderId: "571656105083",
                 appId: "1:571656105083:web:0f9d1e4695b8adf0cd86de"
             },
             services: {
               auth: {
                 persistence: 'local', // default
                 initialize: {
                   onAuthStateChangedAction: 'onAuthStateChangedAction',
                   subscribeManually: false
                 },
                 ssr: false,
               },
               firestore: true,
               storage: true
             }
           }
         ]
       ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    // theme: {
    //   dark: true,
    //   themes: {
    //     dark: {
    //       primary: colors.blue.darken2,
    //       accent: colors.grey.darken3,
    //       secondary: colors.amber.darken3,
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.accent4,
    //       success: colors.green.accent3
    //     }
    //   }
    // }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
