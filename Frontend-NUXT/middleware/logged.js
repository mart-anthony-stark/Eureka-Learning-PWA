export default async ({ store, redirect }) => {
  if (store.state.auth.isLogged) return redirect('/get-started')
}
