import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { RestServicesService } from '../services/rest-services.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {



  constructor(public dialogRef: MatDialogRef<DeleteComponent>,private sr:RestServicesService,@Inject(MAT_DIALOG_DATA) public data:any){

  }




  confirmdelete(){
    this.sr.deletedata(this.data.id).subscribe(()=>{
      
      this.dialogRef.close(this.data.id); 

    })
  }




}
