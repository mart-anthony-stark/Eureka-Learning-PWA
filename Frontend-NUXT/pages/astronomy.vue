<template>
  <div class="body">
    <NavHeader />
    <ChapterHeader :chapter="intro">
      <Slider :pics="pics" />
    </ChapterHeader>
    <div class="topic_section" id="topic_1">
      <div class="topic_block" id="page_greeting">
        <h1>THE UNIVERSE</h1>

        <video width="330" height="180" autoplay controls>
          <source src="images/Astronomy/Star Timelapse.mp4" type="video/mp4" />
        </video>

        <p>
          The universe is a very big place, and it’s been around for a very long
          time. Thinking about how it all started is hard to imagine. In that
          case, perhaps it is best we start where all things do, at the
          beginning...
        </p>
      </div>

      <div class="topic_block" id="">
        <h1>THE BIG BANG</h1>

        <iframe src="https://www.youtube.com/embed/wNDGgL73ihY"> </iframe>

        <p>
          The are many theories that try to explain where the universe came
          from. The most famous among them is the Big Bang Theory. <br /><br />
          It is the idea that the universe began as just a single point, then
          expanded and stretched to grow as large as it is right now—and it is
          still stretching!
        </p>

        <div class="two_column">
          <p>
            The theory was first proposed In 1927, when an astronomer named
            Georges Lemaître had a big idea. He said that a very long time ago,
            the universe started as just a single point.
          </p>
          <img src="images/Astronomy/Georges_Lemaître.jpg" />
        </div>

        <p>
          The most definitive proof for the Big Bang theory came thanks to
          another scientist.
        </p>

        <div class="two_column">
          <p>
            Just two years later, an astronomer named Edwin Hubble noticed that
            other galaxies were moving away from us. And that’s not all. The
            farthest galaxies were moving faster than the ones close to us.
          </p>
          <img src="images/Astronomy/Hubble.jpg" />
        </div>

        <p>
          This meant that the universe was still expanding, just like Lemaître
          thought. If things were moving apart, it meant that long ago,
          everything had been close together.
        </p>

        <h2>A LONG, LONG TIME...</h2>

        <p>
          When the universe began, it was just hot, tiny particles mixed with
          light and energy. It was nothing like what we see now. As everything
          expanded and took up more space, it cooled down.
        </p>

        <img src="images/Astronomy/BigBang.jpg" />

        <p>
          The tiny particles grouped together. They formed atoms. Then those
          atoms grouped together. Over lots of time, atoms came together to form
          stars and galaxies.
          <br /><br />
          The first stars created bigger atoms and groups of atoms. That led to
          more stars being born. At the same time, galaxies were crashing and
          grouping together. As new stars were being born and dying, then things
          like asteroids, comets, planets, and black holes formed!
        </p>
      </div>
    </div>

    <div class="topic_section" id="topic_2">
      <div class="topic_block">
        <h1>THE STARS AND GALAXIES</h1>

        <img src="images/Astronomy/stars.jpg" />

        <p>
          Few things are as wonderful as a night sky lit up by thousands of
          stars. But what exactly are those points of light in the sky? Read on
          to find out!
        </p>

        <h2>STELLAR!</h2>

        <p>
          Gently singing Twinkle, twinkle, little star may lull a baby to sleep,
          but beyond the confines of Earth’s atmosphere, the words aren’t
          exactly accurate. A correct, albeit less soothing, rendition might be:
          Emit, emit, gigantic ball of gas.
        </p>

        <img src="images/Astronomy/star_closeup.jpg" />

        <p>
          Stars are huge celestial bodies made mostly of hydrogen and helium
          that produce light and heat from the churning nuclear forges inside
          their cores. Aside from our sun, the dots of light we see in the sky
          are all light-years from Earth. They are the building blocks of
          galaxies, of which there are billions in the universe.
        </p>

        <h2>THE LIFE OF A STAR</h2>

        <p>
          The life cycle of a star spans billions of years. As a general rule,
          the more massive the star, the shorter its life span.
        </p>

        <div class="img-slider">
          <div class="slide" :class="{ active: currentStarSlide == 0 }">
            <img src="images/Astronomy/nebulae.jpg" alt="" />
            <div class="info">
              <h2>Nebulous Beginnings</h2>
              <p>
                Birth takes place inside hydrogen-based dust clouds called
                nebulae. Over the course of thousands of years, gravity causes
                pockets of dense matter inside the nebula to collapse under
                their own weight. After enough time has past a Protostar will
                eventually emerge.
              </p>
            </div>
          </div>
          <div class="slide" :class="{ active: currentStarSlide == 1 }">
            <img src="images/Astronomy/protostar.jpg" alt="" />
            <div class="info">
              <h2>Protostars</h2>
              <p>
                A protostar is a very young star that is still gathering mass
                from its parent molecular cloud. The protostellar phase is the
                earliest one in the process of stellar evolution and represents
                a star’s nascent phase.
              </p>
            </div>
          </div>
          <div class="slide" :class="{ active: currentStarSlide == 2 }">
            <img src="images/Astronomy/main_sequence.png" alt="" />
            <div class="info">
              <h2>Main Sequence Star</h2>
              <p>
                Millions of years later, when the core temperature climbs to
                about 27 million degrees Fahrenheit, nuclear fusion begins,
                igniting the core and setting off the next—and longest—stage of
                a star’s life, known as its main sequence. Most of the stars in
                our galaxy, including the sun, are categorized as main sequence
                stars.
              </p>
            </div>
          </div>
          <div class="slide" :class="{ active: currentStarSlide == 3 }">
            <img src="images/Astronomy/red_giant.jpg" alt="" />
            <div class="info">
              <h2>Red Giant/Supergiant</h2>
              <p>
                Once a star that has exhausted the supply of hydrogen in its
                core and has begun thermonuclear fusion of hydrogen in a shell
                surrounding the core it will become a Red Giant, it get its name
                from their rapid expandsion and characteristic red hue.
              </p>
            </div>
          </div>
          <div class="slide" :class="{ active: currentStarSlide == 4 }">
            <img src="images/Astronomy/supernova.jpg" alt="" />
            <div class="info">
              <h2>Supernova</h2>
              <p>
                After a star finally exhausts the last of its fuel it finally
                erupts in a massive explosion of matter and light know as a
                Supernova, which can be so bright as to outshine galaxies. After
                this the star will turn into either a Neutron star, White dwarf
                or a Black hole.
              </p>
            </div>
          </div>
          <div class="navigation">
            <div
              @click="manualStarNav(0)"
              class="btn"
              :class="{ active: currentStarSlide == 0 }"
            ></div>
            <div
              @click="manualStarNav(1)"
              class="btn"
              :class="{ active: currentStarSlide == 1 }"
            ></div>
            <div
              @click="manualStarNav(2)"
              class="btn"
              :class="{ active: currentStarSlide == 2 }"
            ></div>
            <div
              @click="manualStarNav(3)"
              class="btn"
              :class="{ active: currentStarSlide == 3 }"
            ></div>
            <div
              @click="manualStarNav(4)"
              class="btn"
              :class="{ active: currentStarSlide == 4 }"
            ></div>
          </div>
        </div>

        <h2>GALAXIES</h2>

        <p>
          Galaxies are sprawling systems of dust, gas, dark matter, and anywhere
          from a million to a trillion stars that are held together by gravity.
          Nearly all large galaxies are thought to also contain supermassive
          black holes at their centers.
        </p>

        <img src="images/Astronomy/galaxy.jpg" />

        <p>
          In our own galaxy, the Milky Way, the sun is just one of about 100 to
          400 billion stars that spin around Sagittarius A, a supermassive black
          hole that contains as much mass as four million suns.
        </p>

        <h2>TYPES OF GALAXIES</h2>

        <p>
          While previously lackning any for of classification, In 1936, Hubble
          debuted a way to classify galaxies, grouping them into four main
          types: spiral galaxies, lenticular galaxies, elliptical galaxies, and
          irregular galaxies.
        </p>

        <div class="img-slider">
          <div class="slide" :class="{ active: currentGalaxySlide == 0 }">
            <img src="images/Astronomy/spiral.jpg" alt="" />
            <div class="info">
              <h2>Spiral Galaxy</h2>
            </div>
          </div>
          <div class="slide" :class="{ active: currentGalaxySlide == 1 }">
            <img src="images/Astronomy/elliptical.jpg" alt="" />
            <div class="info">
              <h2>Elliptical Galaxy</h2>
            </div>
          </div>
          <div class="slide" :class="{ active: currentGalaxySlide == 2 }">
            <img src="images/Astronomy/lenticular.jpg" alt="" />
            <div class="info">
              <h2>Lenticular Galaxy</h2>
            </div>
          </div>
          <div class="slide" :class="{ active: currentGalaxySlide == 3 }">
            <img src="images/Astronomy/irregular.jpg" alt="" />
            <div class="info">
              <h2>Irregular Galaxy</h2>
            </div>
          </div>
          <div class="navigation">
            <div
              @click="manualGalaxyNav(0)"
              class="btn"
              :class="{ active: currentGalaxySlide == 0 }"
            ></div>
            <div
              @click="manualGalaxyNav(1)"
              class="btn"
              :class="{ active: currentGalaxySlide == 1 }"
            ></div>
            <div
              @click="manualGalaxyNav(2)"
              class="btn"
              :class="{ active: currentGalaxySlide == 2 }"
            ></div>
            <div
              @click="manualGalaxyNav(3)"
              class="btn"
              :class="{ active: currentGalaxySlide == 3 }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="topic_section" id="topic_3">
      <div class="topic_block">
        <h1>THE SOLAR SYSTEM</h1>

        <p>
          Let's travel somewhere closer to home, to our Solar System. By
          definition The Solar System is the gravitationally bound system of the
          Sun and the objects that orbit it, either directly or indirectly.
        </p>

        <img src="images/Astronomy/solar_system.png" />

        <p>
          It consists of our star, the Sun, and everything bound to it by
          gravity – the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn,
          Uranus, and Neptune; dwarf planets such as Pluto; dozens of moons; and
          millions of asteroids, comets, and meteoroids.
        </p>

        <p>
          But you might be asking; where did our solar system come from? How did
          it form? The answer is simple, it all started a long time ago, on one
          'sunny day'
        </p>

        <h2>THE BIRTH OF THE SUN</h2>

        <p>
          It was five billion years ago. A giant cloud of matter in our own
          galaxy, the Milky Way, condensed under its gravity, exploding in
          nuclear fusion.
        </p>

        <img src="images/Astronomy/sun.jpg" />

        <p>
          This fusion released what we call sunshine. Very, very, very hot
          sunshine. And the newly formed star was our Sun. It drew in most of
          the surrounding matter, but some escaped. And some of this material
          clumped together, settling into a protoplanetary orbit.
        </p>

        <h2>Our Cosmic Backyard</h2>

        <p>
          The Solar system is a broad topics we found something to explain it to
          you, below is a handy video by Kurzgesagt explaing the solar system in
          more detail!
        </p>

        <iframe src="https://www.youtube.com/embed/KsF_hdjWJjo"> </iframe>
      </div>

      <div class="topic_section" id="topic_4">
        <div class="topic_block">
          <h1>THE EARTH AND MOON</h1>

          <p>
            We're finally at Earth, and at the last stop in our journey through
            Astronomy.
          </p>

          <img src="images/Astronomy/home.jpg" />

          <p>
            Our home planet is the third planet from the Sun, and the only place
            we know of so far that’s inhabited by living things.
          </p>

          <p>
            While Earth is only the fifth largest planet in the solar system, it
            is the only world in our solar system with liquid water on the
            surface. Just slightly larger than nearby Venus, Earth is the
            biggest of the four planets closest to the Sun, all of which are
            made of rock and metal. <br /><br />
            The name Earth is at least 1,000 years old. All of the planets,
            except for Earth, were named after Greek and Roman gods and
            goddesses. However, the name Earth is a Germanic word, which simply
            means “the ground.”
          </p>

          <h2>YOUNG EARTH</h2>

          <p>
            Before being the beautiful home we know today, the Earth in it's
            early days was very different.
          </p>

          <img src="images/Astronomy/young_earth.jpg" />

          <p>
            Back then there was no atmosphere or water, and the Earth was
            nothing but a fiery mass of rock and molten material. It also wasn't
            helped by the fact that the planet as under constant bombardment and
            collision from all sorts of space debris. One such collision would
            actually give us our moon.
          </p>

          <h2>THE MOON</h2>

          <p>
            The moon, Earth’s sole natural satellite, is our constant companion.
            It has circled our planet for billions of years, since before the
            first sparks of life flickered in the oceans—before Earth was even
            cool enough to have oceans.
          </p>

          <img src="images/Astronomy/luna.jpg" />

          <p>
            But its seemingly tranquil position in modern night skies stems from
            a remarkably tumultuous past. It formed some 4.5 billion years ago,
            when the solar system was in its infancy and comets, meteors, and
            asteroids ricocheted throughout.
            <br /><br />
            One such collision, between Earth and a Mars-sized orb, likely flung
            molten rock out into space, some of which coalesced and cooled to
            form what we now know as the moon.
          </p>

          <h2>THERE'S MORE</h2>

          <p>
            There's so much to learn about our home and it companion that we
            couldn't possibly cover it all, so to send you off is once again our
            friends from Kurzgesagt!
          </p>

          <iframe src="https://www.youtube.com/embed/JGXi_9A__Vc"> </iframe>
        </div>
      </div>
    </div>

    <EndChapter currentChapter="ASTRONOMY" nextChapter="geology" />
  </div>
