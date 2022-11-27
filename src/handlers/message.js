import { cwd } from 'process'
import { resolve, join } from 'path'
import { readdirSync } from 'fs'

import chalk from 'chalk'

const commands = new Map();

const commandsPath = resolve(cwd(), 'src/commands/');
const commandsList = readdirSync(commandsPath).filter(f => f.endsWith('.js'));

for (let commandName of commandsList) {
	const command = await import(`./../commands/${commandName}`);

 	commands.set(command.default.data.name, command.default);

 	for (const alias of command.default.data?.aliases||[]) {
 		commands.set(alias, command.default);
 	}
}

async function handleMessage(ctx, next) {
	const args = ctx.msg.text/*.slice(0)*/.trim().split(/ +/);
	const commandName = args.shift().toLowerCase();


	const command = commands.get(commandName);

	if (!command) return await next();

	try {
		command.execute(ctx, args);
	} catch (err) {
		console.error(chalk.red('[X]'), err);
	}
}

export default handleMessage;