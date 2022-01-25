import { Component, OnInit } from '@angular/core';
import { IProject } from '../../project.model';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'af-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects: IProject[] = [];
  public diningProject: IProject = {
    name: 'Dining Selector',
    url: '/projects/dining-selector',
    gitUrl: 'https://github.com/admiralfeb/dining-selector',
    description:
      "Using the npm library I coded '@admiralfeb/dining-selector', Vue is able to provide a dining selection.",
    technologies: ['Typescript'],
  };

  constructor(private service: ProjectsService) {}

  async ngOnInit(): Promise<void> {
    this.projects = await this.service.fetchProjects();
  }
}
