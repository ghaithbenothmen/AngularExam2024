import { Component } from '@angular/core';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent {
  

  idUser:number=1;
  menus!:Menu[];
  
  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    console.log("hello",this.idUser)
    this.menuService.getMenus().subscribe(
      (data) => {
        //console.log("all",data);
        this.menus = data.filter((menu) => menu.reservations.includes(this.idUser));
        console.log("menu",this.menus);
      }
    );

  }



}
