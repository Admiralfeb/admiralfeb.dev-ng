import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { genericSortArray } from 'src/app/utils/sort';
import { ServerService } from '../shared/server.service';
import { IProject } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectData: IProject[] = [];
  constructor(private server: ServerService) {}

  fetchProjects = async (): Promise<IProject[]> => {
    if (this.projectData.length > 0) {
      return this.projectData;
    }

    const response = await lastValueFrom(this.server.getData<IProject[]>('projects'));

    this.projectData = genericSortArray(response ?? [], { order: 'asc', orderBy: 'name' });

    return this.projectData;
  };
}
