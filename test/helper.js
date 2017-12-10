import QueryString  from 'qs'
import _ from 'lodash'
import { config } from 'dotenv'

export const Environment = config().parsed
const APP_HOST = Environment.APP_HOST || 'localhost'
const APP_PORT = Environment.APP_PORT || 3000
const DEFAULT_OPTIONS = {
  method: 'GET',
  url: `http://${APP_HOST}:${APP_PORT}`
}

export const buildRequest = (data) => {
  const options = _.clone(DEFAULT_OPTIONS)
  if (data.path) {
    options.url = Array.isArray(data.path)
                ? options.url.concat(`/${data.path.join('/')}`)
                : options.url.concat(data.path)
  }
  if (data.query) {
    options.url = options.url.concat(`?${QueryString.stringify(data.query)}`)
  }
  if (data.payload) {
    options.payload = data.payload
  }
  if (data.method) {
    options.method = data.method
  }
  return options
}
