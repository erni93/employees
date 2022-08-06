import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    CardComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, PaginatorComponent]
})
export class ComponentsModule { }
