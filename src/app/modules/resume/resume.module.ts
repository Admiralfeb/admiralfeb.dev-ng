import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { ResumeDataComponent } from './resume-data/resume-data.component';



@NgModule({
  declarations: [
    ResumeComponent,
    ResumeDataComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResumeModule { }
