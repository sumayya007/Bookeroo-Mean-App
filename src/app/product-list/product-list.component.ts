import { Component, OnInit } from '@angular/core';
import {ProductModel} from './product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
title:String="BOOK LIST";
// products:ProductModel[]=[];
products=[{
  productId :'',
  productName:'',
  productCode:'',
  releaseDate:'',
  description:'',
  price:'',
  starRating:'',
  imageUrl:''}]
imageWidth:number=50;
imageMargin:number=2;
showImage:boolean=false;

constructor(private router:Router,private productService:ProductService,public _auth:AuthService) { }

toggleImage():void{
  this.showImage=!this.showImage;
}
 ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>
    {
      this.products=JSON.parse(JSON.stringify(data));
    })
  
  }
  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['update']);

  }
  

deleteProduct(product:any){
this.productService.deleteProduct(product._id)
.subscribe((data)=>{
  this.products=this.products.filter(p=>p!==product);
})
}

}
