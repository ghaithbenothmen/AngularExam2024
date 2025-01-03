import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {

menuForm !:FormGroup;


  menu!:Menu;

  constructor( private fb: FormBuilder,private menuService: MenuService) {
    
  this.menuForm = this.fb.group({
    title: ['',Validators.required],
    description: ['', [Validators.required, Validators.minLength(10)]],
  });
   }

  ngOnInit(): void {
  }



  addMenu(){
    if(this.menuForm.valid){
      

      this.menu = this.menuForm.value;
      this.menu.approved = false;
      this.menu.mark = 0;

      //console.log(this.menuForm.value);
      console.log(this.menu);
      this.menuService.addMenu(this.menu).subscribe(
        (data) => {
          console.log(data);
          }
        );
      }

  }

}
