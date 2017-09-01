import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://thenypost.files.wordpress.com/2017/04/new-york.jpg?quality=90&strip=all&w=1200',
        id: 'asds123',
        title: 'Meetup in New York',
        date: '2017-09-01'
      },
      {
        imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-500759045_super.jpg?sharp=10&vib=20&w=1200',
        id: 'asds123123123',
        title: 'Meetup in Paris',
        date: '2017-09-02'
      }
    ],
    user: {
      id: 'asdsad',
      registeredMeetups: ['asds123']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
