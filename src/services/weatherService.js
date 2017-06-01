import axios from 'axios'
import Promise from 'es6-promise-promise'
import {CONDITION_MAPPINGS} from '@/constants/weatherConditions'

class WeatherService {

  getWeatherSting (long, lat) {
    return new Promise((resolve, reject) => {
      this.getTodaysWeather(long, lat)
        .then((weather) => {
          for (const key of Object.keys(CONDITION_MAPPINGS)) {
            if (CONDITION_MAPPINGS[key].indexOf(parseInt(weather.code)) > -1) {
              resolve(key)
              return
            }
          }
          resolve('NOT_AVLAILABLE')
        })
        .catch((error) => reject(error))
    })
  }

  getTodaysWeather (long, lat) {
    return new Promise((resolve, reject) => {
      axios.get('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22(' + long + '%2C%' + lat + ')%22)%20and%20u%3D%22c%22&format=json')
        .then((response) => {
          if (response.data.query.results) {
            resolve({
              code: response.data.query.results.channel.item.condition.code,
              text: response.data.query.results.channel.item.condition.text,
              temp: response.data.query.results.channel.item.condition.temp
            })
          } else {
            reject({
              code: CONDITION_MAPPINGS.NOT_AVLAILABLE[0],
              text: '',
              temp: 0
            })
          }
        })
        .catch((error) => reject({
          code: CONDITION_MAPPINGS.NOT_AVLAILABLE[0],
          text: error,
          temp: 0
        }))
    })
  }
}

export let weatherService = new WeatherService()
