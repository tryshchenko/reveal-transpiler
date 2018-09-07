const replace = (html, pattern, target) => {
	if (html === undefined) {
		throw new Error(`Missed HTML on some middleware level. Please check you middlewares. Replacement target: ${target}`);
	}
	const regexp = new RegExp(pattern, 'g');
	return html.replace(regexp, target);
};

module.exports = replace;