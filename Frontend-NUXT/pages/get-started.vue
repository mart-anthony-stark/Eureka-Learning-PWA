<template>
  <section>
    <div @click="education()" class="education">
      <h1>EDUCATION MODE</h1>
    </div>
    <div @click="exploration()" class="exploration">
      <h1>EXPLORATION <span>MODE</span></h1>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'app',
  computed: {
    isLogged() {
      return this.$store.state.auth.isLogged
    },
    username() {
      return this.$store.state.auth.username
    },
    welcome() {
      return 'Welcome ' + this.username
    },
  },
  methods: {
    education() {
      this.$store.commit('mode/setMode', 'edu')
      this.$router.push('/astronomy')
    },
    exploration() {
      this.$store.commit('mode/setMode', 'exp')
      this.$router.push('/astronomy')
    },
  },
}
</script>

<style lang="sass" scoped>
section
  display: -ms-grid
  display: grid
  -ms-grid-rows: (1fr)[2]
  grid-template-rows: repeat(2, 1fr)

section > div
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  color: #ffffff
  -webkit-box-pack: center
  -ms-flex-pack: center
  justify-content: center
  -webkit-box-align: center
  -ms-flex-align: center
  align-items: center

section .education
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.6)), to(rgba(0, 0, 0, 0.6))), url("./images/Skylight.jpg")
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/Skylight.jpg")
  background-position: left
  background-size: cover
  cursor: pointer

section .exploration
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.6)), to(rgba(0, 0, 0, 0.6))), url("./images/Starman.png")
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/Starman.png")
  background-position: left
  background-size: cover
  text-align: center
  cursor: pointer

section .exploration span
  display: block
</style>