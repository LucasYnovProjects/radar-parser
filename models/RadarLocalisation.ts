export class RadarLocalisation {
  constructor(
    private readonly localisation: string,
  ) { }

  value(): string {
    return this.localisation;
  }
}