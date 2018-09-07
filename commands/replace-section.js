const open = '<div class="slide">';
const close = '</div>';

module.exports = (html, replaceFn) =>
	replaceFn(
		replaceFn(html, '<main-sld>', open),
		'</main-sld>',
		close
	);