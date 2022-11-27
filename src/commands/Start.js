const command = {
	data: {
		name: '/start',
		aliases: ['start', 'help', 'старт', 'помощь'],
	},
	
	async execute(ctx, args) {
		ctx.reply(ctx.t('start'));
	},
};

export default command;