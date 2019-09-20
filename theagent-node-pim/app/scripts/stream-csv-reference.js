const dotenv = require('dotenv');
const program = require('commander');
const { Container } = require('typedi');

const dependencyInjectorLoader = require('./../loaders/di');

dotenv.config();
dependencyInjectorLoader();

const logger = Container.get('loader.logger');

program
  .version('0.0.1')
  .usage('[options]')
  .option('-d, --debug', 'output extra debugging', false)
  .option('-w, --word <word>', 'some words');

program.parse(process.argv);

if (program.debug) {
  logger.debug(program.opts());
}

const word = program.word ? program.word : 'hello world';
console.log(word);
process.exit(0);
