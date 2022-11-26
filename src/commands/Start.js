const command = {
	data: {
		name: '/start'
	},
	async execute(ctx, args) {
		ctx.reply(ctx.t('start'));
	},
};

export default command;