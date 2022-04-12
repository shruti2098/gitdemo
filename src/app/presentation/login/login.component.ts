import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup
  response:any
  constructor(private fb:FormBuilder,private router:Router,private service:AuthService) { }

  ngOnInit(): void {
    this.loginform=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  get formControls(){
    return this.loginform.controls;
  }
  onSubmit(){
    console.log(this.loginform.value);
    this.service.proceedLogin(this.loginform.value).subscribe(res => {
      console.log('in')
    this.response=res;
    console.log(res);
    console.log(this.response.token)
    localStorage.setItem("token",this.response.token);
    this.router.navigateByUrl('home')
    
    })
  
  }

}
