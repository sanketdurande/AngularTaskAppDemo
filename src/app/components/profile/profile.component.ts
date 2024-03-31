import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/register.module';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  dataSource: Register[]=[];

  displayColumns: string[]=['photo', 'fname', 'lname', 'email','phone', 
  'age','state','country','address','tags','subscribe']


  constructor(private registerService: RegisterService){
    this.getRegisters();
  }
  imgurl ="./assets/image.webp";

  
  ngOnInit(): void {
    
  }

  imgchange(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=> {
        this.imgurl=event.target.result;
      }
    }
  }
  getRegisters():void{
    this.registerService.getData().subscribe(
      {
        next: (res: Register[])=> {
          this.dataSource=res;
        },
        error: (err:HttpErrorResponse)=>{
          console.log(err);
        }
      }
    );
  }

}
