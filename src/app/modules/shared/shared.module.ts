import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [UnderConstructionComponent, NotFoundComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, UnderConstructionComponent, NotFoundComponent],
})
export class SharedModule {}
