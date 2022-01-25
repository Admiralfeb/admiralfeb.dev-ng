import { IDbItem } from '../../models/dbItem.model';

export interface IProject extends IDbItem {
  name: string;
  url: string;
  gitUrl: string;
  description: string;
  technologies: string[];
}
