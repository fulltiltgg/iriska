import { Context as DContext } from "grammy";

class Context extends DContext {
	replyi18n(text, other, ...rest) {
		text = this.t(text);
		return this.reply(text, other, ...rest);
	}
}

export default Context;

