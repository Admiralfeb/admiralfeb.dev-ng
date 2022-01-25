import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../../project.model';

@Component({
  selector: 'af-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() project!: IProject;
  @Input() isLocalProject = false;
  constructor() {}
}
