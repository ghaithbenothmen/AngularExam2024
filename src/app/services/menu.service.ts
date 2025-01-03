import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  apiUrlMenu: string="http://localhost:3000/menu";
  constructor(private http:HttpClient) {}


  getMenus(): Observable<Menu[]>{
    return this.http.get<Menu[]>(this.apiUrlMenu); 
  }

  addMenu(menu:Menu): Observable<Menu>{
    return this.http.post<Menu>(this.apiUrlMenu, menu);
  }
  getMenuById(id:number): Observable<Menu>{
    return this.http.get<Menu>(this.apiUrlMenu+"/"+id);
  }
  patchMenu(menu:Menu): Observable<Menu>{
    return this.http.patch<Menu>(this.apiUrlMenu+"/"+menu.id,menu);
  }
  
  

  


}
