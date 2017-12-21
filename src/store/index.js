import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import model from "../model/model.json"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    currentQuestionIndex: 0,
    questionsFilesNames: model["questions-names"]
  },
  mutations: {
    [types.CHANGE_QUESTION] (state, { questionIndex }) {
      state.currentQuestionIndex = questionIndex
    }
  },
  getters: {
    countQuestions: (state, getters) => {
      return state.questionsFilesNames.length
    },
    arrQuestionsIndexes: (state, getters) => {
      return Array.apply(null, { length: getters.countQuestions }).map((v, i) => i)
    },
    questionsTexts: (state, getters) => {
      return state.questionsFilesNames.map((name, i) => ({
        id: i,
        text: require(`../questions/${name}.md`)
      }));
    }
  },
  actions: {},
  strict: debug,
})
