<template>
  <div class="body">
    <NavHeader />
    <ChapterHeader :chapter="intro">
      <Slider :pics="pics" />
    </ChapterHeader>
    <div class="topic_section" id="topic_1">
      <div class="topic_block" id="page_greeting">
        <h1>LIFE'S BEGINNINGS</h1>

        <p>
          No one really knows how life started, or even when or where but we do
          have some theories. Some of the most prevailing one are that life
          arose from the the nutrient rich oceanic vents or from pools of
          chemical soup, whatever the case, life began and it changed everything
        </p>

        <iframe src="https://www.youtube.com/embed/1WS712DHfmg"> </iframe>

        <h2>Earliest Claimed Life on Earth</h2>

        <p>
          The earliest claimed lifeforms are fossilized microorganisms (or
          microfossils). They were found in iron and silica-rich rocks which
          were once hydrothermal vents in the Nuvvuagittuq greenstone belt of
          Quebec, Canada.
        </p>

        <img src="/images/biology/Nuvvuagittuq.jpg" />

        <p>
          These rocks are as old as 4.28 billion years. The tubular forms they
          contain are shown in a report. If this is the oldest record of life on
          Earth, it suggests "an almost instantaneous emergence of life" after
          oceans formed 4.4 billion years ago. According to Stephen Blair
          Hedges, "If life arose relatively quickly on Earth… then it could be
          common in the universe".
        </p>
      </div>

      <div id="" class="topic_block">
        <h1>EVOLUTION</h1>

        <p>
          Evolution is a scientific theory used by biologists. It explains how
          living things change over a long time, and how they have come to be
          the way they are.
        </p>

        <div class="two_column">
          <p>
            The theory was first proposed by Charles Darwin (1809–1882), when he
            wrote his "On the Origin of Species" in 1859. In this book, he put
            forward much evidence that evolution had occurred.
          </p>

          <img src="/images/biology/darwin.jpg" />
        </div>

        <p>
          He also proposed natural selection as the way evolution had taken
          place. But Darwin did not understand about genetics and how traits
          were actually passed on. He could not accurately explain what made
          children look like their parents. But while Darwin can't, perhaps
          these guys can, watch on for a more detailed explanation on the theory
          of evolution.
        </p>

        <iframe src="https://www.youtube.com/embed/GhHOjC4oxh8"> </iframe>
      </div>

      <div class="topic_block">
        <h1>EXTINCTION</h1>

        <p>
          Extinction is one of the major features of evolution. A species is
          extinct when no members of the species are still alive.
        </p>

        <img src="/images/biology/dino.jpg" />

        <p>
          All species become extinct sooner or later. The end of a species may
          happen for many reasons. It may be caused by habitat loss or by being
          overhunted, or by a major extinction event. An example of an animal
          that is now extinct is the Dodo, from over-hunting. Another quite
          different way for a species to end is by species-splitting, known as
          cladogenesis. Probably, none of the species living today was living in
          the Cambrian period, but their ancestors were.
        </p>

        <p>
          A wide range of traits can be naturally selected for, depending on the
          environmental niche: for example, camouflage, burrowing skills, bright
          plumage, acute hearing, or the ability to retain water in desert
          climes.

          <br /><br />
          Yet sometimes events on Earth are so catastrophic that a large portion
          of its species may die off — making room for newly formed life. Since
          the 1980s geologists and paleontologists have agreed upon five major
          extinction events. And today, many biologists agree that a sixth major
          extinction is currently underway.
        </p>

        <img src="/images/biology/mass.jpg" />
      </div>
    </div>

    <EndChapter currentChapter="BIOLOGY" nextChapter="chemistry" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      intro: {
        no: 3,
        title: 'BIOLOGY',
        intro:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.',
      },
      pics: [
        '/images/biology/fossil.jpg',
        '/images/biology/lions.jpg',
        '/images/biology/nest.jpg',
        '/images/biology/whale.jpg',
        '/images/biology/fossil.jpg',
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