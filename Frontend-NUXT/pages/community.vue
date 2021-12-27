<template>
  <div>
    <img id="bg" src="/images/Skylight.jpg" />
    <section :class="{ auth: isLogged }">
      <ErrorModal v-show="error !== ''" @closeModal="error = ''" :err="error" />
      <!-- create post MODAL -->
      <transition name="bounce">
        <div v-if="showCreatePost" class="post-modal">
          <span @click="showCreatePost = false" id="close-btn">X</span>
          <div class="user-det">
            <img :src="user.photo" />
            <h3>
              {{ user.username }} <span>{{ user.email }}</span>
            </h3>
          </div>
          <textarea v-model="newPost" placeholder="Create post..."></textarea>
          <button @click="createPost">POST</button>
        </div>
      </transition>
      <div
        v-if="showCreatePost"
        @click="showCreatePost = false"
        class="overlay"
      ></div>

      <!-- CREATE POST -->
      <div v-if="isLogged" @click="showCreatePost = true" class="create-post">
        <div class="user-det">
          <img :src="user.photo" />
          <h3>
            {{ user.username }} <span>{{ user.email }}</span>
          </h3>
        </div>
        <input type="text" disabled placeholder="Create post" />
        <button @click="showCreatePost = true">POST</button>
      </div>

      <!-- POSTS -->
      <div class="posts">
        <h3 v-if="!loading && posts.length == 0" style="color: white">
          No Posts to Show
        </h3>
        <Loader v-if="loading" />
        <div v-for="post in posts" class="single-post" :key="post._id">
          <span
            v-if="post.user._id == user._id"
            @click="deletePost(post._id)"
            class="delete-post"
            ><fa icon="trash"
          /></span>
          <div class="user">
            <img :src="post.user.photo" />
            <h4>{{ post.user.username }}</h4>
          </div>
          <p>{{ post.body }}</p>
          <div
            @click="likePost(post._id)"
            class="likes"
            :class="{ liked: post.liked }"
          >
            <fa icon="heart" /> <span>{{ post.likes.length }}</span>
          </div>
          <CommentBox @getPosts="fetchPosts" :postID="post._id" />

          <div class="comments-cont">
            <div
              v-for="comment in post.comments"
              class="single-comment"
              :key="comment._id"
            >
              <div class="details">
                <img :src="comment.user.photo || comment.userImage" />
                <h4>{{ comment.user.username }}</h4>
              </div>
              <p>{{ comment.comment }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'app',
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    isLogged() {
      return this.$store.state.auth.isLogged
    },
  },
  data() {
    return {
      posts: [],
      showCreatePost: false,
      newPost: '',
      userIcon: 'U',
      error: '',
      loading: true,
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const res = await fetch(process.env.apiBaseUrl + '/posts')
        const data = await res.json()

        if (this.isLogged && (!this.user.photo || this.user.photo === ''))
          this.user.photo = `https://ui-avatars.com/api/?background=random&name=${this.user.username}`
        data.forEach((post) => {
          if (post.user.photo === '' || !post.user.photo)
            post.user.photo = `https://ui-avatars.com/api/?background=random&name=${post.user.username}`

          post.likes.forEach((likers) => {
            if (likers._id === this.user._id) post.liked = true
            else post.liked = false
          })
        })

        this.posts = data
        this.loading = false
      } catch (e) {
        this.error = 'Something went wrong'
      }
    },
    async likePost(id) {
      if ($nuxt.isOffline) {
        this.error = 'No Network'
        return
      }
      if (!this.isLogged) {
        this.error = 'Please login first'
        return
      }

      const jwt = localStorage.getItem('jwt')
      const res = await fetch(process.env.apiBaseUrl + '/posts/like', {
        headers: { 'Content-type': 'application/json', authorization: jwt },
        method: 'PATCH',
        body: JSON.stringify({ postId: id }),
      })
      const data = await res.json()

      this.fetchPosts()
    },
    async createPost() {
      if ($nuxt.isOffline) {
        this.error = 'No Network'
        return
      }
      if (this.newPost === '' || !this.newPost) {
        this.error = 'Post cannot be empty. Please enter your thoughts'
        return
      }
      const jwt = localStorage.getItem('jwt')
      const res = await fetch(process.env.apiBaseUrl + '/posts/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', authorization: jwt },
        body: JSON.stringify({ body: this.newPost }),
      })

      const data = await res.json()

      this.fetchPosts()
      this.newPost = ''
      this.showCreatePost = false
    },
    async deletePost(id) {
      try {
        if ($nuxt.isOffline) {
          this.error = 'No Network'
          return
        }
        const jwt = localStorage.getItem('jwt')
        const res = await fetch(process.env.apiBaseUrl + '/posts/trash/' + id, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json', authorization: jwt },
        })
        this.fetchPosts()
      } catch (error) {
        console.log(error)
      }
    },
  },
  async mounted() {
    if (!$nuxt.isOffline) this.fetchPosts()
  },
}
</script>

