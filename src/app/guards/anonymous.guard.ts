import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../providers/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AnonymousGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuthenticated = this.authService.isAuthenticated(); // Método para comprobar la autenticación

    if (isAuthenticated) {
      this.router.navigate(['/dashboard']); // Redirigir al login si está autenticado y trata de entrar a una ruta publica
      return false;
    }

    return true;
  }
}
