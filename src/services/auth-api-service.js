import config from '../config';
import TokenService from './token-service';
import IdleService from './idle-service';

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(res => {
        TokenService.saveAuthToken(res.authToken);
        IdleService.registerIdleTimerResets();
        TokenService.queueCallbackBeforeExipry(() => {
          AuthApiService.postRefreshToken()
        })
        return res
      })
      .catch(err => {
        console.error(err)
      });
  },
  postRefreshToken() {
    return fetch(`${config.API_ENDPOINT}/auth/refresh`, {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
    .then(res => {
      TokenService.saveAuthToken(res.authToken);
      TokenService.queueCallbackBeforeExipry(() => {
        AuthApiService.postRefreshToken()
      })
      return res
    })
    .catch(err => {
      console.error(err)
    });
  }
}

export default AuthApiService