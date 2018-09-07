const fs = require('fs');
const template = fs.readFileSync('./commands/wrap-html.html', 'utf-8');

module.exports = (html, replaceFn) =>
	replaceFn(template, '<presentation />', html);