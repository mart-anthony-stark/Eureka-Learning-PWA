<template>
  <div id="nav_header">
    <div v-if="current === 0" id="current_chapter" class="chapter_buttons">
      1 : ASTRONOMY
    </div>
    <div v-else @click="nav(0)" class="chapter_buttons">1</div>

    <div v-if="current === 1" id="current_chapter" class="chapter_buttons">
      2 : GEOLOGY
    </div>
    <div v-else @click="nav(1)" class="chapter_buttons">2</div>

    <div v-if="current === 2" id="current_chapter" class="chapter_buttons">
      3 : BIOLOGY
    </div>
    <div v-else @click="nav(2)" class="chapter_buttons">3</div>

    <div v-if="current === 3" id="current_chapter" class="chapter_buttons">
      4 : CHEMISTRY
    </div>
    <div v-else @click="nav(3)" class="chapter_buttons">4</div>

    <div v-if="current === 4" id="current_chapter" class="chapter_buttons">
      5 : PHYSICS
    </div>
    <div v-else @click="nav(4)" class="chapter_buttons">5</div>

    <div v-if="current === 5" id="current_chapter" class="chapter_buttons">
      6 : TECHNOLOGY
    </div>
    <div v-else @click="nav(5)" class="chapter_buttons">6</div>
  </div>
</template>

<script>
export default {
  computed: {
    mode() {
      return this.$store.state.mode.mode
    },
    current() {
      return this.$store.state.mode.currentChapter
    },
  },
  methods: {
    nav(num) {
      if (this.mode === 'exp') {
        const pages = [
          'astronomy',
          'geology',
          'biology',
          'chemistry',
          'physics',
          'technology',
        ]
        this.$store.commit('mode/setCurrentPage', num)
        this.$router.push(`/${pages[num]}`)
      }
    },
  },
}
</script>

<style scoped>
#nav_header {
  height: 40px;
  width: 100%;
  background-color: rgb(255, 255, 255, 0.7);

  position: fixed;

  z-index: 1;
}

#current_chapter {
  display: flex;
  width: 50%;
  height: 100%;
  float: left;
  background-color: white;

  font-size: 20px;
  font-family: RoobertLight;

  align-items: center;
  justify-content: center;
}

.chapter_buttons {
  display: flex;
  width: 10%;
  height: 100%;
  float: left;

  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: RoobertLight;
  cursor: pointer;
}
</style>