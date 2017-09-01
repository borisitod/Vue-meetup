<template>
   <v-container>
       <v-layout row>
           <v-flex xs12 sm6 offset-sm3>
               <v-card>
                   <v-card-text>
                       <v-container>
                           <form @submit.prevent="onSignup">
                               <v-layout row>
                                   <v-flex xs12>
                                       <v-text-field
                                               name="email"
                                               label="Email"
                                               id="email"
                                               v-model="email"
                                               type="email"
                                               :rules="[rules.required, rules.email]"
                                       >
                                       </v-text-field>
                                   </v-flex>
                               </v-layout>
                               <v-layout row>
                                   <v-flex xs12>
                                       <v-text-field
                                               name="password"
                                               label="Password"
                                               id="password"
                                               v-model="password"
                                               type="password"
                                               :rules="[rules.required]"
                                       >
                                       </v-text-field>
                                   </v-flex>
                               </v-layout>
                               <v-layout row>
                                   <v-flex xs12>
                                       <v-text-field
                                               name="confirmPassword"
                                               label="Confirm Password"
                                               id="confirmPassword"
                                               v-model="confirmPassword"
                                               type="password"
                                               :rules="[comparePasswords]"
                                       >
                                       </v-text-field>
                                   </v-flex>
                               </v-layout>
                               <v-layout row>
                                   <v-flex xs12>
                                       <v-btn type="submit">Sign Up</v-btn>
                                   </v-flex>
                               </v-layout>
                           </form>
                       </v-container>
                   </v-card-text>
               </v-card>
           </v-flex>
       </v-layout>
   </v-container>
</template>

<script>
    export default {
      data () {
        return {
          email: '',
          password: '',
          confirmPassword: '',
          rules: {
            required: (value) => !!value || 'Required.',
            email: (value) => {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              return pattern.test(value) || 'Invalid e-mail.'
            }
          }
        }
      },
      computed: {
        comparePasswords () {
          return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
        },
        user () {
          return this.$store.getters.user
        }
      },
      watch: {
        user (value) {
          if (value !== null && value !== undefined) {
            this.$router.push('/')
          }
        }
      },
      methods: {
        onSignup () {
          // Vuex
          this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
        }
      }
    }
</script>