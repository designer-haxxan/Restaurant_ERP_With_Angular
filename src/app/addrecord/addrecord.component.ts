import { Component, OnInit } from '@angular/core';
import { RestServicesService } from '../services/rest-services.service';
import { Resty } from '../interfaces/resty';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
  styleUrls: ['./addrecord.component.css']
})
export class AddrecordComponent implements OnInit{

  insdata:Resty=
    {
      "id":null,
      "name":"",
      "address":"",
      "phone":"",
      "description":"",
      "location":""
    }


constructor(private sr:RestServicesService,private route:Router){

}


ngOnInit(): void {
  
}



insert(){
  this.sr.createdata(this.insdata).subscribe(data=>{
    this.route.navigate(['/']);

  })
}



}
