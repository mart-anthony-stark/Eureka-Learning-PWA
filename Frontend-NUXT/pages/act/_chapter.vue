<template>
  <section>
    <img id="bg" src="/images/Skylight.jpg" />

    <div v-show="showboard" class="board">
      <h1>Awesome!</h1>
      <h2>You have completed this quiz</h2>
      <button v-if="quizMode === 'strict'" @click="proceedToChapter">
        Proceed to next chapter
      </button>
      <button v-if="quizMode === 'free'" @click="$router.push('/quiz')">
        Back to Menu
      </button>
    </div>
    <div v-show="showboard" class="overlay"></div>

    <div class="container">
      <nuxt-link to="/quiz" v-show="quizMode === 'free'"
        ><span class="back"><fa icon="arrow-left" /></span
      ></nuxt-link>
      <h1 class="header">{{ $route.params.chapter }}</h1>
      <div class="details">
        <h3 class="score">Score: {{ score }}</h3>
      </div>
      <div class="questions">
        <div
          v-show="i === questionIndex"
          v-for="(question, i) in set"
          :key="i"
          class="single-question"
        >
          <span class="number">{{ i + 1 }}</span>
          <img v-if="question.image" :src="question.image" id="image" />
          <h3 class="question">{{ question.question }}</h3>
          <div class="choices">
            <h4
              v-for="choice in question.choices"
              @click="checkAnswer(choice, i, $event)"
              :key="choice"
              class="choice"
            >
              {{ choice }}
            </h4>
          </div>
          <button v-if="!canAnswer" @click="next" class="next-btn">
            {{ set.length - 1 === i ? 'Finish' : 'Next' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    quizMode() {
      return this.$store.state.quiz.mode
    },
    set() {
      const chapter = this.$route.params.chapter.toLowerCase()
      return this.questions[chapter]
    },
    isLogged() {
      return this.$store.state.auth.isLogged
    },
    user() {
      return this.$store.state.auth.user
    },
    nextChapter() {
      return this.$store.state.mode.nextChapter.toLowerCase()
    },
  },
  data() {
    return {
      canAnswer: true,
      score: 0,
      questionIndex: 0,
      currentScore: 0,
      showboard: false,
      questions: {
        astronomy: [
          {
            question:
              'What is the leading theory for where the universe came from?',
            choices: [
              'A. Steady State Theory',
              'B. Big Bang Theory',
              'C. Oscillating Universe Theory',
            ],
            answer: 'b',
          },

          {
            question: 'Who came up with the Big Bang Theory?',
            choices: [
              'A. Georges LeMaitre',
              'B. Albert Einstein',
              'C. Edwin Hubble',
            ],
            answer: 'a',
          },

          {
            question:
              'Where did the particle that began the Big Bang come from?',
            choices: [
              'A. From another universe',
              "B. We don't know",
              'C. Black Holes',
            ],
            answer: 'b',
          },

          {
            question: 'Stars are primarily made up of what elements?',
            choices: [
              'A. Iron and Nickel',
              'B. Oxygen and Carbon',
              'C. Hydrogen and Helium',
            ],
            answer: 'c',
          },

          {
            question: 'Where are stars born?',
            choices: ['A. The Oort cloud', 'B. Nebulas', 'C. Galaxies'],
            answer: 'b',
          },

          {
            question: 'At what stage of its life cycle is our Sun in?',
            choices: ['A. Main Sequence', 'B. Protostar', 'C. Red Giant'],
            answer: 'a',
          },
          {
            question:
              'A massive collection of Stars, Dark matter, debris and gas bound together by gravity.',
            choices: ['A. Galaxy', 'B. Planet', 'C. Nebula'],
            answer: 'a',
          },

          {
            question: 'What is the name of our galaxy?',
            choices: ['A. Andromeda', 'B. Dairy Road', 'C. Milky Way'],
            answer: 'c',
          },

          {
            question: 'It is a system that is gravitionally bound to the Sun.',
            choices: ['A. Asteroid Belt', 'B. Solar System', 'C. Galaxy'],
            answer: 'b',
          },

          {
            question: 'What is the largest planet in the Solar System?',
            choices: ['A. Pluto', 'B. Jupiter', 'C. Saturn'],
            answer: 'b',
          },

          {
            question: 'Earth is the __ planet from the sun.',
            choices: ['A. Third', 'B. Fourth', 'C. Second'],
            answer: 'a',
          },

          {
            question: 'What was the earth like in its early days?',
            choices: [
              'A. Habitable',
              'B. Covered in Ice',
              'C. A Fiery mass of molten rock',
            ],
            answer: 'c',
          },

          {
            question: 'How many natural satellites does Earth have?',
            choices: ['A. 1', 'B. 2', 'C. 3'],
            answer: 'a',
          },

          {
            question: "What is the name of Earth's sole natural satellite?",
            choices: ['A. Moon', 'B. Europa', 'C. Titan'],
            answer: 'a',
          },

          {
            question: 'Who was the first man on the moon?',
            choices: ['A. Neil Armstrong', 'B. Yuri Gagarin', 'C. Buzz Aldrin'],
            answer: 'a',
          },
        ],
        biology: [
          {
            question: 'According to scientists where did life first develop?',
            choices: [
              'A. Oceanic Vents',
              'B. Volcanoes',
              'C. Under Ice Sheets',
            ],
            answer: 'a',
          },

          {
            question: 'What was the first form life on earth took?',
            choices: [
              'A. Eukaryotes',
              'B. Prokaryotes',
              'C. Multi-Celled organisms',
            ],
            answer: 'b',
          },

          {
            question:
              'What do you call the event in which every individual of a species is wiped out?',
            choices: ['A. Extinction', 'B. Evolution', 'C. Migration'],
            answer: 'a',
          },

          {
            question: 'How many mass extinctions has Earth experienced?',
            choices: ['A. 1', 'B. 3', 'C. 5'],
            answer: 'c',
          },

          {
            question:
              'What do you call the process in which species change over time in order to adapt?',
            choices: ['A. Natural Selection', 'B. Evolution', 'C. Extinction'],
            answer: 'b',
          },

          {
            question:
              'Who as the Scientist that first came up with Natural Selection?',
            choices: ['A. Charles Darwin', 'B. Charles Dickens', 'C. '],
            answer: 'a',
          },

          {
            question: 'How many kingdoms of Living things are there?',
            choices: ['A. 4', 'B. 5', 'C. 7'],
            answer: 'b',
          },

          {
            question: 'What are the two main subdivisions of Kingdom Animalia.',
            choices: [
              'A. Vertabrate and Invertebrate',
              'B. Bipedal adn Quadrupedal',
              'C. Herbivore and Carnivore',
            ],
            answer: 'a',
          },

          {
            question:
              'The members of this king has cells  that contain cellulose and chlorophyll.',
            choices: [
              'A. Fungi kingdom',
              'B. Monera kingdom',
              'C. Plant kingdom',
            ],
            answer: 'c',
          },

          {
            question: 'Defined as animals who primarily eat meat.',
            choices: ['A. Carnivore', 'B. Omnivore', 'C. Herbivore'],
            answer: 'a',
          },

          {
            question:
              'Consists of all the organisms and the physical environment with which they interact.',
            choices: ['A. Ecosystem', 'B. Biome', 'C. Terrain'],
            answer: 'a',
          },

          {
            question: 'The parts of Earth where life exists',
            choices: ['A. Biosphere', 'B. Atmosphere', 'C. Hydrosphere'],
            answer: 'a',
          },

          {
            question: 'What was the so called "blueprint of life"',
            choices: ['A. RNA', 'B. Cells', 'C. DNA'],
            answer: 'c',
          },

          {
            question: 'How much DNA do humans share with Chimpanzees?',
            choices: ['A. 98%', 'B. 97%', 'C. 90%'],
            answer: 'a',
          },

          {
            question: 'to which domain of life do human being belong to?',
            choices: ['A. Archaea', 'B. Bacteria', 'C. Eukaryota'],
            answer: 'c',
          },
        ],
        chemistry: [
          {
            question:
              'Three subatomic particles make up the atom. The positive-charged subatomic particle contained in the nucleus is called the?',
            choices: ['A. Proton', 'B. Neutron', 'C. Electron'],
            answer: 'a',
          },

          {
            question: 'The smallest unit of matter is called the .?',
            choices: ['A. Atom', 'B. Electron', 'C. Molecule'],
            answer: 'a',
          },

          {
            question:
              'A _______ bond is a bond that allows electrons to move from one place to another.',
            choices: ['A. Covalent', 'B. Ionic', 'C. Element'],
            answer: 'b',
          },

          {
            question:
              '1 oxygen molecule and _____ hydrogen atoms make up water.',
            choices: ['A. 1', 'B. 3', 'C. 2'],
            answer: 'c',
          },

          {
            question: 'Gold is an example of a ______.?',
            choices: ['A. Molecule', 'B. Atom', 'C. Element'],
            answer: 'c',
          },

          {
            question:
              'Because of the unequal distribution of electrons throughout the molecule, the water molecule is _________.',
            choices: ['A. Polar', 'B. Uneven', 'C. Strange'],
            answer: 'a',
          },

          {
            question: 'What are atoms made up of?',
            choices: [
              'A. Protons and Neutrons',
              'B. Protons, Neutrons and Electrons',
              'C. Elements and Molecules',
            ],
            answer: 'b',
          },

          {
            question: 'What exactly is matter?',
            choices: [
              'A. Matter is anything that has mass and occupies space',
              'B. Matter is anything that has to do with chemistry',
              'C. Matter is an Element',
            ],
            answer: 'a',
          },

          {
            question: 'What is the definition of an element?',
            choices: [
              'A. Elements are exactly water,earth,fire and air',
              "B. Elements are small AI's that can actually sing",
              'C. Elements are substances which make up the things we use in daily routine',
            ],
            answer: 'c',
          },

          {
            question: 'A gas has the following characteristics:.',
            choices: [
              'A. A fixed volume and a fixed shape',
              'B. No fixed shape of volume',
              'C. A volume, but not a fixed shape',
            ],
            answer: 'b',
          },

          {
            question: 'The following characteristics define a solid:',
            choices: [
              'A. A fixed volume and a fixed shape',
              'B. A volume, but not a fixed shape',
              'C. No fixed shape of volume',
            ],
            answer: 'a',
          },

          {
            question: 'A liquid consists of the following elements:',
            choices: ['A. Volume', 'B. Fixed shape', 'C. No fixed shape'],
            answer: 'a',
          },

          {
            question: 'Which three states of matter do you know about?',
            choices: [
              'A. Iron, Water, and Oxygen',
              'B. Elements, Molecules, and Atoms',
              'C. Solid, Liquid, and Gas',
            ],
            answer: 'c',
          },

          {
            question: 'What actually is evaporation?',
            choices: [
              'A. When a solid turns into liquid',
              'B. When a liquid turns into gas',
              'C. When liquid turns into solid',
            ],
            answer: 'b',
          },

          {
            question: 'What exactly is it that is going to melt?',
            choices: [
              'A. Solid to Liquid',
              'B. Liquid to Gas',
              'C. Liquid to Solid',
            ],
            answer: 'a',
          },
        ],
        geology: [
          {
            question:
              "What is the correct order (starting from the surface) of Earth's layers?",
            choices: [
              'A. crust, mantle, inner core, outer core',
              'B. mantle, outer core, inner core, crust',
              'C. crust, mantle, outer core, inner core',
            ],
            answer: 'c',
          },

          {
            question:
              'How does temperature change as you move from the crust to the core?',
            choices: [
              'A. it gets cooler',
              'B. it gets hotter',
              'C. it stays the same',
            ],
            answer: 'b',
          },

          {
            question:
              'Pressure ______________________ as you go deeper into the Earth?',
            choices: ['A. increases', 'B. decreases', 'C. decreases'],
            answer: 'a',
          },

          {
            question:
              'Who is the person credited with developing the theory of continental drift?',
            choices: ['A. Harry Hess', 'B. Galileo', 'C. Alfred Wegener'],
            answer: 'c',
          },

          {
            question: 'What does the theory of continental drift state?',
            choices: [
              'A. The continents were once joined in a super-continent and have moved over time',
              'B. Continents are stationary and do not move',
              'C. The Earth is broken into lithospheric plates that move due to convection currents',
            ],
            answer: 'a',
          },

          {
            question: 'This word means “all earth” in ancient Greek.',
            choices: ['A. Pangea', 'B. Laurasia', 'C. Gondwana'],
            answer: 'a',
          },

          {
            question:
              'Describes as one of the earliest ways geologists thought continents moved over time.',
            choices: [
              'A. Plate tectonics',
              'B. Continental drift',
              'C. Pangea',
            ],
            answer: 'b',
          },

          {
            question: 'How long ago is Pangea believed to have existed?',
            choices: [
              'A. 200-300 million years ago',
              'B. 1000-2000 years ago',
              'C. 10,000-20,000 years ago',
            ],
            answer: 'a',
          },

          {
            question:
              'The animal fossil that helped support the theory of continental drift is called?',
            choices: ['A. Glossopteris', 'B. Mesosauraus', 'C. Metosanous'],
            answer: 'b',
          },

          {
            question: 'The lithosphere is made up of?',
            choices: [
              'A. upper and lower mantle',
              'B.  inner and outer core',
              'C. crust and upper mantle',
            ],
            answer: 'c',
          },

          {
            question: '	The following are types of plate boundaries except.',
            choices: [
              'A. Convergent boundary',
              'B. Transform boundary',
              'C. Translate boundary',
            ],
            answer: 'c',
          },

          {
            question:
              'The zone where one plate slides under another is called the?',
            choices: [
              'A. Subduction zone',
              'B. Spreading',
              'C. Convergent zone',
            ],
            answer: 'a',
          },

          {
            question:
              'The plate boundary where plates slide past each other is called?',
            choices: [
              'A. Convergent boundary',
              'B. Divergent boundary',
              'C. Transform boundary',
            ],
            answer: 'c',
          },

          {
            question:
              'The plate boundary where plates move away from one another is called?',
            choices: [
              'A. Convergent boundary',
              'B. Divergent boundary',
              'C. Transform boundary',
            ],
            answer: 'b',
          },

          {
            question:
              'The plate boundary where plates move towards one another is called?',
            choices: [
              'A. Convergent boundary',
              'B. Divergent boundary',
              'C. Transform boundary',
            ],
            answer: 'a',
          },
        ],
        physics: [
          {
            question: 'Who is the great founder of Physics?',
            choices: [
              'A. Mart Anthony Salazar',
              'B. Shane Ivan Fallar',
              'C. Galileo Galilei',
            ],
            answer: 'c',
          },
          {
            question: 'What is the study of physics all about?',
            choices: [
              'A. minds of people',
              'B. unknown bodies of objects across the universe',
              'C. nature and the properties of matter and energy.',
            ],
            answer: 'c',
          },
          {
            question: 'How many law/s of motion does our world has?',
            choices: ['A. 12', 'B. 3', 'C. 8'],
            answer: 'b',
          },
          {
            question:
              'What type of energy does the echoes and vibration belong to?',
            choices: ['A. Sound ', 'B. Vibration', 'C. Energy'],
            answer: 'a',
          },
          {
            question: 'What do we use in order to check our temperature?',
            choices: [
              'A. A stick ',
              'B. A toothbrush',
              'C. A mirror',
              'D. A thermometer',
            ],
            answer: 'd',
          },
          {
            question:
              'What is the law of Motion that states that "A body at rest will remain at rest, and a body in motion will remain in motion unless it is acted upon by an external force.',
            choices: [
              'A. Buoyant force ',
              'B. Fire force',
              'C. G- force',
              'D. Inertia',
            ],
            answer: 'd',
          },
          {
            question: 'Who is the father of law of motion?',
            choices: [
              'A. Sir Alexandre Janix ',
              'B. Beatrice Luigi Gomez',
              'C. Joven Mauhit Jr.',
              'D. None of the above',
            ],
            answer: 'd',
          },
          {
            question: 'Unit of Energy is?',
            choices: ['A. Juole ', 'B. Jowles', 'C. Joule', 'D. Jouwle'],
            answer: 'c',
          },
          {
            question: 'Standard Gravity/Gravitational Acceleration is?',
            choices: [
              'A. 9.85 m/s2 ',
              'B. 8.91 m/s2',
              'C. 9.81 m/s2',
              'D. 8.99 m/s2',
            ],
            answer: 'c',
          },
          {
            question: 'Energy at motion is also called?',
            choices: [
              'A. Kenny energy ',
              'B. Kynetics energy',
              'C. Kinetic energy',
              'D. All of the above.',
            ],
            answer: 'c',
          },
        ],
        technology: [
          {
            question:
              'The word technology came from the greek words "techne" and "logos"',
            choices: ['A. True', 'B. False'],
            answer: 'a',
          },

          {
            question: 'What was the first form technology took?',
            choices: ['A. Levers', 'B. Primitive Tools', 'C. Wheels'],
            answer: 'b',
          },

          {
            question: 'Where did the Industrial revolution begin?',
            choices: ['A. Britain', 'B. France', 'C. Germany'],
            answer: 'a',
          },

          {
            question: 'Who invented the first steam engine?',
            choices: ['A. Thomas Edison', 'B. John Snow', 'C. Thomas Savery'],
            answer: 'c',
          },

          {
            question: 'Which of the following is not a renewable energy?',
            choices: ['A. Solar Energy', 'B. oil', 'C. Hydroelectric'],
            answer: 'b',
          },

          {
            question: 'Who Invented the Electric Motor',
            choices: [
              'A. Charles Babbage',
              'B. Alan Turing',
              'C. Michael Faraday',
            ],
            answer: 'c',
          },

          {
            question: 'Which of the following is not a conductor?',
            choices: ['A. Water', 'B. Rubber', 'C. Copper'],
            answer: 'b',
          },

          {
            question: 'Who invented the lightbulb',
            choices: [
              'A. Humphrey Davy and Joseph Swan',
              'B. Thomas Edison',
              'C. Benjamin Franklin',
            ],
            answer: 'a',
          },

          {
            question: 'Who invented the first computer?',
            choices: ['A. Bill Gates', 'B. Charles Babbage', 'C. Alan Turing'],
            answer: 'b',
          },

          {
            question:
              '___ is a programmable device that stores, retrieves, and processes data',
            choices: ['A. Calculator', 'B. Computer', 'C. Telephone'],
            answer: 'b',
          },

          {
            question:
              'Which device is used by a computer to display graphics and information on a video screen?',
            choices: ['A. Monitor', 'B. Modem', 'C. Keyboard'],
            answer: 'a',
          },

          {
            question: 'This can also be called the brain of the computer.',
            choices: ['A. ROM', 'B. RAM', 'C. CPU'],
            answer: 'c',
          },

          {
            question:
              '___ a vast network that connects computers all over the world',
            choices: ['A. Wifi', 'B. Telegram', 'C. Internet'],
            answer: 'c',
          },

          {
            question: 'When was the internet invented',
            choices: [
              'A. January 1, 1983',
              'B. January 1, 1984',
              'C. January 1, 1982',
            ],
            answer: 'a',
          },

          {
            question: 'Who invented the world wide web?',
            choices: ['A. Steve Jobs', 'B. Tim Berners-Lee', 'C. Bill Gates'],
            answer: 'b',
          },
        ],
      },
    }
  },
  methods: {
    proceedToChapter() {
      this.$store.commit('mode/nextCh')
      this.$router.push('/' + this.nextChapter)
    },
    async next() {
      if (this.questionIndex >= this.set.length - 1) {
        try {
          if (this.isLogged && !$nuxt.isOffline) {
            const jwt = localStorage.getItem('jwt')
            const res = await fetch(process.env.apiBaseUrl + '/scores/score', {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                authorization: jwt,
              },
              body: JSON.stringify({ score: this.currentScore + this.score }),
            })

            const data = await res.json()

            localStorage.setItem('jwt', data.token)
          }
        } catch (e) {
          console.log(e)
        }

        this.showboard = true
        return
      }

      this.questionIndex++
      this.canAnswer = true
      this.announcement = ''
    },
    checkAnswer(choice, answerIndex, e) {
      if (!this.canAnswer) {
        return
      }

      let answer = choice.split('.')[0].toLowerCase()
      let currentQuestion = this.set[this.questionIndex]
      let correctAnswer = currentQuestion.answer.toLowerCase()

      if (answer === correctAnswer) {
        this.score++
        this.announcement = 'Correct!'
        e.target.style.background = 'green'
        e.target.style.color = 'white'
      } else {
        this.announcement = 'Incorrect!'
        e.target.style.background = 'red'
        e.target.style.color = 'white'
      }
      this.canAnswer = false
    },
  },
  async mounted() {
    if (this.quizMode == '') this.$router.push('/quiz')
    const jwt = localStorage.getItem('jwt')
    const res = await fetch(process.env.apiBaseUrl + '/scores/user', {
      headers: {
        'Content-Type': 'application/json',
        authorization: jwt,
      },
    })
    const data = await res.json()
    this.currentScore = data
  },
}
</script>

