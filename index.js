const started = Date.now();
const fs = require('fs');
const replaceFn = require('./helpers/replace');
const commands = [
	'wrap-html',
	'replace-section',
	'replace-headers',
	'replace-sld'
];

const html = fs.readFileSync('./source.html');

const loadMiddlewares = (commands) =>
	commands.map(command => require(`./commands/${command}`));


const app = (html, target, encoding) =>
	fs.writeFileSync(
		target,
		loadMiddlewares(commands).reduce((prev, next) => next(prev, replaceFn), html),
		encoding
	);

app(html, './result.html' ,'utf-8');
console.log('Finished. Time spent', Date.now() - started, 'ms');
