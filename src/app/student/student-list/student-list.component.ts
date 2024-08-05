import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';
import * as jsonData from 'src/assets/data.json';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  students: Student[] = [];
  data: any[] ;

  constructor(private http: HttpClient) {
    this.data = jsonData as Student[];
    console.log('data', JSON.stringify(this.data) );
    this.http.get<any[]>('assets/data.json').subscribe(
      (data: any[]) => {
        console.log('jsondata', data);
        this.students = data;
        console.log(this.students);
      },
      (error) => {
        console.error('Erro ao carregar o arquivo data.json:', error);
      }
    );
  console.log('data 0', this.data[0] as Student);

  }
  deleteStudent(student: Student): void {
    const index = this.students.indexOf(student);
    this.students.splice(index, 1);
  }

}
