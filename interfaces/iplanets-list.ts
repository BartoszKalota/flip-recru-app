import { IPlanet } from './iplanet';

export interface IPlanetsList {
  count: number;
	results: IPlanet[];
	next?: string;
	previous?: string;
}

export interface IProps {
  planets: IPlanetsList;
}
