#! /usr/bin/env node
import fetchAll from './fetchAll';
import yargs, { } from 'yargs';

const usage = '\nUsage: radar-parser <action>';
const options = yargs
  .usage(usage)
  .command('fetchAll', 'Fetch all incidents', (argv) => fetchAll())
  .help(true)
  .argv;
