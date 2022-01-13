import { API } from 'constants/api';
import { IPlanetsList } from "interfaces/iplanets-list";

export const getPlanetsList = async (
  currentPage: number,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setPlanets: React.Dispatch<React.SetStateAction<IPlanetsList | null>>,
) => {
  setIsLoading(true);
  const res = await fetch(`${API}/planets/?page=${currentPage}`);
  const data: IPlanetsList = await res.json();
  setPlanets(data);
  setIsLoading(false);
};
