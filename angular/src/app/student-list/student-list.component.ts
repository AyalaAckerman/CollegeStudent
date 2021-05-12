import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentModel } from '../models/studentModel';
import { TypeEnum } from '../enums/typeEnum';
import { queue } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  constructor(private service: StudentService) {
    // this.studentList=this.service.studentList;
  }
  studentList: StudentModel[] = [];

  ngOnInit(): void {
    this.service.GetStudentList().subscribe((x) => {
      this.studentList = x;
      this.studentList.forEach(y => {
        y.type = TypeEnum[y.type as unknown as keyof typeof TypeEnum]
      });
    });
  }
  textToSearch: string = "";
  filterStudents() {
    this.service.GetFilterStudentList(this.textToSearch).subscribe((x) => {
      this.studentList = x;
      this.studentList.forEach(y => {
        y.type = TypeEnum[y.type as unknown as keyof typeof TypeEnum]
      });
    });
  }
  direction: number = 0;
    isDesc: boolean = false;
    column: string = "";
    sort(property: any) {
      this.isDesc = !this.isDesc; //change the direction    
      this.column = property;
      this.direction = this.isDesc ? 1 : -1;
    }

  }
