import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ResumeDataComponent } from './resume-data/resume-data.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [ResumeComponent, ResumeDataComponent],
  exports: [ResumeComponent],
  imports: [CommonModule, SharedModule],
})
export class ResumeModule {}
