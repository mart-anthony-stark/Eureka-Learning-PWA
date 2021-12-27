<template>
  <section>
    <img id="bg" src="/images/Skylight.jpg" />
    <div id="container">
      <h1 class="header">Leaderboard</h1>
      <div
        v-show="!loading"
        v-for="(score, i) in scores"
        :key="i"
        class="score"
      >
        <h3>{{ i + 1 }}</h3>
        <div class="det">
          <h2>
            {{ score.username || 'Empty' }}
          </h2>
          <h2 id="total-score">
            {{ score.score }} <span v-if="score.score">pts.</span
            ><span v-else>--</span>
          </h2>
        </div>
      </div>
      <Loader v-if="loading" />
    </div>
  </section>
</template>

<script>
export default {
  layout: 'app',
  data() {
    return {
      scores: ['', '', '', '', '', '', '', '', '', ''],
      loading: true,
      currentScore: 0,
    }
  },
  async mounted() {
    if ($nuxt.isOffline) {
      return
    }
    try {
      const res = await fetch(process.env.apiBaseUrl + '/leaderboards')
      const data = await res.json()

      if (data.length !== 0) this.scores = data

      for (let i = data.length; i < 10; i++) {
        this.scores.push({})
      }

      this.loading = false
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
}
.score:hover {
  background: rgb(212, 212, 212);
}
.det {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
}
#container {
  padding-bottom: 65px;
  max-width: 600px;
  width: 100%;
}
.header {
  text-align: center;
  padding: 15px 0;
  color: rgb(249, 249, 0);
  letter-spacing: 3px;
}
.score {
  padding: 15px;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  display: flex;
  gap: 10px;
  background: #fff;
}
.score h3 {
  height: 30px;
  width: 30px;
  border-radius: 100%;
  background: #02001f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
#bg {
  position: fixed;
  z-index: -1;
}
</style>