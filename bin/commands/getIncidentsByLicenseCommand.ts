import getIncidentsByLicense from "../../queries/getIncidentsByLicense"
import { ICommandWithArgsParams } from "../../types/CommandArgs";

export default [
  'getIncidentsByLicense',
    'Fetch incidents for a given license',
    (yargs: any) => {
      yargs.positional('license', {
        type: 'string',
        describe: '`license` to find incidents from',
        demandOption: true,
      })
    },
    (argv: any): void => console.log(getIncidentsByLicense(argv.license))
] as ICommandWithArgsParams;