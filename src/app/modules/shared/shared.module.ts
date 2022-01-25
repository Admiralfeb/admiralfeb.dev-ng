import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerService } from './server.service';

@NgModule({
  declarations: [UnderConstructionComponent, LoaderComponent, NotFoundComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [UnderConstructionComponent, NotFoundComponent, LoaderComponent],
})
export class SharedModule {}
