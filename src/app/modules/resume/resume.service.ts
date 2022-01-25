import { Injectable } from '@angular/core';
import { ServerService } from '../shared/server.service';
import { ResumeModule } from './resume.module';

@Injectable({
  providedIn: ResumeModule,
})
export class ResumeService {
  constructor(private server: ServerService) {}

  fetchResume = () => {};
}
