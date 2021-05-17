import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup , Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { logind } from '../demo/data.commd';
import { AuthenticationnService } from '../_service/authenticationn.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logiForm: FormGroup;
  returnUrl: string;
  lognst = false;
  loading = false;
  error = '';
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthenticationnService
  ) {
    if (this.auth.currentUserValue) {
      this.router.navigate(['/']);
  }
  }

  ngOnInit(): void {
    this.logiForm = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl;
  }
  get f() {return this.logiForm.controls; }

  onSubmit(){
    this.lognst = true;

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/demo';
    if (this.logiForm.invalid){
      return;
    }
    this.loading = true;
    console.log(this.logiForm.value);
    this.auth.login(this.logiForm.value)
        .pipe(first())
          .subscribe(
            data => {
              // if(data.token=!''){
              console.log(true);
              console.log(data);

              this.router.navigate([this.returnUrl]);
              // this.router.navigate(['./demo']);
              // }else{
              //   console.log(false);

              // }
            },
            error => {
              console.log(error, false);
              this.error = 'Username or password is incorrect';
              this.loading = false;

            }
      );

    // }

  //   console.log(this.logiForm);

  }

}
