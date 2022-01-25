import { IDbItem } from '../../../models/dbItem.model';

export interface ISkill extends IDbItem {
  skill: string;
  ul?: string[];
}
