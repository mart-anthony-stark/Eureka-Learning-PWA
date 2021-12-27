<template>
  <div class="landing">
    <div class="top">
      <img src="/images/logo.png" />
      <h4>EUREKA!</h4>
    </div>
    <main>
      <div class="center">
        <h1>
          EUREKA! makes learning about the sciences a fun and enjoyable
          experience
        </h1>
        <img src="/images/video-placeholder.svg" />
        <p>
          Science and technology are all around us. Journey throughout the
          different chapters of EUREKA! and learn all about them. From the Big
          Bang to the your computer, you're sure to learn something new!
        </p>
      </div>
      <div class="buttons">
        <nuxt-link to="/get-started"><button>GET STARTED</button></nuxt-link>
        <nuxt-link to="/authenticate"
          ><button class="sign">SIGN IN</button></nuxt-link
        >
      </div>
    </main>
  </div>
</template>

<script>
export default {
  middleware: 'logged',
  mounted() {
    const jwt = localStorage.getItem('jwt')
    fetch(`${process.env.apiBaseUrl}/auth/islogged`, {
      headers: { 'Content-type': 'application/json', authorization: jwt },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === 'Authorized') this.$router.push('/get-started')
      })
      .catch((e) => console.error(e))
  },
}
</script>

<style lang="sass" scoped>
@import '~assets/scss/_global.scss'

.landing
  .top
    position: absolute
    top: 0
    background: $c-pri-a4
    display: flex
    align-items: center
    gap: 10px
    padding: 10px
    width: 100%
    color: $c-font
    img
      width: 50px

  main
    background: url('/images/Wall of Namib.jpg')
    background-size: cover
    background-repeat: no-repeat
    background-position: bottom
    min-height: 100vh
    color: $c-font
    display: flex
    justify-content: center
    align-items: center
    flex-flow: column
    gap: 20px
    padding: 0 25px

    .center
      max-width: 700px
      display: flex
      flex-flow: column
      justify-content: center
      align-items: center
      gap: 10px
      h1
        text-align: center

      img
        max-width: 100%

    .buttons
      margin-top: 25px
      display: grid
      grid-template-columns: repeat(2, 1fr)
      gap: 20px
      button
        padding: 20px 30px
        cursor: pointer
        outline: none
        border: none
        font-weight: 500

      :nth-child(1)
        background: $c-pri
        color: $c-font

      .sign
        background: $c-font
        color: $c-pri
        width: 100%

  @media (max-width: 360px)
    .top img
      width: 30px

    .center h1
      font-size: 26px
      font-weight: 500

    main .buttons button
      padding: 15px 25px
</style>