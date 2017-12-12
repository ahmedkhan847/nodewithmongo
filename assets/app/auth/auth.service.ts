import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { User } from "./user.model";
import { Observable } from "rxjs/Rx";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class AuthService {
  constructor(private http: Http, private errorService: ErrorService) {}

  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    return this.http
      .post("https://angular2-app-message.herokuapp.com/user", body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  signIn(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    return this.http
      .post("https://angular2-app-message.herokuapp.com/user/signin", body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem("token") !== null;
  }
}
