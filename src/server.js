import Hapi from 'hapi'
import HapiRouter from 'hapi-router'
import Inert from 'inert'
import Vision from 'vision'
import HapiSwagger from 'hapi-swagger'

export default (environment) => {
  return new Promise((resolve, reject) => {
    const Server = new Hapi.Server()

    Server.connection({
      host: environment.APP_HOST,
      port: environment.APP_PORT,
    })

    Server.register({
      register: HapiRouter,
      options: {
        routes: `${environment.APP_ROUTER}`
      }
    }, (err) => {
      if (err) throw err
    })

    Server.register([
      Inert,
      Vision, {
        register: HapiSwagger,
        options: {
          info: {
            title: 'Bank Account Validator API',
            version: '0.0.1'
          },
          debug: true
        }
      }], (err) => {
      if (err) throw err
    })

    Server.start((err) => {
      if (err) {
        return reject(err)
      }
      return resolve(Server)
    })
  })
}
