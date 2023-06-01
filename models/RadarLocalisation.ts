export class RadarLocalisation {
  constructor(
    private readonly localisation: string | undefined,
  ) { }

  value(): string | undefined {
    return this.localisation;
  }
}