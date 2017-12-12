import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "./auth.service";
import { User } from "./user.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html"
})
export class SigninComponent {
  myForm: FormGroup;

  constructor(private authService: AuthService, private router : Router) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const user = new User(this.myForm.value.email, this.myForm.value.password);

    this.authService
      .signIn(user)
      .subscribe(data => {
          console.log(data.data);
          localStorage.setItem("token",data.data.token);
          localStorage.setItem("userId",data.data.userId);
          this.router.navigateByUrl('/');
      }, error => console.error(error));

    this.myForm.reset();
  }
}
