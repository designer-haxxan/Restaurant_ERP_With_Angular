import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Resty } from '../interfaces/resty';

@Injectable({
  providedIn: 'root'
})
export class RestServicesService {

  constructor(private http:HttpClient) { }



  getall():Observable<Resty[]>{
      return this.http.get<Resty[]>('http://localhost:3000/restaurantdata');
  }


  createdata(data:any):Observable<Resty[]>{
    return this.http.post<Resty[]>('http://localhost:3000/restaurantdata',data);
  }


  getbyid(id:number):Observable<Resty>{
      return this.http.get<Resty>(`http://localhost:3000/restaurantdata/${id}`);
  }

  updatedata(id:number,data:Resty):Observable<Resty>{
    return this.http.put<Resty>(`http://localhost:3000/restaurantdata/${id}`,data);
  }

  deletedata(id:number){
    return this.http.delete(`http://localhost:3000/restaurantdata/${id}`);
  }


}
