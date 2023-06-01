export type ICommandWithArgsParams = [
  string,
  string,
  (yargs: any) => void,
  (arg: any) => void
];

export type ICommandWithoutArgsParams = [
  string,
  string,
  (arg: any) => void
];