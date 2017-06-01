import axios from 'axios'
import Promise from 'es6-promise-promise'

class FitnessService {

  getSteps (dateString) {
    return new Promise((resolve, reject) => {
      axios.get('https://api.fitbit.com/1/user/-/activities/date/' + dateString + '.json', {
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0UDY0S0siLCJhdWQiOiIyMjhIUlgiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyYWN0IHJociIsImV4cCI6MTUyNjcxOTM5NiwiaWF0IjoxNDk1MTgzMzk2fQ.3AbKknPLosxRCnl5B6H1w6D5hIsn1LLR3tRHQ9eF6NM'}
      })
        .then((response) => resolve(response.data.summary.steps))
        .catch((error) => reject(error))
    })
  }
}

export let fitnessService = new FitnessService()
