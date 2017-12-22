import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import model from "../model/model.json"
import { loadState, saveStatePlugin } from "./localStorage"

const storageData = loadState() || {
  currentQuestionIndex: 0,
  answersTexts: []
}

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    localStorage: JSON.parse(JSON.stringify(storageData)),
    questionsFilesNames: model["questions-names"]
  },
  mutations: {
    [types.CHANGE_QUESTION] (state, { questionIndex }) {
      state.localStorage.currentQuestionIndex = questionIndex
    },
    [types.UPDATE_ANSWER] (state, { answerIndex, text }) {
      const oldAnswers = [...state.localStorage.answersTexts]
      oldAnswers[answerIndex] = text
      state.localStorage.answersTexts = [...oldAnswers]
    },
  },
  getters: {
    answersTexts: (state, getters) => {
      return state.localStorage.answersTexts
    },
    currentQuestionIndex: (state, getters) => {
      return state.localStorage.currentQuestionIndex
    },
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
  plugins: [saveStatePlugin]
})
