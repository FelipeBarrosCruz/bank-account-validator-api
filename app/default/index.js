import {
  SelectHandler
} from './handler'

export default [{
  method: 'GET',
  path: `/`,
  config: {
    tags: ['api'],
    description: 'Select all Banks',
    notes: 'Returns 200 with bank list',
    handler: SelectHandler
  }
}]
