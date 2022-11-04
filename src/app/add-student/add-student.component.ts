import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  studentForm: Student = {
    id: 0,
    firstName: '',
    lastName: '',
    gender: 'Male',
    age: 0,
  };

  constructor(
    private studentService: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  create() {
    this.studentService.create(this.studentForm).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
