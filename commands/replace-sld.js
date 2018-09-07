const open = '<div class="slide">';
const close = '</div>';

module.exports = (html, replaceFn) =>
	replaceFn(
		replaceFn(html, '<sld>', open),
		'</sld>',
		close
	);