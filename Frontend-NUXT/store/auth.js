export const state = () => ({ isLogged: false, id: '', username: '', user: '' })

export const mutations = {
  login(state) {
    state.isLogged = true
  },
  logout(state) {
    state.isLogged = false
  },
  setUser(state, user){
    state.user = user
  },
  setUsername(state, username) {
    state.username = username
  },
  setId(state, id) {
    state.id = id
  },
}
