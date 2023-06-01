import {Radar} from "../models/Radar";

export interface RadarParser {
  parse(data: any): Radar,
  isSupported(data: any): boolean,
}