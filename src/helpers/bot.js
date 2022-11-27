import { Bot } from 'grammy'
import Context from './../models/Context.js'
import env from './env.js'

const bot = new Bot(env.TOKEN, {
  ContextConstructor: Context,
});

export default bot;