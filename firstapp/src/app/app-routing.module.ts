import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountinfoGuard } from './accountinfo.guard';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { DeleteCustomersComponent } from './customer/delete-customers/delete-customers.component';
import { EditCustomersComponent } from './customer/edit-customers/edit-customers.component';
import { LoansTypesComponent } from './loans-types/loans-types.component';
import { LoansComponent } from './loans/loans.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PreferncesGuardGuard } from './prefernces-guard.guard';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { SuperAdminGuard } from './super-admin.guard';
import { UnsavedGuard } from './unsaved.guard';

const routes: Routes = [
  //we will create all our routes here
  
  {
    path: 'loans',
    component: LoansComponent,
    //resolve data is loaded before route is activated below line is added u can remove
    resolve: {data:AccountinfoGuard }
  },
  {
    path: 'loan-types',
    component: LoansTypesComponent,
    outlet: 'addLoan'
  },
  {
    path: 'add-loans',
    children: [
      { path: 'add-loan', component: AddLoansComponent },
      { path: 'edit-loan', component: AddLoansComponent }
    ]

    
  },
  {
    path: 'add_new_loan',
    redirectTo:'add-loans1'
  },
  {
    path: 'add-loans1',
    component: AddLoansComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'product/:productId/photos/:photoId1',
    component: ProductComponent
  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  {
    path: 'search',
    component: SearchComponent,
    canDeactivate: [UnsavedGuard]//have added this line to work with canDeactivate not related to query params
  },
  {
    path: 'admin',
    canActivate: [SuperAdminGuard],
    children: [
      {
        path: '',
        component: AdminComponent,
      },
      {
        path: '',
        canActivateChild: [AdminAccessGuard],
        children: [
          { path: 'manage', component: AdminManageComponent },
          { path: 'edit', component: AdminEditComponent },
          { path: 'delete', component: AdminDeleteComponent }
        ]

      }
      ]
  },
  {
    path: 'prefernces',
    canLoad: [PreferncesGuardGuard],
    loadChildren: () => import('./prefernces/prefernces.module').then(m => m.PreferncesModule)
  },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },

  {
    path: 'customer',
    children: [
      {
        path: '',
        component: CustomerComponent
      },
      {
        path: '',
        children: [
          { path: 'addCustomer', component: AddCustomerComponent },
          { path: 'editCustomer', component: EditCustomersComponent },
          { path: 'deleteCustomer', component: DeleteCustomersComponent }
        ]

      }
    ]
  },



  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]//we will export them through the application
})
export class AppRoutingModule { }
