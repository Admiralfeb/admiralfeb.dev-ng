import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { ResumeDataComponent } from './resume-data/resume-data.component';
import { SharedModule } from '../shared/shared.module';
import { ResumeService } from './resume.service';

@NgModule({
  declarations: [ResumeComponent, ResumeDataComponent],
  imports: [CommonModule, SharedModule],
  providers: [ResumeService],
})
export class ResumeModule {}
