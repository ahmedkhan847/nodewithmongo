var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "./auth.service";
var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AuthenticationComponent = __decorate([
        Component({
            selector: 'app-authentication',
            template: "<header class=\"row spacing\">\n                    <nav class=\"col-md-8 col-md-offset 2\">\n                        <ul class=\"nav nav-tabs\">\n                            <li routerLinkActive=\"active\">\n                                <a [routerLink]=\"['signup']\">Signup</a>\n                            </li>\n                            <li routerLinkActive=\"active\">\n                                <a [routerLink]=\"['signin']\" *ngIf=\"!isLoggedIn()\">Signin</a>\n                            </li>\n                            <li routerLinkActive=\"active\">\n                                <a [routerLink]=\"['logout']\" *ngIf=\"isLoggedIn()\">Logout</a>\n                            </li>\n                        </ul>\n                    </nav>\n                </header>\n                <div class=\"row spacing\">\n                    <router-outlet></router-outlet>\n                </div>\n                "
        }),
        __metadata("design:paramtypes", [AuthService, Router])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
export { AuthenticationComponent };
