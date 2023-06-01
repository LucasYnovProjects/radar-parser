import getIncidentsByDate from "../../queries/getIncidentsByDate";
import { ICommandWithArgsParams } from "../../types/CommandArgs";

export default [
  'getIncidentsByDate',
  'Fetch incidents for a given date',
  (yargs: any) => {
    yargs.positional('date', {
      type: 'string',
      describe: '`date` to find incidents from',
      demandOption: true,
    })
  },
  (argv: any): void => console.log(getIncidentsByDate(argv.date))
] as ICommandWithArgsParams;