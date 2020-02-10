import axios from 'axios'

export default function (config, type, callBack, errorType, errorCallBack, message) {
  return axios(config)
    .then(({ data }) => ({
      type,
      payload: callBack ? callBack(data) : data
    }))
    .catch(() => ({
      type: errorType || 'NETWORK_ERROR',
      payload: (errorCallBack && errorCallBack())
        || message || { message: 'Network Error' }
    }))
}