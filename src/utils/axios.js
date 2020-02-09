import axios from 'axios'

export default function (config, type, callBack, message) {
  return axios(config)
    .then(({ data }) => ({
      type,
      payload: callBack ? callBack(data) : data
    }))
    .catch(error => ({
      type: 'NETWORK_ERROR',
      payload: message || { message: 'Network Error'}
    }))
}