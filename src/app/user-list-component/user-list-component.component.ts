import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { UserService } from '../user.service';
import { users } from '../users';
export interface Users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate?: string;
  phoneNumber?: string;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrl: './user-list-component.component.css',
})
export class UserListComponentComponent {
  constructor(private userService: UserService) {}
  displayedColumns: string[] = ['id', 'firstName', 'email'];
  dataSource = this.userService.getData();
  onRowClicked(id: number) {
    this.dialog.open(FullDetailsInDialog);
    console.log('Row clicked: ', id);
  }
}
