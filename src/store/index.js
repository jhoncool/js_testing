import Vue from 'vue'
import Vuex from 'vuex'
import * as types from '@/store/mutation-types'
import model from "@/model/model.json"
import { loadState, saveStatePlugin } from "@/store/localStorage"

const initStorage = {
  currentQuestionIndex: 0,
  picked: '0',
  ratings: [],
  answersTexts: [],
}
const storageData = loadState() || initStorage

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    localStorage: JSON.parse(JSON.stringify(storageData)),
    questionsFilesNames: model["questions-names"],
    maxRating: 5
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
    [types.START_AGAIN] (state) {
      state.localStorage = JSON.parse(JSON.stringify(initStorage))
    },
    [types.CHANGE_MODE] (state, { value }) {
      state.localStorage.picked = value
    },
    [types.UPDATE_RATING] (state, { value, index }) {
      const oldRatings = [...state.localStorage.ratings]
      oldRatings[index] = value
      state.localStorage.ratings = [...oldRatings]
    },
  },
  getters: {
    answersTexts: (state, getters) => {
      return state.localStorage.answersTexts
    },
    currentRating: (state, getters) => {
      return state.localStorage.ratings[getters.currentQuestionIndex]
    },
    allRatings: (state, getters) => {
      return state.localStorage.ratings
    },
    picked: (state, getters) => {
      return state.localStorage.picked
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
        text: require(`@/questions/${name}.md`)
      }));
    }
  },
  actions: {},
  strict: debug,
  plugins: [saveStatePlugin]
})
