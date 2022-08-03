import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { UserModel } from './user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private productService:ProductService,private router:Router) { }
  
  user= {
    username :'',
    email:'',
    age:null,
    password:'',
   }
  ngOnInit(): void {
  }
onSubmit(){
  this.productService.newUser(this.user);
  
  alert("User registered successfully!!");
  this.router.navigate(['/landingpage']);  
  
}
}
