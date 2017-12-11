export const BankListNameWithCodes = [{
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


export const ValidBankAccount = {
  bankNumber: "001",
  agencyNumber: "1584",
  agencyCheckNumber: "9",
  accountNumber: "00210169",
  accountCheckNumber: "6",
}

export const InvalidBankAccount = {
  bankNumber: "001",
  agencyNumber: "1584",
  agencyCheckNumber: "9",
  accountNumber: "00210169",
  accountCheckNumber: "0",
}

export const accountCheckNumberError = {
    "description": "Dígito da conta não corresponde ao número da conta/agência preenchido",
    "code": "ACCOUNT_CHECK_NUMBER_DONT_MATCH"
}
