import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{DashboardComponent} from './dashboard/dashboard.component'
import { AddrecordComponent } from './addrecord/addrecord.component';
import { EditrecordComponent } from './editrecord/editrecord.component';

const routes: Routes = [{
  path:'',component:DashboardComponent,pathMatch:'full'
},
{path:'add',component:AddrecordComponent}
,
{path:'edit/:id',component:EditrecordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
