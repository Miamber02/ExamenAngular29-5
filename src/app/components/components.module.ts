import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
    NavigationComponent,
    UserSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AdminComponent,
    UserComponent
  ]
})
export class ComponentsModule { }
