import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { RegisterComponent } from './components/register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Appdata';
  constructor(private matDialog:MatDialog ){}
  open(){
    this.matDialog.open(RegisterComponent,{
      width:'40%',height:'70%',
    })

  }
}

