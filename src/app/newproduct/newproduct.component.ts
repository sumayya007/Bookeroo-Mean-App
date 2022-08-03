
import { Component, OnInit } from '@angular/core';
// import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewProductComponent implements OnInit {
  title:String="ADD BOOK";
  constructor(private productService:ProductService,private router: Router,public _auth:AuthService){  } 
  productItem= {
     productId :null,
     productName:'',
     productCode:'',
     releaseDate:'',
     description:'',
     price:null,
     starRating:null,
     imageUrl:''}
 // productItem: IProduct;
 
  ngOnInit() {
  }
  AddProduct()
  {    
    this.productService.newProduct(this.productItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }
}

