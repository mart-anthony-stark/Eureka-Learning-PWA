<template>
  <div class="end">
    <h2>You've reached the end of this chapter</h2>
    <h3>Now let's see what you've learned</h3>
    <button @click="quiz">Proceed to quiz</button>
  </div>
</template>

<script>
export default {
  props: ['currentChapter', 'nextChapter'],
  methods: {
    quiz() {
      this.$store.commit('quiz/setMode', 'strict')
      this.$store.commit('mode/setNextChapter', this.nextChapter)
      this.$router.push(`/act/${this.currentChapter}`)
    },
  },
}
</script>

<style scoped>
.end {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background: white;
  padding: 20px;
  border: 1px solid black;
}
h2 {
  text-align: center;
}
button {
  border: none;
  background: yellow;
  padding: 10px 30px;
  font-size: 20px;
  cursor: pointer;
}
</style>