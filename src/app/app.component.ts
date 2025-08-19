import { Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { LoginService } from './services/login.service';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { filter } from 'rxjs';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list"
import { MatMenuModule } from "@angular/material/menu"
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MatSidenavModule, MatButtonModule, MatToolbarModule, MatListModule,
    MatMenuModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kayfabe';
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  constructor(protected loginService: LoginService, router: Router, private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2) {
    router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      switch (event.url) {
        case '/login':
          this.loginService.logout()
          break;
        default:
          this.loginService.login()
          break;
      }
    });
  }

}
