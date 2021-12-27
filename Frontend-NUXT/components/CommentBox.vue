<template>
  <div class="new-comment">
    <input
      v-model="commentValue"
      @keydown.enter="comment"
      type="text"
      placeholder="Comment..."
    />
    <span @click="comment"><fa icon="paper-plane" /></span>
  </div>
</template>

<script>
export default {
  props: ['postID'],
  computed: {
    isLogged() {
      return this.$store.state.auth.isLogged
    },
  },
  data() {
    return {
      commentValue: '',
    }
  },
  methods: {
    async comment() {
      if ($nuxt.isOffline) {
        return
      }
      if (!this.isLogged) {
        return
      }

      const jwt = localStorage.getItem('jwt')
      const res = await fetch(
        process.env.apiBaseUrl + '/posts/comment/' + this.postID,
        {
          headers: { 'Content-type': 'application/json', authorization: jwt },
          method: 'PUT',
          body: JSON.stringify({ comment: this.commentValue }),
        }
      )
      const data = await res.json()

      this.$emit('getPosts')
      this.commentValue = ''
    },
  },
}
</script>

<style scoped>
.new-comment {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 30px;
  gap: 10px;
}
.new-comment input {
  background: rgb(199, 199, 199);
  border: none;
  border-radius: 15px;
  padding: 0 10px;
}
.new-comment span {
  background: #02001f;
  color: white;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
}
</style>