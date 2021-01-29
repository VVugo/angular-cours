import { MatSnackBar } from '@angular/material';
import { Component } from '@angular/core';
import {SessionService} from './core/services/session.service';
import {AuthService} from './core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  get isSignedIn(): boolean {
    return AuthService.isSignedIn;
  }

  get isAdmin(): boolean {
      return AuthService.isAdmin;
  }

  signout() {
    // supprimer les données de sessions et retourner à la page de login
    this.snackBar.open('Déconnexion réussi',"A bientôt :)",{
      duration:2000
    });
    this.router.navigate(['/auth/landingpage']).then(() => {
      this.sessionService.clear();
      AuthService.user = null;
    });
  }

}
