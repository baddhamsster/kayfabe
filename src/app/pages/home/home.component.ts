import { UserData, TEST_USER_DATA } from '../../model/user-data';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'ky-home',
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
    MatDialogModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatMenuModule
  ],
})

export class HomeComponent {
  defaultColumns: string[] = ['username', 'gimmickName', 'legalName', 'accountType', 'currentLocation']


  dataSource: MatTableDataSource<UserData> = new MatTableDataSource(TEST_USER_DATA);

  tableColumns: TableColumn<UserData>[] = this.getTableColumnsFromUserData();

  displayedColumns: string[] = []


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor() { }

  ngOnInit() {
    this.defaultColumns.forEach(col => {
     this.addColumn(col, true)
    })
  }


  ngAfterViewInit() {
    console.log(this.tableColumns)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private filterKeysToStringArray(columns: TableColumn<UserData>[]): string[] {
    return columns.map(col => col.key);
  }


  private getTableColumnsFromUserData(): TableColumn<UserData>[] {
    const userDataKeys = this.getUserDataKeys();

    // Helper to get all keys from UserData interface
    return userDataKeys.map(key => ({
      key,
      label: this.toLabel(key),
      show: false
    }));
  }

  private getUserDataKeys(): (keyof UserData)[] {
    return Object.keys(TEST_USER_DATA[0]) as (keyof UserData)[];
  }

  private toLabel(key: keyof UserData): string {
    // Convert camelCase to Title Case for labels
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  }

  addColumn(key: string, show: boolean) {
    const foundIndex = this.tableColumns.findIndex(item => item.key === key);

    if (foundIndex !== -1) {
      this.tableColumns[foundIndex].show = show;
    }
    this.displayedColumns = this.filterKeysToStringArray(this.tableColumns.filter(col => col.show))
  }

}



export interface TableColumn<T> {
  key: keyof T;
  label: string;
  show: boolean;
}

