import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../alert.service';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        //if (this.authenticationService.currentUserValue) {
        //    this.router.navigate(['/']);
        //}
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value.email,this.registerForm.value.username,this.registerForm.value.password)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.alertService.success('Registration successful', true);
                    localStorage.setItem('currentToken', JSON.stringify(data));
                    localStorage.setItem('username',JSON.stringify(this.registerForm.value.username));
                    this.router.navigate(['']);
                },
                error => {
                    this.alertService.error("token?", error.error.text);
                    this.loading = false;
                });
    }
}
