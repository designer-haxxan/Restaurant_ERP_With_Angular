import { Component, OnInit } from '@angular/core';
import { Resty } from '../interfaces/resty';
import { RestServicesService } from '../services/rest-services.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  alldata:Resty[]=[];
  displayedColumns: string[] = ['id', 'name', 'address', 'phone','description','location','Action'];
  constructor(private service:RestServicesService,public dialog: MatDialog) {}

ngOnInit(): void {
  this.getalldata();
}

getalldata(){
  this.service.getall().subscribe((data)=>{
    this.alldata = data;
    
  });
}


opendialogue(id:Number){


const confirm=this.dialog.open(DeleteComponent,{
  width:'300px',
  data:{id}
});



confirm.afterClosed().subscribe((result)=>{
  if(result){
    this.alldata=this.alldata.filter((_)=> _.id !== id);
  }
})



}





}
