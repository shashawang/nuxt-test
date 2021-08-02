export default function ({ store, route, redirect }) {
  // console.log('route: ', route);
  store.commit('ADD_VISIT', route.path)
}
