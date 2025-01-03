import { Component } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  constructor(private menuService:MenuService) { }

  menus!:Menu[];
  idUser:number=5;
  menu!:Menu;


  addReservation(id:number){
    this.menuService.getMenuById(id).subscribe(
      (data) => {
        this.menu = data;
        this.menu.reservations.push(this.idUser);
        console.log(this.menu);
        this.menuService.patchMenu(this.menu).subscribe(
          (data) => {
            console.log(data);
            }
          );
      }
    );
  }


  ngOnInit(): void {
    this.menuService.getMenus().subscribe(
      (data) => {
        this.menus = data;
      }
    );

  }


}
