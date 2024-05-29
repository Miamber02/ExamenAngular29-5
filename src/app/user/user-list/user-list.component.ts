import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Datum } from '../../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: Datum[] = [];
  page: number = 1;
  totalPages: number = 1;
  sortOrder: string = 'asc';
  allUsers: Datum[] = [];
  admin: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
    const user = localStorage.getItem('user');
    if(user == "admin") {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }

  loadUsers() {
    this.userService.getUsers(this.page).subscribe(response => {
      this.users = response.data;
      this.totalPages = response.total_pages;
      this.allUsers = response.data;
    });
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadUsers();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadUsers();
    }
  }

  onSortChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.sortOrder = selectElement.value;
  }

  onSearch(query: string) {
    if (query) {
      this.userService.searchUsers(query).subscribe(users => {
        this.users = users;
      });
    } else {
      this.users = this.allUsers;
    }
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id.toString()).subscribe(() => {
      console.log("Usuario borrado")
      this.loadUsers();
    });
  }
}