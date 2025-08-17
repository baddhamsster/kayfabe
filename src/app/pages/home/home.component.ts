import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MonthYearDateFormatDirective } from "../../directive/month-year-date-format.directive";
import { FullDateFormatDirective } from "../../directive/full-date-format.directive";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
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
    MatAccordion,
    MatExpansionModule,
    MatToolbarModule,
    MonthYearDateFormatDirective,
    FullDateFormatDirective
],
})
export class HomeComponent {

  formGroup: FormGroup = new FormGroup({
    accountType: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    legalName: new FormControl(''),
    gimmickName: new FormControl(''),
    gimmickDescription: new FormControl(''),
    gimmickType: new FormControl(''),
    promoImage: new FormControl(''),
    socialMedia: new FormControl(''),
    socialMediaHandle: new FormControl(''),
    socialMediaLink: new FormControl(''),
    height: new FormControl(''),
    weight: new FormControl(''),
    hometown: new FormControl(''),
    dateOfBirth: new FormControl(''),
    wrestlingStyle: new FormControl(''),
    finisher: new FormControl(''),
    signatureMove: new FormControl(''),
    entranceTheme: new FormControl(''),
    wrestlingStartDate: new FormControl(''),
    wrestlingAchievements: new FormControl(''),
    wrestlingPromotion: new FormControl(''),
    wrestlingTrainers: new FormControl(''),
    wrestlingSchool: new FormControl(''),
    email: new FormControl('')
  });

  accountTypes = [
    { value: 'fan', label: 'Fan' },
    { value: 'booker', label: 'Booker/Promoter' },
    { value: 'wrestler', label: 'Wrestler' },
    { value: 'referee', label: 'Referee' },
    { value: 'commentator', label: 'Commentator' },
    { value: 'manager', label: 'Manager' },
    { value: 'other', label: 'Other' },
    { value: 'admin', label: 'Admin' }
  ].sort((a, b) => a.label.localeCompare(b.label));

  gimmickTypes = [
    { value: 'technical', label: 'Technical' },
    { value: 'striker', label: 'Striker' },
    { value: 'highflyer', label: 'High-Flyer' },
    { value: 'power', label: 'Power' },
    { value: 'hybrid', label: 'Hybrid' }
  ].sort((a, b) => a.label.localeCompare(b.label));

  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here
    this.formGroup.patchValue({
      accountType: 'wrestler', //
      username: 'kayfabe',//
      password: 'password123',//
      legalName: 'John Doe',//
      gimmickName: 'The Phantom',//
      gimmickDescription: 'A mysterious figure who appears out of nowhere',//
      gimmickType: 'technical',//
      promoImage: 'https://example.com/image.jpg', // still need to implement image upload
      socialMedia: 'Twitter',
      socialMediaHandle: '@thephantom',
      socialMediaLink: 'https://twitter.com/thephantom',
      height: '6\'2"',
      weight: '220 lbs',
      hometown: 'Parts Unknown',
      dateOfBirth: '1990-01-01',
      finisher: 'Phantom Drop',
      signatureMove: 'Phantom Kick',
      entranceTheme: 'Mysterious Theme',
      wrestlingStartDate: '2010-01-01',
      wrestlingAchievements: '2-time Champion, 5-time Tag Team Champion',
      wrestlingPromotion: 'Wrestling Federation',
      wrestlingTrainers: 'Legendary Trainer',
      wrestlingSchool: 'Famous Wrestling School',
      email: ''
    });
  }

  togglePassword(event: any, passwordField: any): void {
    event.stopPropagation();
    passwordField.type =
      passwordField.type === 'password' ? 'text' : 'password';
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      console.log(`Uploading file: ${file.name}`);
      const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(file);
    }
  }

  uploadFiles(): void {
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

}
