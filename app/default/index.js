import {
  SelectHandler,
  PostHandler
} from './handler'

import {
  PostValidate
} from './validate'

export default [{
  method: 'GET',
  path: `/`,
  config: {
    tags: ['api'],
    description: 'Select all Banks',
    notes: 'Returns 200 with bank list',
    handler: SelectHandler
  }
}, {
  method: 'POST',
  path: `/`,
  config: {
    tags: ['api'],
    description: 'Validate the account info is valid',
    notes: 'Returns 200 with ok or 400 with the errors',
    handler: PostHandler,
    validate: PostValidate
  }
}]
