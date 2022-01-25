import { Component, Input } from '@angular/core';
import { IExperience } from '../models/experience.model';
import { ISkill } from '../models/skill.model';

@Component({
  selector: 'af-resume-data',
  templateUrl: './resume-data.component.html',
  styleUrls: ['./resume-data.component.scss'],
})
export class ResumeDataComponent {
  @Input() skills: ISkill[] = [];
  @Input() experience: IExperience[] = [];
  constructor() {}
}
