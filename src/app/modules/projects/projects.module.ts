import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DiningSelectorComponent } from './components/dining-selector/dining-selector.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectComponent } from './components/project/project.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectsComponent, DiningSelectorComponent, ProjectComponent],
  imports: [CommonModule, FormsModule, SharedModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
