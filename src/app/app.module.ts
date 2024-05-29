import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
//import { UserListComponent } from './user/user-list/user-list.component';
//import { UserDetailComponent } from './user/user-detail/user-detail.component';
//Importar modulos aqui
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//import { UserSearchComponent } from './components/user-search/user-search.component';
//import { SortPipe } from './sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ErrorComponent,
    AdminComponent,
    UserComponent,
    NavigationComponent,
    //UserSearchComponent
    //SortPipe
  ],
  imports: [ //Importar modulos aqui
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    //FormsModule, // para el search
  ],
  providers: [AuthGuard, UserService, provideAnimationsAsync()], //AuthGuard, User service
  bootstrap: [AppComponent]
})
export class AppModule { }
