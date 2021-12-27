<template>
  <div class="body">
    <NavHeader />
    <ChapterHeader :chapter="intro">
      <Slider :pics="pics" />
    </ChapterHeader>
    <div class="topic_section" id="topic_1">
      <div class="topic_block" id="page_greeting">
        <h1>THE EARTH</h1>

        <video width="330" height="180" autoplay controls>
          <source src="images/Geology/Earth.mp4" type="video/mp4" />
        </video>

        <p>
          The third planet from the sun, Earth is the only place in the known
          universe confirmed to host life. With a radius of 3,959 miles, Earth
          is the fifth largest planet in our solar system, and it's the only one
          known for sure to have liquid water on its surface. Earth is the only
          planet known to maintain life...
        </p>
      </div>

      <div class="topic_block" id="">
        <h1>LAYERS OF EARTH</h1>

        <iframe src="https://www.youtube.com/embed/WjXSCumeqxo"> </iframe>
        <br /><br />
        <p>
          The structure of the earth is divided into four major components: the
          crust, the mantle, the outer core, and the inner core. Each layer has
          a unique chemical composition, physical state, and can impact life on
          Earth's surface. Movement in the mantle caused by variations in heat
          from the core, cause the plates to shift, which can cause earthquakes
          and volcanic eruptions. These natural hazards then change our
          landscape, and in some cases, threaten lives and property.
        </p>

        <img src="images/Geology/EARTHLAYER.jpg" />

        <h1>CONTINENTAL DRIFT</h1>

        <div class="two_column">
          <p>
            Alfred Wegener proposed that the continents were once united into a
            single supercontinent named Pangaea, meaning all earth in ancient
            Greek. He suggested that Pangaea broke up long ago and that the
            continents then moved to their current positions. He called his
            hypothesis continental drift.
          </p>
          <img src="images/Geology/alfred.jpg" />
        </div>

        <div class="topic_section" id="topic_1">
          <p>
            Continental drift describes one of the earliest ways geologists
            thought continents moved over time.Today, the theory of continental
            drift has been replaced by the science of plate tectonics. The
            theory of continental drift is most associated with the scientist
            Alfred Wegener. In the early 20th century, Wegener published a paper
            explaining his theory that the continental landmasses were
            “drifting” across the Earth, sometimes plowing through oceans and
            into each other. He called this movement continental drift.
          </p>

          <img src="images/Geology/pangea.jpg" />
        </div>

        <div class="topic_section" id="topic_1">
          <div class="topic_block">
            <h1>EVIDENCE OF CONTINENTAL DRIFT THEORY</h1>

            <img src="images/Geology/evidence.jpg" />

            <p>
              A map of the continents inspired Wegener's quest to explain
              Earth's geologic history. Trained as a meteorologist, he was
              intrigued by the interlocking fit of Africa's and South America's
              shorelines. Wegener then assembled an impressive amount of
              evidence to show that Earth's continents were once connected in a
              single supercontinent.

              <br /><br />
              Wegener knew that fossil plants and animals such as mesosaurs, a
              freshwater reptile found only South America and Africa during the
              Permian period, could be found on many continents. He also matched
              up rocks on either side of the Atlantic Ocean like puzzle pieces.
              For example, the Appalachian Mountains (United States) and
              Caledonian Mountains (Scotland) fit together, as do the Karroo
              strata in South Africa and Santa Catarina rocks in Brazil.
            </p>
          </div>

          <br /><br />
          <br /><br />

          <div class="topic_section" id="topic_2">
            <div class="topic_block">
              <h1>TECTONIC PLATES</h1>

              <img src="images/Geology/plates.svg" />

              <p>
                The Earth’s outer shell, the lithosphere, consisting of the
                crust and uppermost mantle, is divided into a patchwork of large
                tectonic plates that move slowly relatively to each other. There
                are 7-8 major plates and many minor plates. Varying between 0 to
                100mm per year, the movement of a plate is driven by convection
                in the underlying hot and viscous mantle. Earthquakes, volcanic
                activity, mountain-building, and oceanic trench formation occur
                along plate boundaries in zones that may be anything from a few
                kilometres to a few hundred kilometres wide.
              </p>

              <h2>TYPES OF PLATE BOUNDARIES</h2>

              <p>
                There are three main types of plate boundaries: divergent,
                convergent, and transform, in which most seismic activity
                occurs...
              </p>
              <br /><br />
              <img src="images/Geology/typesofplateboundaries.png" />

              <br />

              <h2>PLATE TECTONICS</h2>

              <p>
                To understand this topic better, we found something to explain
                it to you. Below is a handy video from learningjunction!
              </p>

              <iframe src="https://www.youtube.com/embed/MZ-sVQElqhE?start=3">
              </iframe>
            </div>

            <div class="topic_section" id="topic_3">
              <div class="topic_block">
                <h2>THERE'S MORE</h2>

                <p>
                  There's so much to learn about geology and the topic involves
                  that we couldn't possibly cover it all, so to send you off,
                  here is a video from Bozeman!
                </p>

                <iframe src="https://www.youtube.com/embed/acwSG17e_lQ?start=5">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EndChapter currentChapter="GEOLOGY" nextChapter="biology" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      intro: {
        no: 2,
        title: 'Geology',
        intro:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.',
      },
      pics: [
        '/images/Geology/causeway.jpg',
        '/images/Geology/horseshoe.jpg',
        '/images/Geology/rocks.jpg',
        '/images/Geology/Volcano.jpg',
        '/images/Geology/causeway.jpg',
      ],
    }
  },
  computed: {
    mode() {
      return this.$store.state.mode.mode
    },
  },
  mounted() {
    if (this.mode == '') this.$router.push('/get-started')
  },
}
</script>

<style scoped>
@import '~/assets/css/astronomy.css';
</style>