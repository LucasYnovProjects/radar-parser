import {IRadarData} from "../types/IRadarData";
import {Radar} from "../types/Radar";
import {AwesomeRadar} from "./AwesomeRadar";
import {B612Radar} from "./B612Radar";
import {RadarFormatNotSupported} from "./RadarFormatNotSupported";

export class RadarAdapter {
  constructor(
    private readonly data: any
  ) { }

  parse(): IRadarData {
    const formatAdapters: Radar[] = [
      new AwesomeRadar(),
      new B612Radar(),
    ];
    const adapter = formatAdapters.find((currentAdapter) => currentAdapter.isSupported(this.data));

    if (!adapter) {
      throw new RadarFormatNotSupported();
    }

    return adapter.parse(this.data);
  }
}
