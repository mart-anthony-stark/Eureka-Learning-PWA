<template>
  <div id="chapter_header">
    <ExitModal v-if="showExit" @yes="yes" @no="showExit = false" />

    <div v-if="showExit" class="overlay"></div>

    <slot></slot>
    <div id="header_contents">
      <h2 id="chapter_num">Chapter {{ chapter.no }}</h2>
      <h1 id="title">{{ chapter.title }}</h1>

      <p id="intro">
        {{ chapter.intro }}
      </p>

      <div id="video_container"></div>
    </div>
    <div class="bottom">
      <div id="chapter_detail">
        <div class="chapter_detail_title">WHAT TO EXPECT:</div>
        <div class="chapter_detail_icons">
          <img src="/images/Icons/time.png" />
          <p>40 Minutes</p>
        </div>
        <div class="chapter_detail_icons">
          <img src="/images/Icons/quiz.png" />
          <p>2 Activities</p>
        </div>
        <div class="chapter_detail_icons">
          <img src="/images/Icons/video.png" />
          <p>1 Video</p>
        </div>
        <div class="chapter_detail_icons">
          <img src="/images/Icons/gallery.png" />
          <p>4 Images</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['chapter'],
  data() {
    return {
      showExit: false,
    }
  },
  methods: {
    exit(e) {
      if (e.code === 'Escape') this.showExit = true
    },
    yes() {
      this.$store.commit('mode/setCurrentPage', 0)
      this.$router.push('/get-started')
    },
  },
  mounted() {
    window.addEventListener('keyup', this.exit)
  },
  destroyed() {
    window.removeEventListener('keyup', this.exit)
  },
}
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 98;
}
a {
  text-decoration: none;
}

@font-face {
  src: url(/Fonts/Roobert/Roobert-Regular.otf);
  font-family: RoobertReg;
}

@font-face {
  src: url(/Fonts/Roobert/Roobert-Light.otf);
  font-family: RoobertLight;
}
#chapter_header {
  width: 100%;
  min-height: 100vh;

  position: relative;
  transition: 150ms;
  background: #000;
}
#header_contents {
  margin-top: 10%;
  position: absolute;
  height: 98vh;
  width: 100%;

  color: ghostwhite;
  background: rgba(0, 0, 0, 0.6);
}

#chapter_num {
  font-size: 20px;
  font-family: RoobertLight;
  font-weight: lighter;

  margin-left: 5%;
  margin-top: 5%;
}

#title {
  font-size: 40px;
  font-family: RoobertLight;
  font-weight: lighter;

  margin-left: 5%;
}

#intro {
  float: left;

  font-size: 15px;
  font-family: RoobertLight;
  font-weight: lighter;

  margin-left: 5%;
  margin-top: 5%;

  max-width: 500px;
  width: 90%;
}

#video_container {
  margin-top: 5%;
  margin-left: 5%;

  max-width: 500px;

  width: 90%;
  height: 30%;

  border: white solid 1px;

  float: left;
}

.bottom {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom: 25px;
  color: white;
  /* background-color: #19171d; */
  /* background: rgba(0, 0, 0, 0.2); */
}

#chapter_detail {
  float: left;

  margin-top: 5%;
  margin-left: 10%;

  width: 80%;
  height: 20%;
}

.chapter_detail_title {
  width: 100%;
  height: 25%;

  text-align: center;

  font-size: 18px;
  font-family: RoobertLight;
  font-weight: lighter;
}

.chapter_detail_icons {
  display: flex;
  width: 50%;
  height: 30%;
  padding-bottom: 1%;
  padding-top: 1%;

  float: left;

  align-items: center;
}

.chapter_detail_icons img {
  float: left;
  margin-left: 5%;
  margin-top: 1%;
  width: 20%;
  height: 100%;
  object-fit: scale-down;

  filter: invert(1);
}

.chapter_detail_icons p {
  float: left;
  margin-left: 5%;
  width: 60%;

  font-size: 17px;
  font-family: RoobertLight;
  font-weight: lighter;
}
@media (min-width: 486px) {
  #header_contents {
    margin-top: 15px;
  }
  .chapter_detail_icons img {
    height: 30px;
  }
}
@media (min-width: 751px) {
  #chapter_detail {
    margin-top: 15px;
  }
}
</style>