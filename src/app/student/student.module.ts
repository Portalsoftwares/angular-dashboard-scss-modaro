import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importação do FormsModule

import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentRoutingModule } from './student-routing.module';



@NgModule({
  declarations: [
    StudentCreateComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class StudentModule { }
