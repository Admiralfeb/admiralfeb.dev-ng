import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiningSelectorComponent } from './components/dining-selector/dining-selector.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent, pathMatch: 'full' },
  { path: 'dining-selector', component: DiningSelectorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
