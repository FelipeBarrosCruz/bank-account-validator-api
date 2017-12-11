import BankAccountValidator from 'bank-account-validator-js'

const BankListNameWithCodes = [{
  code: '001',
  name: 'BANCO DO BRASIL S.A'
}, {
  code: '237',
  name: 'BANCO BRADESCO S.A'
}, {
  code: '341',
  name: 'BANCO ITAÚ S.A'
}, {
  code: '104',
  name: 'CAIXA ECONOMICA FEDERAL'
}, {
  code: '033',
  name: 'BANCO SANTANDER BANESPA S.A'
}, {
  code: '399',
  name: 'HSBC BANK BRASIL S.A'
}, {
  code: '151',
  name: 'BANCO NOSSA CAIXA S.A'
}, {
  code: '745',
  name: 'BANCO CITIBANK S.A'
}, {
  code: '041',
    name: 'BANCO DO ESTADO DO RIO GRANDE DO SUL S.A'
}]


export const SelectHandler = (request, reply) => {
  return reply(BankListNameWithCodes).code(200)
}


export const PostHandler = (request, reply) => {
  const payload = request.payload
  BankAccountValidator.Moip.BankAccount.validate(payload)
    .then(() => {
      return reply({ ok: true }).code(200)
    }).catch((err) => {
      return reply(Object.assign({ ok: false}, err)).code(400)
    })
}