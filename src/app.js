import { ignoreOld } from 'grammy-middlewares'
import { Users } from './helpers/db.js'
import attachUser from './middlewares/attachUser.js'
import i18n from './helpers/i18n.js'
import configureI18n from './middlewares/configureI18n.js'
import handleMessage from './handlers/message.js'
import { run } from '@grammyjs/runner'
import bot from './helpers/bot.js'

import path from 'path'
import fs from 'fs'

import chalk from 'chalk'
/**
 * red - error
 * green - success
 * yellow - wait
 * blue - admin
 * magenta - debug
 */

async function main() {
	console.log(chalk.yellow('[*]'), 'Starting app...');
	
	bot
		// Middlewares
		.use(ignoreOld()) // ignore old messages
		.use(attachUser) // attach database user to ctx
		.use(i18n) // i18n plugin for locales
		.use(configureI18n) // setup i18n locale for user
		.use(handleMessage) 
	
	// Commands
	bot.command('start', ctx => ctx.reply('еблан'));
	bot.command('check', async ctx => {
		console.log(ctx.language)
	});

	// Errors
	bot.catch(err => {
		console.error(chalk.red('[X]'), err.error);
	});

	// Start bot
	await bot.init();
	run(bot);

	console.log(chalk.green('[!]'), `Bot @${bot.botInfo.username} is up and running!`);
}

main();