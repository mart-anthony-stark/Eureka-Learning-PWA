<template>
  <div class="exit-modal">
    <h3>Are you sure you want to quit?</h3>
    <div>
      <button @click="$emit('yes')" id="yes">Yes</button>
      <button @click="$emit('no')" id="no">No</button>
    </div>
  </div>
</template>

<style scoped>
.exit-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 350px;
  width: 100%;
  z-index: 99;
  background: #fff;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 15px;
}
.exit-modal button {
  padding: 5px 20px;
  border: none;
}
.exit-modal button#yes {
  background: #02001f;
  color: #ffffff;
}
.exit-modal button#no {
  background: #ffffff;
  color: #02001f;
  border: 2px solid #02001f;
  padding: 3px 18px;
  margin-left: 20px;
}
</style>