import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationnService } from '../_service/authenticationn.service';

// import { AuthenticationService } from '../_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationnService
    ) {}

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            console.log('good', currentUser);


            // authorised so return true
            const itemStr = localStorage.getItem('_IDd');
            if (!itemStr){  return null!;  }
            const nows = new Date();
            const items = JSON.parse(itemStr);
            if (nows.getTime() > items.expiry){
                console.log('R');
            }else{
                console.log('N');
                this.authenticationService.sessiontimestart();
            }

            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
