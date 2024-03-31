import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Register } from 'src/app/register.module';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  fname: string= "";
  lname:string= "";
  photo:string="";
  email:string= "";
  phone: string="";
  age:number= 0;
  state: string="";
  country:string="";
  address:string="";
  tags: string="";
  subscribe:string="";
 b: number = 18;
  imgurl ="./assets/image.webp";

  register: Register={
    fname: "",
    lname: "",
    photo:"",
    email: "",
    phone: "",
    age: 0,
    state: "",
    country: "",
    address: "",
    tags: "",
    subscribe: ""
  }
    


  constructor(private registerService:RegisterService, private formBuilder:FormBuilder ){
    this.registerForm=formBuilder.group({
      fname: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    lname: new FormControl ('',[Validators.required]),
    photo:new FormControl ('',[Validators.required]),
    email:new FormControl ('',[Validators.required, Validators.email]),
    phone: new FormControl ('',[Validators.required]),
    age: new FormControl ('',[Validators.required]),
    state: new FormControl ('',[Validators.required]),
    country: new FormControl ('',[Validators.required]),
    address: new FormControl ('',[Validators.required]),
    tags: new FormControl ('',[Validators.required]),
    subscribe: new FormControl ('',[Validators.required]),
    });
  }
  
  
  
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

  saveData(registerForm:any):void{
    this.registerService.saveData(this.register).subscribe(
      {
        next:(res:Register) =>{
          console.log(res);
          registerForm.reset();
        },
        error: (err:HttpErrorResponse) =>{
          console.log(err);
        }
      }
    );

  }

}
