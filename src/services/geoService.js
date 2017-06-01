import axios from 'axios'
import Promise from 'es6-promise-promise'

class GeoService {

  getCurrentPos () {
    return new Promise((resolve, reject) => {
      axios.get('http://freegeoip.net/json/')
        .then((response) => {
          if (response.data.latitude && response.data.longitude) {
            resolve({
              lat: response.data.latitude,
              long: response.data.longitude
            })
          } else {
            reject('no lat and long found')
          }
        })
        .catch((error) => reject(error))
    })
  }
}

export let geoService = new GeoService()
