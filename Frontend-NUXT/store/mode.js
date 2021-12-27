export const state = () => ({
  currentChapter: 0,
  mode: '',
  nextChapter: '',
})

export const mutations = {
  nextCh(state) {
    if (state.currentChapter === 5) {
      return (state.currentChapter = 0)
    }
    state.currentChapter++
  },
  setMode(state, mode) {
    state.mode = mode
  },
  setCurrentPage(state, num) {
    state.currentChapter = num
  },
  setNextChapter(state, chapter) {
    state.nextChapter = chapter
  },
}
