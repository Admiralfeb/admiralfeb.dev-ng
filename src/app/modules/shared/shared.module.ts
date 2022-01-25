import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [UnderConstructionComponent, LoaderComponent, NotFoundComponent],
  imports: [CommonModule],
  exports: [UnderConstructionComponent, NotFoundComponent, LoaderComponent],
})
export class SharedModule {}
