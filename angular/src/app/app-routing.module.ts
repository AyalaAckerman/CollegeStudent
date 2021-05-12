import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'list',component:StudentListComponent},
  {path:'studentDetails/:id',component:StudentComponent},
  { path: '',
  redirectTo: '/list',
  pathMatch: 'full'
 },
  // { path: '**', component: StudentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

