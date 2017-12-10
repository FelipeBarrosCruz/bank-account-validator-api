import Server from '../index'
import { BankListNameWithCodes } from './mock'
import { buildRequest } from './helper'
import { expect } from 'chai'

describe('Bank Account Validator API', () => {
  let instance = null

  before((done) => {
    Server.then((server) => {
      instance = server
      done(null)
    }).catch(done)
  })

  it ('Expect the instance is not null', (done) => {
    expect(instance).not.be.equal(null)
    done(null)
  })

  it ('Should return All Banks', (done) => {
    const request = buildRequest({
      method: 'GET',
      path: '/'
    })
    instance.inject(request).then((response) => {
      const payload = JSON.parse(response.payload)
      const statusCode = response.statusCode
      expect(statusCode).to.be.equal(200)
      expect(Array.isArray(payload)).to.be.equal(true)
      expect(payload.length).not.equal(0)
      done(null)
    }).catch(done)
  })

  after((done) => {
    instance.stop().then(done).catch(done)
  })
})
