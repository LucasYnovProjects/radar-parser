import {IRadarData} from "../types/IRadarData";
import {Radar} from "../types/Radar";
import {AwesomeRadar} from "./AwesomeRadar";
import {B612Radar} from "./B612Radar";
import {RadarFormatNotSupported} from "./errors/RadarFormatNotSupported";
import {Reporter2000XML} from "./Reporter2000XML";

export class RadarAdapter {
  constructor(
    private readonly data: any
  ) { }

  parse(): IRadarData {
    const formatAdapters: Radar[] = [
      new AwesomeRadar(),
      new B612Radar(),
      new Reporter2000XML(),
    ];
    const adapter = formatAdapters.find((currentAdapter) => currentAdapter.isSupported(this.data));

    if (!adapter) {
      throw new RadarFormatNotSupported();
    }

    return adapter.parse(this.data);
  }
}
