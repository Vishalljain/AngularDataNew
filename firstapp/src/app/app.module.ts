import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoansComponent } from './loans/loans.component';
import { LoansTypesComponent } from './loans-types/loans-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    LoansTypesComponent,
    AddLoansComponent,
    ProductComponent,
    ClientsComponent,
    SearchComponent,
    PageNotFoundComponent,
    AdminComponent,
    AdminEditComponent,
    AdminDeleteComponent,
    AdminManageComponent
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,          
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
