import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { NewProductComponent } from './newproduct/newproduct.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UserbooksComponent } from './userbooks/userbooks.component';


const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'landingpage',component:LandingpageComponent},
  {path:'add',canActivate:[AuthGuard],component:NewProductComponent},
  {path:'update',component:UpdateproductComponent},
  {path:'products',component:ProductListComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'userbooks',component:UserbooksComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
