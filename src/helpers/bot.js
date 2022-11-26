import { Bot } from 'grammy'
import env from './env.js'

const bot = new Bot(env.TOKEN);

export default bot;