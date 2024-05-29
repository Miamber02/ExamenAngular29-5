import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, Datum } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  /*getUsers(): Observable<User> {
    return this.http.get<User>(this.apiUrl);
  }*/

  getUsers(page: number = 1): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}?page=${page}`);
  }

  getUserById(id: string): Observable<{ data: Datum }> {
    return this.http.get<{ data: Datum }>(`${this.apiUrl}/${id}`);
  }

  searchUsers(query: string): Observable<Datum[]> {
    return this.http.get<User>(`${this.apiUrl}?per_page=12`).pipe(
      map(response => 
        response.data.filter(user => 
          user.first_name.toLowerCase().includes(query.toLowerCase())
        )
      )
    );
  }

  addUser(user: Datum): Observable<Datum> {
    return this.http.post<Datum>(this.apiUrl, user);
  }

  updateUser(id: string, user: Datum): Observable<Datum> {
    return this.http.put<Datum>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: string): Observable<void> {

    /*const requestOptions = {
      method: "DELETE",
      redirect: "follow"
    };
    
    fetch(`${this.apiUrl}/${id}`, requestOptions)
      .then((response) => console.log(response))
      .then((result) => console.log(result))
      .catch((error) => console.error(error));*/

      return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}