import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { InterestComponent } from "./interest.component";
import { InterestRoutingModule } from "./interest-routing.module";
import { FormsModule } from '@angular/forms'; // Importação do FormsModule
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
   InterestComponent

  ],
  imports: [
    CommonModule,
    InterestRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class InterestModule { }
