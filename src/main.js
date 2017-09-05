import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import * as firebase from 'firebase'
import AlertCmp from './components/Shared/alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBJMliq25lhMFWGtcdRwP5ppx0IrKU2E5w',
      authDomain: 'meetups-001.firebaseapp.com',
      databaseURL: 'https://meetups-001.firebaseio.com',
      projectId: 'meetups-001',
      storageBucket: 'meetups-001.appspot.com'
    })

    this.$store.dispatch('loadMeetups')
  }
})