<style scoped>
.board {
  position: fixed;
  z-index: 50;
  background: #fff;
  border-radius: 15px;
  max-width: 280px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  padding: 20px;
}
.board button {
  cursor: pointer;
  padding: 10px 30px;
  color: #fff;
  background: #02001f;
  border: none;
}
.overlay {
  position: fixed;
  z-index: 49;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
}
.header {
  text-align: center;
  padding: 15px 0;
  color: rgb(249, 249, 0);
  letter-spacing: 3px;
}
.container {
  padding: 0px 10px;
  padding-bottom: 65px;
}
span.back {
  position: absolute;
  top: 15px;
  left: 10px;
  color: #fff;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
.details {
  padding: 0 25px;
}
.score {
  font-size: 2rem;
  color: #fff;
}
.questions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  min-height: 80vh;
}
.single-question {
  position: relative;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  max-width: 300px;
  width: 100%;
  padding: 20px;
  border-radius: 25px;
  min-height: 360px;
}
.single-question .number {
  position: absolute;
  top: -25px;
  right: -15px;
  background: #02001f;
  color: #fff;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
#image {
  width: 100%;
}
.question {
  text-align: center;
}
.choices {
  margin-top: 20px;
}
.choice {
  padding: 15px;
  border-radius: 15px;
  margin-bottom: 20px;
  background: rgb(201, 201, 201);
  cursor: pointer;
}
.choice:hover {
  background: rgb(153, 153, 153);
}
.next-btn {
  background: #02001f;
  color: #fff;
  padding: 10px 30px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  float: right;
}
</style>