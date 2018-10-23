#!/usr/bin/env node

const minimist = require('minimist');
const chalk = require('chalk');
const ncp = require('ncp');
const path = require('path');

const ASSETS_PATH = path.normalize(`${__dirname}/../assets`);

const {
  _: [operation],
} = minimist(process.argv.slice(2));

const ok = msg => console.log(chalk.black.bgGreen(msg)); // eslint-disable-line no-console

const error = msg => console.log(chalk.black.bgRed(msg)); // eslint-disable-line no-console

const copy = () => {
  const opts = { alias: { copyDestination: ['destination', 'd', 'dest'] } };
  const { copyDestination } = minimist(process.argv.slice(2), opts);
  const destination = path.normalize(copyDestination);
  ncp(ASSETS_PATH, destination, err => {
    if (err) {
      error(`Assets not copied: ${err.message}`);
      throw err;
    }
    ok(`Assets copied to "${destination}"`);
  });
};

const operations = {
  copy,
};

const { [operation]: action } = operations;

if (!action) {
  error(`Operation "${operation}" does not exist.`);
} else {
  action();
}
