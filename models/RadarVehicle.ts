export interface IRadarVehicle {
  type?: string,
  brand?: string,
}

export class RadarVehicle {
  constructor(
    private readonly vehicle: IRadarVehicle | undefined
  ) { }

  type(): string | undefined {
    return this.vehicle?.type;
  }

  brand(): string | undefined {
    return this.vehicle?.brand;
  }

  value(): IRadarVehicle {
    return {
      type: this.type(),
      brand: this.brand(),
    };
  }
}