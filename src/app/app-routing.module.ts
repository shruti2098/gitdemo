import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { homedir } from 'os';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { BillingComponent } from './presentation/billing/billing.component';
import { EditComponent } from './presentation/edit/edit.component';
import { HomeComponent } from './presentation/home/home.component';
import { LoginComponent } from './presentation/login/login.component';
import { SupplierDetailsComponent } from './presentation/supplier-details/supplier-details.component';
//import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SupplierComponent } from './presentation/supplier/supplier.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  // {
  //   path:"",
  //   component:HomeComponent
  // },

  {
    path:"home",
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"supplier",
    component:SupplierComponent
  },
  {
    path:"billing",
    component:BillingComponent
  },
  {
    path:"supplier_details",
    component:SupplierDetailsComponent
  },
  {
    path:"edit/:supplierId",
    component:EditComponent
  }
  // {
  //   path:'Home',loadChildren: () => import('./home/home.component').then(m => m.HomeComponent)
  // } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