<style scoped>
#bg {
  position: fixed;
  z-index: -1;
}
.single-comment {
  padding: 10px;
  margin: 10px 0;
  background: rgb(218, 218, 218);
  border-radius: 5px;
}
.single-comment .details {
  display: flex;
  gap: 8px;
  align-items: center;
}
.single-comment .details img {
  height: 30px;
  width: 30px;
  border-radius: 100%;
}
.single-comment p {
  margin-top: 10px;
}
.likes {
  color: gray;
  cursor: pointer;
  margin: 10px 0;
  font-size: 25px;
  width: fit-content;
}
.likes span {
  color: #000;
  font-size: 20px;
}
.liked {
  color: rgb(247, 86, 86);
}
.auth {
  padding-top: 200px;
}
section {
  /* padding: 15px; */
  padding-bottom: 65px;
}
.create-post {
  margin: auto;
  max-width: 600px;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 50%;
  background: #fff;
  transform: translateX(-50%);
}
.create-post input {
  padding: 10px;
  width: 100%;
  background: rgb(189, 189, 189);
  border-radius: 25px;
}
.create-post button {
  padding: 5px 20px;
  letter-spacing: 8px;
  color: aliceblue;
  background: #02001f;
  cursor: pointer;
}
.post-modal {
  max-width: 600px;
  width: 100%;
  height: 400px;
  background: rgb(255, 255, 255);
  position: fixed;
  z-index: 99;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  border-radius: 25px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.post-modal #close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 30px;
  width: 30px;
  color: white;
  border-radius: 50%;
  background: rgb(236, 79, 79);
  display: grid;
  place-items: center;
  font-weight: bolder;
  cursor: pointer;
}
.post-modal textarea {
  width: 100%;
  height: 247px;
  resize: none;
  margin-top: 25px;
  color: black;
  font-size: 20px;
  padding: 5px;
}
.post-modal button {
  padding: 5px 60px;
  margin-top: 15px;
  background: #02001f;
  color: #fff;
  cursor: pointer;
}
.user-det {
  display: flex;
  gap: 10px;
  align-items: center;
  align-self: baseline;
}
.user-det img {
  border-radius: 100%;
  height: 40px;
}
.user-det span {
  display: block;
  font-weight: 300;
  font-size: 15px;
}
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.single-post {
  max-width: 500px;
  width: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 25px;
  background: #fff;
}
.single-post .user {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 25px;
}
.single-post .user img {
  height: 50px;
  border-radius: 100%;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
.delete-post {
  color: rgb(255, 72, 72);
  cursor: pointer;
  float: right;
  height: 30px;
  width: 30px;
  border: 2px solid red;
  border-radius: 100%;
  display: grid;
  place-items: center;
}
@keyframes bounce-in {
  0% {
    transform: scale(0) translate(-50%, -50%);
  }
  50% {
    transform: scale(1.1) translate(-50%, -50%);
  }
  100% {
    transform: scale(1) translate(-50%, -50%);
  }
}
</style>