import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './card/card.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SelectItemComponent } from './select-item/select-item.component';

@NgModule({
  declarations: [
    CardComponent,
    PaginatorComponent,
    SelectItemComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [CardComponent, PaginatorComponent, SelectItemComponent]
})
export class ComponentsModule { }
