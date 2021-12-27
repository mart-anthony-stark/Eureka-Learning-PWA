export default async ({ store }) => {
  const jwt = localStorage.getItem('jwt')
  fetch(`${process.env.apiBaseUrl}/auth/islogged`, {
    headers: {
      'Content-type': 'application/json',
      authorization: jwt,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error === 'Unauthorized') {
        store.commit('auth/setUser', '')
        store.commit('auth/setId', '')
        store.commit('auth/logout')
      }

      if (data.msg === 'Authorized') {
        store.commit('auth/login')
        store.commit('auth/setUser', data.user.user)
        store.commit('auth/setId', data.user.user._id)
        store.commit('auth/setUsername', data.user.user.username)
      }
    })
    .catch((e) => console.error(e))
}
