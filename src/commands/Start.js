const command = {
	data: {
		name: '/start',
		aliases: ['start', 'help', 'старт', 'помощь', 'хелп'],
	},
	
	async execute(ctx, args) {
		ctx.replyi18n('start');
	},
};

export default command;