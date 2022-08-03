import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from './product-list/product.model';
import {UserModel} from './register/user.model';
import { libServer } from 'server';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProduct(id:any){
    return this.http.get(`${libServer}/`+id);
  }
  getProducts(){
    return this.http.get(`${libServer}/products`);
  }
  newProduct(productItem: ProductModel){
    return this.http.post(`${libServer}/insert`,{"product":productItem}).subscribe(data=>{console.log(data)});
  }
  deleteProduct(id:any)
  {

    return this.http.delete(`${libServer}/remove/`+id);

  }
  editProduct(productItem:any){

    console.log('client update');
    return this.http.put(`${libServer}/update`,productItem)
    .subscribe(data =>{console.log(data)});
  }

  newUser(user:UserModel){
return this.http.post<any>(`${libServer}/insertuser`,{"user":user}).subscribe(data=>{console.log(data)});

  }

 getUsers(){
    return this.http.get(`${libServer}/users`);
  }
  
}
