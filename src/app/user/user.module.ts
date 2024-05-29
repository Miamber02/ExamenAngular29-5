import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AuthGuard } from '../auth.guard';
import { UserSearchComponent } from '../components/user-search/user-search.component';

import { SortPipe } from '../sort.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
    { path: '', component: UserListComponent, canActivate: [AuthGuard] },
    { path: 'add', component: UserAddComponent, canActivate: [AuthGuard] },
    { path: 'edit/:id', component: UserEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: UserDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    SortPipe,
    UserSearchComponent,
    UserAddComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class UserModule { }