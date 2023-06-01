import getAllIncidents from "../../queries/getAllIncidents";
import { ICommandWithoutArgsParams } from "../../types/CommandArgs";

export default [
  'getAllIncidents',
  'Fetch all incidents',
  () => console.log(getAllIncidents())
] as ICommandWithoutArgsParams;