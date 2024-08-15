import { CommonModule } from "@angular/common";
import { LOCALE_ID, NgModule } from '@angular/core';
import { InterestComponent } from "./interest.component";
import { InterestRoutingModule } from "./interest-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';
registerLocaleData(localePt, 'pt-BR', localePtExtra);

@NgModule({
  declarations: [
    InterestComponent
  ],
  imports: [
    CommonModule,
    InterestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class InterestModule { }
