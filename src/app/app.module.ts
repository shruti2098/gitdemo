//import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingComponent } from './presentation/billing/billing.component';
import { HomeComponent } from './presentation/home/home.component';
import { SupplierComponent } from './presentation/supplier/supplier.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SupplierDetailsComponent } from './presentation/supplier-details/supplier-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LoginComponent } from './presentation/login/login.component';
import { EditComponent } from './presentation/edit/edit.component';
import { DataTablesModule } from 'angular-datatables';
import { SearchbyNameComponent } from './presentation/searchby-name/searchby-name.component';
//import { SearchByNamePipe } from './search-by-name.pipe';
//import { ModulesComponent } from './presentation/modules/modules.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SupplierComponent,
    BillingComponent,
    NavigationBarComponent,
    SupplierDetailsComponent,
    LoginComponent,
    EditComponent,
    SearchbyNameComponent,
    //SearchByNamePipe,
    
    
    
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,

      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
