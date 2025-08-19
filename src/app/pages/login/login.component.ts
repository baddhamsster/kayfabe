import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CreateAccountModalComponent } from "../create-account/create-account-modal.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'ky-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatDialogModule,
    MatToolbarModule
  ],
})
export class LoginComponent {

  formGroup: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });


  readonly dialog = inject(MatDialog);
  constructor(private router: Router, private loginService: LoginService) {
    loginService.logout(); // Clear any existing session
  }

  ngOnInit(): void {
  }

  togglePassword(event: any, passwordField: any): void {
    event.stopPropagation();
    passwordField.type =
      passwordField.type === 'password' ? 'text' : 'password';
  }

  openCreateAccountModal(): void {
    const dialogRef = this.dialog.open(CreateAccountModalComponent, {
      height: "calc(100% - 30px)",
      width: "calc(100% - 30px)",
      maxWidth: "100%",
      maxHeight: "100%"
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  login(): void {
    // Implement login logic here
    console.log('Login clicked', this.formGroup.value);
    // For now, just navigate to home
    this.loginService.login(); // Simulate login)
    this.router.navigate(['/home']);
  }

}
