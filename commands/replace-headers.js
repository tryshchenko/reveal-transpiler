const open = '<h1 class="heading reveal-heading">';
const close = '</h1>';

module.exports = (html, replaceFn) =>
	replaceFn(
		replaceFn(html, '<h>', open),
		'</h>',
		close
	);