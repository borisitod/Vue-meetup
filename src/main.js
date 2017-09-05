import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import * as firebase from 'firebase'
import AlertCmp from './components/Shared/alert.vue'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)

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
      storageBucket: 'gs://meetups-001.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
