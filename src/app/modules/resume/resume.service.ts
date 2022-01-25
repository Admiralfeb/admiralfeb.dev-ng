import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ServerService } from '../shared/server.service';
import { IResume } from './models/resume.model';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private resumeData: IResume | undefined;

  constructor(private server: ServerService) {}

  fetchResume = async (): Promise<IResume> => {
    if (this.resumeData) {
      return this.resumeData;
    }

    const resume = await lastValueFrom(this.server.getData<IResume>('resume'));
    const experience = resume.experience;

    const parsedExperience = experience.map((item) => {
      const formatter = new Intl.DateTimeFormat('en-us', { month: 'long', year: 'numeric' });

      const startDate = new Date(item.startDate + '-01');
      const periodStart = formatter.format(startDate.setMonth(startDate.getMonth() + 1));

      const endDate = item.endDate ? new Date(item.endDate + '-01') : 'Current';
      const periodEnd = endDate === 'Current' ? 'Current' : formatter.format(endDate.setMonth(endDate.getMonth() + 1));

      const totalPeriod = `${periodStart} - ${periodEnd}`;
      item.datePeriod = totalPeriod;
      return item;
    });

    this.resumeData = { ...resume, experience: parsedExperience };
    return this.resumeData;
  };
}
