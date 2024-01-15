import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountinfoGuard implements Resolve<any> {
  //we will have a service -call service api to get details
  //which will give user obj
  userObj = {
    id: 1,
    name:'RAJ'
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userObj
    //when any route use this guard send this userObj data
  }
  
  
}
