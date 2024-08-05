import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent {

  student: Student | undefined; // Student model


  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.route.params.subscribe(params => {
      const studentId = params['id']; // Get the id from the route
      this.getStudentData(studentId); // Call the method to get student data
    });
  }


  getStudentData(studentId: string) {
    this.http.get<Student[]>('/assets/data.json').subscribe(data => {
      this.student = data.find(student => student.id === parseInt(studentId)); // Find the student with matching id
    });
  }

  onSubmit(): void {
    // Aqui você pode adicionar a lógica para salvar as alterações do estudante
    console.log('Estudante salvo:', this.student);
    this.router.navigate(['/students']); // Redireciona para a lista de estudantes após salvar
  }

}
