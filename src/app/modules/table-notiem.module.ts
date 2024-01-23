import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule, ButtonModule, CardModule, TableModule } from '@coreui/angular';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    CardModule,
    ButtonModule,
    DataTablesModule,
    TableModule,
    BadgeModule
  ]
})
export class TableNotiemModule { }
