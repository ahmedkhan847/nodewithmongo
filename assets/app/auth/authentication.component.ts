import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-authentication',
    template: `<header class="row spacing">
                    <nav class="col-md-8 col-md-offset 2">
                        <ul class="nav nav-tabs">
                            <li routerLinkActive="active">
                                <a [routerLink]="['signup']">Signup</a>
                            </li>
                            <li routerLinkActive="active">
                                <a [routerLink]="['signin']" *ngIf="!isLoggedIn()">Signin</a>
                            </li>
                            <li routerLinkActive="active">
                                <a [routerLink]="['logout']" *ngIf="isLoggedIn()">Logout</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div class="row spacing">
                    <router-outlet></router-outlet>
                </div>
                `

})

export class AuthenticationComponent {
    constructor(private authService: AuthService, private router : Router) {}

    isLoggedIn(){
        return this.authService.isLoggedIn();
    }
}