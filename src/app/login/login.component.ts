import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { UserModel } from '../register/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//   user={username:'',
// password:''};
user=new UserModel(null,null,null,null);
  users: any;
  // customers: any;
  constructor(private _auth:AuthService,private _router:Router,private productService:ProductService) { }

  ngOnInit(): void {
  //   let username = localStorage.getItem("username");
    this.productService.getUsers().subscribe((data: any)=>{
      console.log(data);
      this.users=JSON.parse(JSON.stringify(data));
            
    })
  
  }
 

loginUser(user:any){
  const arr=this.users;
  console.log("array is",arr[0].username);
  console.log("typed text",user.username);
  if(user.username=="admin" && user.password=="12345"){
    alert("Welcome Admin");
    this._auth.loginUser(this.user)
    .subscribe(
      res=>{
      
        localStorage.setItem('token',res.token);
        console.log("response token is",res.token);
        this._router.navigate(['/products']);
           })
  }
  for(let i=0;i<arr.length;i++){
   
    if(arr[i].username==user.username){
      if(this.users[i].password==this.user.password){
      alert("login successfull!!");
      this._auth.loginUser(this.user)
      .subscribe(
        res=>{
        
          localStorage.setItem('token',res.token);
          console.log("response token is",res.token);
          this._router.navigate(['/userbooks']);
             })
      }
   } 
  

  }
}

}










 
  

  

  
  




