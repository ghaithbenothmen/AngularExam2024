import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent {


  constructor(private fb: FormBuilder,private route:ActivatedRoute,private menuService:MenuService) {
  this.noteForm=this.fb.group({
    note: ['',[Validators.min(0),Validators.max(5)]],
   });
  }
  noteForm!:FormGroup ;
  menuId !: Number;
  menu!:Menu;

  
  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.menuId = params['id'];
        this.menuService.getMenuById(Number(this.menuId)).subscribe(
          (data) => {
            this.menu = data;
          }
        );      
      }
    );
    console.log(this.menuId);
  }

  
  note!:number;
  addNote(){
    if(this.noteForm.valid){
      this.note = this.noteForm.value.note;
      if(this.menu.mark == 0){
        this.menu.mark = this.note;
      }
      else{
        console.log("note",this.note);
        console.log("old mark",this.menu.mark);
        this.menu.mark = Number((this.menu.mark + this.note)/2);
      }
      
    console.log("mark",this.menu.mark);
      this.menuService.patchMenu(this.menu).subscribe(
        (data) => {
          console.log(data);
          }
        );
    }
  }



}
