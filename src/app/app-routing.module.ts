import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
 
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import {TestComponent} from './test/test.component';
 
const routes: Routes = [
    { path:'department', component:DepartmentComponent },
    { path:'employee', component:EmployeeComponent },
    { path:'test', component:TestComponent}
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
export class AppRoutingModule { }