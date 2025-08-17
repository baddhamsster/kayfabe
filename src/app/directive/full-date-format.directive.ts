import { Directive } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import { MomentDateAdapter } from "@angular/material-moment-adapter";

const DATE_FORMAT = {
  parse: {
    dateInput: 'MM/DD/YYYY',
  },
  display: {
    dateInput: 'MM/DD/YYYY',
    monthYearLabel: 'MMM DDD YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM DDDD YYYY',
  },
};

@Directive({
  selector: '[fullDateFormat]',
   providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter
    },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT },
  ],
})
export class FullDateFormatDirective { }
