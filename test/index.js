import Server from '../index'
import { 
  BankListNameWithCodes,
  ValidBankAccount,
  InvalidBankAccount,
  accountCheckNumberError 
} from './mock'
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

  it ('Shoud return ok true if is valid bank account', (done) => {
    const request = buildRequest({
      method: 'POST',
      path: '/',
      payload: ValidBankAccount
    })
    instance.inject(request).then((response) => {
      const payload = JSON.parse(response.payload)
      const statusCode = response.statusCode
      expect(statusCode).to.be.equal(200)
      expect(payload.ok).to.be.equal(true)
      done(null)
    }).catch(done)
  })

  it ('Shoud return ok false and accountCheckNumber error', (done) => {
    const request = buildRequest({
      method: 'POST',
      path: '/',
      payload: InvalidBankAccount
    })
    instance.inject(request).then((response) => {
      const payload = JSON.parse(response.payload)
      const statusCode = response.statusCode
      expect(statusCode).to.be.equal(400)
      expect(payload.ok).to.be.equal(false)
      expect(!!payload.errors).to.be.equal(true)
      expect(payload.errors.length).not.be.equal(0)
      expect(payload.errors[0].code).to.be.equal(accountCheckNumberError.code)
      done(null)
    }).catch(done)
  })

  after((done) => {
    instance.stop().then(done).catch(done)
  })
})
