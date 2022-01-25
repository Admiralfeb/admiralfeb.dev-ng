import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsModule } from './modules/projects/projects.module';
import { ResumeModule } from './modules/resume/resume.module';
import { ResumeComponent } from './modules/resume/resume/resume.component';
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ResumeModule,
    ProjectsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'resume', component: ResumeComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
