import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AgePipe } from './pipes/age.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentComponent, 
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      CommonModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent],
})
export class AppModule { }
