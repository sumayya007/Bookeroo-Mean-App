import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-userbooks',
  templateUrl: './userbooks.component.html',
  styleUrls: ['./userbooks.component.css']
})
export class UserbooksComponent implements OnInit {
  title:String="BOOK LIST";
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

}
