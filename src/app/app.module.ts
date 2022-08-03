import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './newproduct/newproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductService } from './product.service';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FooterComponent } from './footer/footer.component';
import { UserbooksComponent } from './userbooks/userbooks.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    NewProductComponent,
    UpdateproductComponent,
    LoginComponent,
    RegisterComponent,
    LandingpageComponent,
    FooterComponent,
    UserbooksComponent
  ],
  // we are implementing as instance oh httpinterceptors,we are using 
  //Tokeniterceptorservice class for proving tokeninterceptor;multi true to handle multiple req
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService,AuthService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
