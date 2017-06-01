import Vue from 'vue'
import Vuex from 'vuex'
import {SET_STEPS, SET_WEATHER} from '@/constants/mutationTypes'
import {weatherService} from '@/services/WeatherService'
import {fitnessService} from '@/services/FitnessService'

Vue.use(Vuex)

const state = {
  steps: 0,
  weather: ''
}

const getters = {
}

const mutations = {
  [SET_STEPS] (state, payload) {
    state.steps = payload.steps
  },
  [SET_WEATHER] (state, payload) {
    state.weather = payload.weather
  }
}

const actions = {
  loadSteps: ({commit}) => {
    fitnessService.getSteps(new Date().toISOString().slice(0, 10))
      .then((steps) => commit(SET_STEPS, {steps: steps}))
      .catch((error) => console.log(error))
  },
  loadWeather: ({commit}) => {
    weatherService.getWeatherSting(52.520645, 2013.409779)
      .then((weather) => commit(SET_WEATHER, {weather: weather}))
      .catch((error) => console.log(error))
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
