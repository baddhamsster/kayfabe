import { Directive } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import { MomentDateAdapter } from "@angular/material-moment-adapter";

const DATE_FORMAT = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Directive({
  selector: '[monthYearDateFormat]',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter
    },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT },
  ],
})
export class MonthYearDateFormatDirective { }
