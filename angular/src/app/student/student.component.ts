import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentModel } from '../models/studentModel';
import { ActivatedRoute } from '@angular/router';
import { TypeEnum } from '../enums/typeEnum';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private service: StudentService, private route: ActivatedRoute) { }
  id!: number ;
  allStudentList: StudentModel[] = [];
  studentList: StudentModel[] = [];
  student!: StudentModel;
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.GetStudentById(this.id).subscribe(x => {
    this.student = x;
    this.student.type = TypeEnum[this.student.type as unknown as keyof typeof TypeEnum]
    });
  }
}


