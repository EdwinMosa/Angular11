import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  //Declare variables
  DepartmentList:any=[];

  dep:any;
  ModalTitle:string="";
  ActicateAddEditDepComp:boolean=false;
  

  ngOnInit(): void {
    this.refreshDepList();
  }

  //When user click the add department button
  addClick(content: any){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActicateAddEditDepComp=true;
    //alert("testing");
  }

  //Edit department
  editClick(item: any){
    this.dep=item;
    this.ModalTitle="Edit Department";
    this.ActicateAddEditDepComp = true;
  }
  //When user click the close button
  closeClick(){
    this.ActicateAddEditDepComp=false;
    this.refreshDepList();
  }

  //Display department list in a table
  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
    })
  }

  deleteClick(){

  }
}
