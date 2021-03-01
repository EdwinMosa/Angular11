import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://localhost:60492/api";
readonly PhotoUrl = "http://localhost:60492/Photos";

  constructor(private http:HttpClient) { }

  //List all departments
  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department');
  }

  //Add department
  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  //Update department
  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  //Delete department
  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department',val);
  }

  //List all employees
  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  //Add employee
  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  //Update employee
  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  //Delete employee
  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee',val);
  }

  //Upload the selected file
  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile', val);
  }

  //Get all department names
  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentName');
  }
}
