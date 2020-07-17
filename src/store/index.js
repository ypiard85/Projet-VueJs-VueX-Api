import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    courses: [
      {
        article: 'Frommage',
        acheter: false,
      },
      {
        article: 'Jambon',
        acheter: false,
      },
      {
        article: 'Fraise',
        acheter: false,
      },
    ],

  },

  mutations: {
    ADD_ARTICLE(state, articleItems){
      state.courses.push({
        article: articleItems,
        acheter: false
      })
    },

    DELETE_ARTICLE(state, articleItems){
      let article = state.courses.indexOf(articleItems)
      state.courses.splice(article, 1)
    },

    STATUS_CHANGE(state, articleItems){
      articleItems.acheter = !articleItems.acheter
    }
  },

  getters:{
    countAcheter(state){
      return state.courses.filter( count => {
        return count.acheter === true
      }).length
    },
    
    countPasAcheter(state){
      return state.courses.filter( count => {
        return count.acheter === false
      }).length
    }
  },

  actions: {
    add_article( {commit}, articleItems ){
      commit('ADD_ARTICLE', articleItems)
    },

    delete_article( {commit}, articleItems ){
      commit('DELETE_ARTICLE', articleItems)
    },

    status_change( {commit}, articleItems ){
      commit('STATUS_CHANGE', articleItems )
    },

  },

  modules: { }
})
