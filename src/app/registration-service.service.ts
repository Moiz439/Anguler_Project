import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './register';
@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  private addUser="http://localhost:8080/User/AddUser";
  private selectUser="http://localhost:8080/User/SelectUser";
  private SelectUserById="http://localhost:8080/User/SelectUserById/";
  private DeleteUserById="http://localhost:8080/User/DeleteUserById";
  private UpdateUser="http://localhost:8080/User/UpdateUser";

  constructor(private httpClient:HttpClient) { }

  addUsers(register:any):Observable<any>{
    return this.httpClient.post<any>(this.addUser,register);
  }
  selectUsers():Observable<Register[]>
  {
    return this.httpClient.get<Register[]>(`${this.selectUser}`);
  }
 
  selectUserByIds(id:number):Observable<Register>
  {
    return this.httpClient.get<Register>(`${this.SelectUserById}/${id}`);
  }

  updateUsers(id:number,register:Register):Observable<Object>
  {
    return this.httpClient.put(`${this.UpdateUser}/${id}`,register);
  }

  deleteUsers(id:any):Observable<any>
  {
    return this.httpClient.delete<any>(this.DeleteUserById+id);
  }
  
}
