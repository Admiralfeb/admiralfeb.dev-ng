import { IExperience } from './experience.model';
import { ISkill } from './skill.model';

export interface IResume {
  experience: IExperience[];
  skills: ISkill[];
}
