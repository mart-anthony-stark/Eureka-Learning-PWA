<template>
  <div class="navbar">
    <nuxt-link to="/get-started"><img src="/images/svg/learn.svg" /></nuxt-link>
    <nuxt-link to="/quiz"><img src="/images/svg/quiz.svg" /></nuxt-link>
    <nuxt-link to="/community"
      ><img src="/images/svg/community.svg"
    /></nuxt-link>
    <nuxt-link to="/leaderboards"
      ><img src="/images/svg/leaderboards.svg"
    /></nuxt-link>

    <a @click="logout" v-if="isLogged" class="log"
      ><img src="/images/svg/logout.svg" />
      Logout
    </a>

    <a @click="$router.push('/authenticate')" v-if="!isLogged" class="log"
      ><img src="/images/svg/logout.svg" />Login</a
    >

    <!-- <nuxt-link to="/authenticate" v-if="!isLogged"
      ><a class="login"><fa icon="login" />Login</a></nuxt-link
    > -->
  </div>
</template>

<script>
export default {
  computed: {
    isLogged() {
      return this.$store.state.auth.isLogged
    },
  },
  methods: {
    async logout() {
      await fetch(process.env.apiBaseUrl + '/auth/logout', {
        headers: { 'Content-type': 'application/json' },
      })

      localStorage.setItem('jwt', null)

      this.$router.push('/')
    },
  },
}
</script>

<style lang="sass" scoped>
.navbar
  padding: 5px 0
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  align-items: center
  -ms-flex-pack: distribute
  justify-content: space-around
  background: #02001f
  position: fixed
  bottom: 0
  width: 100%

.navbar a
  cursor: pointer
  display: flex
  flex-direction: column
  color: #fff

.log img
  height: 25px

  .login
    background: rgb(249, 249, 0)
    color: black
    text-decoration: none
    padding: 5px 10px

a.nuxt-link-active[href='/'] 
    border: none !important

a.nuxt-link-active
  font-weight: bolder
  border-bottom: 2px solid yellow
  color: yellow

img
  width: 40px
</style>