import { Launch } from './launch';
import { Rocket } from './rocket';

export interface Detail {
  launch: Launch;
  rocket: Rocket;
  favorite?: boolean;
}
