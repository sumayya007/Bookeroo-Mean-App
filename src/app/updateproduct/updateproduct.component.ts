import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  productItem= {
    productId :'',
    productName:'',
    productCode:'',
    releaseDate:'',
    description:'',
    price:'',
    starRating:'',
    imageUrl:''}
    title:string='EDIT BOOK DETAILS';
  constructor(private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("editProductId");
    this.productService.getProduct(productId).subscribe((data: any)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
  })
  }
  
  editProduct()
  {    
    this.productService.editProduct(this.productItem);   
    alert("Success");
    this.router.navigate(['products']);
  }

}
