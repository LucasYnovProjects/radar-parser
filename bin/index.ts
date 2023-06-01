#! /usr/bin/env node
import yargs from 'yargs';
import getAllIncidentsCommand from './commands/getAllIncidentsCommand';
import getIncidentsByLicenseCommand from './commands/getIncidentsByLicenseCommand';
import getIncidentsByDateCommand from './commands/getIncidentsByDateCommand';

const usage = '\nUsage: radar-parser <action>';
yargs
  .scriptName("radar-parser")
  .usage(usage)
  .command(...getAllIncidentsCommand)
  .command(...getIncidentsByDateCommand)
  .command(...getIncidentsByLicenseCommand)
  .help()
  .argv;