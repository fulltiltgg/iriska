async function configureI18n(ctx, next) {
	await ctx.i18n.useLocale(ctx.dbuser.languageCode);

	await next();
}

export default configureI18n;