</template>

<script>
export default {
  computed: {
    currentPage() {
      return this.$store.state.mode.currentChapter
    },
    mode() {
      return this.$store.state.mode.mode
    },
  },
  data() {
    return {
      currentStarSlide: 0,
      currentGalaxySlide: 0,
      slides: document.querySelectorAll('.slide'),
      pics: [
        '/images/Pillars of Creation.jpg',
        '/images/Space Dust.jpg',
        '/images/Earthrise.jpg',
        '/images/Apollo.jpg',
        '/images/Pillars of Creation.jpg',
      ],
      intro: {
        no: 1,
        title: 'ASTRONOMY',
        intro:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.',
      },
    }
  },
  methods: {
    manualGalaxyNav(manual) {
      this.currentGalaxySlide = manual
    },
    manualStarNav(index) {
      this.currentStarSlide = index
    },
    autoSlide() {
      let starSlide = 0
      let galaxySlide = 0
      setInterval(() => {
        if (starSlide == 4) starSlide = 0
        else starSlide++

        if (galaxySlide == 3) galaxySlide = 0
        else galaxySlide++

        this.currentStarSlide = starSlide
        this.currentGalaxySlide = galaxySlide
      }, 10000)
    },
  },
  mounted() {
    if (this.mode == '') this.$router.push('/get-started')

    this.autoSlide()
  },
}
</script>

<style scoped>
@import '~/assets/css/astronomy.css';
</style>