<template>
  <div class="modal">
    <h3>{{ err || 'Error' }}</h3>
    <button @click="$emit('closeModal')">Okay</button>
  </div>
</template>

<script>
export default {
  props: ['err'],
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  max-width: 300px;
  width: 100%;
  min-height: 200px;
  padding: 2rem;
  background: rgb(167, 167, 167);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
button {
  margin-top: 4%;
  width: 100%;
  height: 40px;
  background-color: rgb(249, 249, 0);
  border-style: none;
  cursor: pointer;
  justify-self: flex-end;
}
h3 {
  text-align: center;
}
</style>