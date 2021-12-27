<template>
  <section>
    <img id="bg" src="/images/Skylight.jpg" />
    <div class="container">
      <h1 class="header">Quizzes</h1>
      <h2 v-if="isLogged" id="current-score">
        Your current score: {{ currentScore }}
      </h2>
      <div class="quizzes">
        <div v-for="quiz in quizzes" :key="quiz.chapter" class="card">
          <div @click="quiz.open = false" class="top">
            <img :src="quiz.image" />
            <div class="pop">
              <h4>
                {{ quiz.desc }}
              </h4>
            </div>
          </div>
          <div @click="takeQuiz(quiz)" class="details">START</div>
          <transition name="fade">
            <div v-show="!quiz.open" @click="quiz.open = true" class="cover">
              <img class="icon" :src="quiz.icon" />
              <h1>{{ quiz.chapter }}</h1>
            </div>
          </transition>
        </div>
      </div>
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
  },
  data() {
    return {
      currentScore: 0,
      quizzes: [
        {
          id: 0,
          chapter: 'ASTRONOMY',
          desc: 'Studies the elements of the universe including galaxies, planets and the Solar System',
          image: '/images/Astronomy/nebulae.jpg',
          icon: '/images/Icons/astronomy.png',
          open: false,
        },
        {
          id: 1,
          chapter: 'GEOLOGY',
          desc: 'Study of the structure, evolution and dynamics of the Earth.',
          image: '/images/Geology/EARTHLAYER.jpg',
          icon: '/images/Icons/geology.png',
          open: false,
        },
        {
          id: 2,
          chapter: 'BIOLOGY',
          desc: 'Deals with living organisms and their vital processes',
          image: '/images/biology/whale.jpg',
          icon: '/images/Icons/biology.png',
          open: false,
        },
        {
          id: 3,
          chapter: 'CHEMISTRY',
          desc: 'Study of the properties and behavior of matter.',
          image: '/images/chemistry/chem.jpg',
          icon: '/images/Icons/chemistry.png',
          open: false,
        },
        {
          id: 4,
          chapter: 'PHYSICS',
          desc: 'Studies matter, its fundamental constituents, its motion and behavior through space and time.',
          image: '/images/physics/pen.jpg',
          icon: '/images/Icons/physics.png',
          open: false,
        },
        {
          id: 5,
          chapter: 'TECHNOLOGY',
          desc: 'Application of scientific knowledge for practical purposes, especially in industry.',
          image: '/images/technology/internet.jpg',
          icon: '/images/Icons/technology.png',
          open: false,
        },
      ],
    }
  },
  methods: {
    takeQuiz(quiz) {
      this.$store.commit('quiz/setMode', 'free')
      this.$router.push(`/act/${quiz.chapter}`)
    },
  },
  async mounted() {
    try {
      const jwt = localStorage.getItem('jwt')
      const scoreRes = await fetch(process.env.apiBaseUrl + '/scores/user', {
        headers: {
          'Content-Type': 'application/json',
          authorization: jwt,
        },
      })
      const scoreData = await scoreRes.json()
      this.currentScore = scoreData
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style scoped>
.container {
  padding: 0px 10px;
  padding-bottom: 65px;
}
.header {
  text-align: center;
  padding: 15px 0;
  color: rgb(249, 249, 0);
  letter-spacing: 3px;
}
#current-score {
  color: #fff;
  margin-bottom: 10px;
}
.quizzes {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.card {
  max-width: 250px;
  width: 100%;
  overflow: hidden;
  border-radius: 15px;
  position: relative;
}
.card img {
  width: 100%;
}
.card .details {
  border: 2px solid #02001f;
  background: #02001f;
  color: #fff;
  border-top: 0;
  border-radius: 0 0 15px 15px;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
}
.card .details:hover {
  background: rgb(249, 249, 0);
  color: #000000;
}
.card .top {
  position: relative;
  height: 171px;
}
.card .top img {
  height: 100%;
}
.card .pop {
  position: absolute;
  inset: 0;
  color: rgb(218, 218, 218);
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  padding: 20px;
  user-select: none;
}
.card .cover {
  position: absolute;
  top: 0;
  inset: 0;
  background: #02001f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}
.card .icon {
  width: 75px;
  height: 75px;
}
</style>