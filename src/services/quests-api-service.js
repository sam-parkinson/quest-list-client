import TokenService from '../services/token-service';
import config from '../config';

const QuestsApiService = {
  getQuests() {
    return fetch(`${config.API_ENDPOINT}/quests`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getQuestAndTasks(id) {
    return fetch(`${config.API_ENDPOINT}/quests/${id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()  
      )
  }
}

export default QuestsApiService