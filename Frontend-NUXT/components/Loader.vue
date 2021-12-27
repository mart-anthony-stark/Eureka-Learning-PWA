<template>
  <div class="cont">
    <div class="sktn-loader">
      <div class="sktn"></div>
      <div class="sktn"></div>
      <div class="sktn"></div>
    </div>
    <div class="sktn-loader">
      <div class="sktn"></div>
      <div class="sktn"></div>
      <div class="sktn"></div>
    </div>
    <div class="sktn-loader">
      <div class="sktn"></div>
      <div class="sktn"></div>
      <div class="sktn"></div>
    </div>
    <div class="sktn-loader">
      <div class="sktn"></div>
      <div class="sktn"></div>
      <div class="sktn"></div>
    </div>
  </div>
</template>

<style scoped>
.cont {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sktn-loader {
  max-width: 500px;
  width: 100%;
  box-shadow: 0 0 15px rgb(0 0 0 / 40%);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  background: #fff;
}
.sktn {
  margin-bottom: 10px;
  background: rgb(167, 167, 167);
  width: 100%;
  height: 20px;
  border-radius: 15px;
  background: linear-gradient(0.25turn, transparent, #fff, transparent),
    linear-gradient(rgb(189, 189, 189), rgb(189, 189, 189)),
    radial-gradient(
      38px circle at 19px 19px,
      rgb(189, 189, 189) 50%,
      transparent 51%
    ),
    linear-gradient(rgb(189, 189, 189), rgb(189, 189, 189));
  background-repeat: no-repeat;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
}
</style>