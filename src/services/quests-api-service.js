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
  },
  postQuest(quest_name, quest_desc) {
    return fetch(`${config.API_ENDPOINT}/quests`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        quest_name: quest_name,
        quest_desc: quest_desc,
      })
    })
      .then(res =>
        (!res.ok) 
          ? res.json().then(e => Promise.reject(e))
          : res.json()   
      )
  },
  postTask(task_name, task_desc, quest_id) {
    return fetch(`${config.API_ENDPOINT}/tasks`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        task_name,
        task_desc,
        quest_id
      })
    })
      .then(res =>
        (!res.ok) 
          ? res.json().then(e => Promise.reject(e))
          : res.json()   
      )
  },
  updateQuest(quest_id, obj) {
    return fetch(`${config.API_ENDPOINT}/quests/${quest_id}`, {
      method: 'PATCH',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(obj)
    })
      .then(res =>
        (!res.ok) 
          ? res.json().then(e => Promise.reject(e))
          : res.json()   
      )
  },
  updateTask(task_id, obj) {
    return fetch(`${config.API_ENDPOINT}/tasks/${task_id}`, {
      method: 'PATCH',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(obj)
    })
      .then(res =>
        (!res.ok) 
          ? res.json().then(e => Promise.reject(e))
          : res.json()   
      )
  },
  deleteQuest(quest_id) {
    return fetch(`${config.API_ENDPOINT}/quests/${quest_id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
  },
  deleteTask(task_id) {
    return fetch(`${config.API_ENDPOINT}/tasks/${task_id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
  },
}

export default QuestsApiService