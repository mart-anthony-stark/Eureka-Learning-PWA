<template>
  <div id="slider">
    <figure>
      <img v-for="(pic, i) in pics" :key="i" class="img_slide" :src="pic" />
    </figure>
  </div>
</template>

<script>
export default {
  props: ['pics'],
}
</script>

<style scoped>
#slider {
  width: 100%;
  height: 100%;
  object-fit: cover;

  position: absolute;
}

#slider {
  overflow: hidden;
  height: 100%;
}

#slider figure {
  position: relative;
  height: 100%;
  width: 500%;
  margin: 0;
  left: 0;
  animation: 20s slider infinite;
}

@keyframes slider {
  0% {
    left: 0%;
  }
  20% {
    left: 0%;
  }
  25% {
    left: -100%;
  }
  45% {
    left: -100%;
  }
  50% {
    left: -200%;
  }
  70% {
    left: -200%;
  }
  75% {
    left: -300%;
  }
  95% {
    left: -300%;
  }
  100% {
    left: -400%;
  }
}

.img_slide {
  float: left;
  width: 20%;
  height: 100%;
  object-fit: cover;
}
</style>