import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { InterestComponent } from "./interest.component";
import { InterestRoutingModule } from "./interest-routing.module";



@NgModule({
  declarations: [
   InterestComponent

  ],
  imports: [
    CommonModule,
    InterestRoutingModule

  ]
})
export class InterestModule { }
