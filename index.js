import Server from './src/server'
import { config } from 'dotenv'

const Environment = config().parsed
export default new Server(Environment)
