import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardComponent } from './card/card.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    CardComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [CardComponent, PaginatorComponent]
})
export class ComponentsModule { }
