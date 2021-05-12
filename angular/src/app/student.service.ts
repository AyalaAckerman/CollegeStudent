import { Injectable } from '@angular/core';
import { TypeEnum } from './enums/typeEnum';
import { StudentModel } from './models/studentModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsUrl: string = "https://localhost:44369/Student/";
  constructor(private http: HttpClient) { }
  GetStudentList(): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(`${this.studentsUrl}GetStudentList`)
  }
  GetFilterStudentList(text: string): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(`${this.studentsUrl}GetStudentBySearch?text=${text}`)

  }
  GetStudentById(id: number): Observable<StudentModel> {
     return this.http.get<StudentModel>(`${this.studentsUrl}GetStudentById?id=${id}`)

  }
}


