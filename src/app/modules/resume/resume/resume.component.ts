import { Component, OnInit } from '@angular/core';
import { IResume } from '../models/resume.model';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'af-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  public resume: IResume | undefined;
  constructor(private service: ResumeService) {}

  async ngOnInit(): Promise<void> {
    this.resume = await this.service.fetchResume();
  }
}
