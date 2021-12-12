import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicsComponent } from './pages/basics/basics.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { SortComponent } from './pages/sort/sort.component';

import { AlphaSortPipe } from './pipes/sort.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
  declarations: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    SortComponent,
    AlphaSortPipe,
    FlyPipe,
    UppercasePipe,
  ],
  exports: [
    NumbersComponent,
    NotCommonsComponent,
    BasicsComponent,
    SortComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
})
export class SalesModule {}
