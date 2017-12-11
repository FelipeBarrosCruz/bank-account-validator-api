import Joi from 'joi'

export const PostValidate = {
  payload: {
    bankNumber: Joi.string()
      .required()
      .description('the bank number'),

    agencyNumber: Joi.string()
      .required()
      .description('the agency number of account'),

    agencyCheckNumber: Joi.string()
      .optional()
      .length(1)
      .empty('')
      .description('the agency digit number check of account'),

    accountNumber: Joi.string()
      .required()
      .description('the account number'),

    accountCheckNumber: Joi.string()
      .required()
      .description('the account digit number check')
  }
}
