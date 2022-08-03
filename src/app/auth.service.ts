import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { libServer } from 'server';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private http:HttpClient,private router:Router) { }
  loginUser(user:any){
    
    console.log("inside auth",user);
    return this.http.post<any>(`${libServer}/login`,user);
 
  }
  // !! to check whether token is present or not,returns a boolean value
  loggedIn(){
    return !!localStorage.getItem('token')  
  }
  // for reading the value of token in local storage
  getToken(){
 return localStorage.getItem('token')
  }
}
