import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, FormModule } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormModule,
    CardModule,
    ButtonModule,
    IconModule,
  ]
})
export class FormNotiemModule { }
