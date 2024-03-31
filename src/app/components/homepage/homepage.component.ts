import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private matDialog:MatDialog ){}
  open(){
    this.matDialog.open(RegisterComponent,{
      width:'40%',height:'70%',
    })

  }


}
