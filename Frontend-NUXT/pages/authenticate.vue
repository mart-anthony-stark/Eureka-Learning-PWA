<template>
  <div>
    <ErrorModal v-if="errModal" :err="error" @closeModal="errModal = false" />

    <img id="bgp" src="/images/Wall of Namib.jpg" />
    <div id="main">
      <nuxt-link to="/"><button id="xbutton">+</button></nuxt-link>

      <div class="form">
        <div id="head_bar">
          <button
            @click="form = 'login'"
            id="login"
            :class="{ active: form == 'login' }"
          >
            LOG-IN
          </button>
          <h1 id="sep">|</h1>
          <button
            @click="form = 'signup'"
            id="sign"
            :class="{ active: form == 'signup' }"
          >
            SIGN-UP
          </button>
        </div>

        <form @submit="handleLogin" id="input_field" v-if="form === 'login'">
          <label class="input_label">Email</label>
          <input v-model="login.email" class="text_input" type="text" />

          <label class="input_label">Password</label>
          <input v-model="login.password" class="text_input" type="password" />

          <div id="remember_me">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <label>Remember me</label>
          </div>

          <a id="forgot_pass" href="">Forgot Password?</a>

          <div id="sign_in">
            <button>Sign-In</button>
          </div>
        </form>

        <form @submit="signup" id="input_field_2" v-if="form === 'signup'">
          <label class="input_label">Username</label>
          <input
            v-model="username"
            class="text_input"
            type="text"
            name="Username"
          />

          <label class="input_label">Email</label>
          <input
            v-model="email"
            class="text_input"
            type="text"
            name="Username"
          />

          <label class="input_label">Password</label>
          <input
            v-model="password"
            class="text_input"
            type="password"
            name="Username"
          />

          <label class="input_label">Confirm Password</label>
          <input
            v-model="rePassword"
            class="text_input"
            type="password"
            name="Username"
          />

          <div id="remember_me">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <label>Remember me</label>
          </div>

          <a id="forgot_pass" href="">Forgot Password?</a>

          <div id="sign_in">
            <button>Sign-Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'logged',
  computed: {
    isLogged() {
      return this.$store.state.auth.isLogged
    },
  },
  data() {
    return {
      form: 'login',
      username: '',
      email: '',
      password: '',
      rePassword: '',
      error: '',
      errModal: false,
      login: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async handleLogin(e) {
      e.preventDefault()

      const { email, password } = this.login
      if (email.length === 0 || password.length === 0) {
        this.error =
          'All fields are required. Please enter your email and password'
        this.errModal = true
      } else {
        const res = await fetch(`${process.env.apiBaseUrl}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        })

        const data = await res.json()

        localStorage.setItem('jwt', data.token)
        if (!data.success) {
          this.error = data.error
          this.errModal = true

          return
        }

        this.error = 'User logged in successfully'
        this.errModal = true

        setTimeout(() => {
          this.$router.push('/get-started')
        }, 1000)
      }
    },
    async signup(e) {
      e.preventDefault()
      let valid = true

      if (
        this.username === '' ||
        this.email === '' ||
        this.password === '' ||
        this.rePassword === ''
      ) {
        valid = false
        this.error = 'All fields are required'
        this.errModal = true
      }

      if (this.password !== this.rePassword) {
        valid = false
        this.error = 'Passwords do not match'
        this.errModal = true
      }

      if (!this.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        valid = false
        this.error = 'Invalid email address'
        this.errModal = true
      }
      if (valid) {
        const username = this.username
        const email = this.email
        const password = this.password

        try {
          const res = await fetch(`${process.env.apiBaseUrl}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
              username,
              email,
              password,
            }),
          })

          const data = await res.json()
          if (data.success) {
            localStorage.setItem('jwt', data.token)
            this.error = 'Account created successfully'
            this.errModal = true

            setTimeout(() => {
              this.$router.push('/get-started')
            }, 1000)
          }

          if (data.hasOwnProperty('error')) {
            this.error = data.error.email
            this.errModal = true
          }
        } catch (e) {
          console.log(e)
        }
      }
    },
  },
  mounted() {
    const jwt = localStorage.getItem('jwt')
    fetch(`${process.env.apiBaseUrl}/auth/islogged`, {
      headers: { 'Content-type': 'application/json', authorization: jwt },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === 'Authorized') this.$router.push('/get-started')
      })
      .catch((e) => console.error(e))
  },
}
</script>

<style lang="css" scoped>
* {
  margin: 0px;
}

body {
  background-color: white;
}

button:hover {
  cursor: pointer;
}

#bgp {
  width: 100%;
  height: 100vh;
  position: relative;
  object-fit: cover;
  margin: 0px;
}

#xbutton {
  position: absolute;
  top: 25px;
  right: 10px;
  font-size: 30px;
  background-color: transparent;
  border-style: none;
  color: white;
  transform: rotate(45deg);
}

#main {
  top: 0;
  position: absolute;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
}

.form {
  width: 40%;
  height: 60%;

  min-width: 340px;
  position: relative;
}

#head_bar {
  width: 100%;
  height: 15%;
}

#head_bar button {
  margin-left: -1.5%;
  margin-right: 3%;
  font-family: helvetica;
  font-size: 30px;
  font-weight: bolder;
  background-color: transparent;
  border-style: none;
  float: left;
}

#head_bar h1 {
  float: left;
  margin-right: 4.5%;
}

#sep {
  color: white;
  font-size: 30px;
}

button.active {
  color: rgb(249, 249, 0) !important;
  text-decoration: underline !important;
}

#sign,
#login {
  color: rgb(255, 255, 255);
  text-decoration: none;
}

#input_field {
  width: 100%;
  height: 80%;
  padding-top: 5%;
  color: white;
  display: block;
}

.text_input {
  width: 99%;
  height: 10%;
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: rgb(63, 63, 63);

  color: white;
  font-family: helvetica;
  font-size: 15px;

  border-style: none;
}

.input_label {
  margin-top: 2%;
  font-family: helvetica;
  font-size: 15px;
}

#remember_me {
  margin-top: 4%;
  float: left;
}

#remember_me label {
  font-family: helvetica;
  font-size: 15px;
}

#forgot_pass {
  margin-top: 4%;
  float: right;

  font-family: helvetica;
  font-size: 15px;
  color: white;
}

#sign_in {
  width: 100%;
  float: left;
}

#sign_in button {
  margin-top: 4%;
  width: 35%;
  height: 40px;

  background-color: rgb(249, 249, 0);
  border-style: none;
}

#input_field_2 {
  width: 100%;
  height: 80%;
  top: 15%;
  padding-top: 2%;
  color: white;

  position: absolute;
  /* display: none; */
}
</style>