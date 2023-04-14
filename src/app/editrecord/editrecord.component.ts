import { Component, OnInit } from '@angular/core';
import { Resty } from '../interfaces/resty';
import { RestServicesService } from '../services/rest-services.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-editrecord',
  templateUrl: './editrecord.component.html',
  styleUrls: ['./editrecord.component.css']
})
export class EditrecordComponent implements OnInit {
  insdata:Resty=
  {
    "id":0,
    "name":"",
    "address":"",
    "phone":"",
    "description":"",
    "location":""
  }
  id:number=0;

constructor(private sr:RestServicesService,private ar:ActivatedRoute,private rr:Router){

}

ngOnInit(): void {
  this.ar.paramMap.subscribe((params)=>{
    this.id =Number(params.get('id'));
    this.getid(this.id);
  })
}



getid(id:number){
  this.sr.getbyid(id).subscribe((data)=>{
    this.insdata=data;
    this.insdata.id=id;
  })
}


update(){


  this.sr.updatedata(this.id,this.insdata).subscribe((data)=>{
    this.rr.navigate(['/'])
  });

}




}
