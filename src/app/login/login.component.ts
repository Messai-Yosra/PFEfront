import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string | null = null;

  formModel={
    userName: '',
    password: ''
  }

  constructor(private service:UserService,private router:Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    if(localStorage.getItem('token') != null)
    this.router.navigateByUrl('/welcome');
  
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any)=>{
        localStorage.setItem('token',res.token);
        this._snackBar.open('Welcome', 'Ok');
        if (this.service.roleMatch(['ADMIN'])) {
          this.router.navigateByUrl('/dashboard');
        }else
        this.router.navigateByUrl('/welcome');

      },
      err=>{
        this._snackBar.open('Incorrect username or password', 'Ok');
      }

    );
    
  }

  // login(loginForm: NgForm) {
  //   console.log(loginForm.value);
  //   // Simulating successful login without authentication
  //   const link = ['welcome'];
  //   //localStorage['token'] = 'dummy_token'; // Storing a dummy token for demonstration
  //   this.router.navigate(link);
  // }
}


